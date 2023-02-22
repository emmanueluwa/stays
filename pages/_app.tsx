import '../styles/globals.css'
import { AppProps } from 'next/app'
import {ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache, Observable} from "@apollo/client"
import { onError } from "@apollo/client/link/error";
import { getAccessToken, setAccessToken } from '../lib/accessToken';
import { useEffect, useState } from 'react';
import { TokenRefreshLink } from 'apollo-link-token-refresh'
import jwtDecode, { JwtPayload } from 'jwt-decode';


export default function App({ Component, pageProps }: AppProps) {
  const cache = new InMemoryCache({});

  const requestLink = new ApolloLink(
    (operation, forward) => 
      new Observable(observer => {
        let handle: any;
        Promise.resolve(operation)
          .then(operation => {
            const accessToken = getAccessToken();
            if (accessToken) {
              operation.setContext({
                headers: {
                  authorization: `bearer ${accessToken}`
                }
              });
            }
          })
          .then(() => {
            handle = forward(operation).subscribe({
              next: observer.next.bind(observer),
              error: observer.error.bind(observer),
              complete: observer.complete.bind(observer)
            });
          })
          .catch(observer.error.bind(observer));
        
        return () => {
          if (handle) handle.unsubscribe();
        };
      })
  );

  const client = new ApolloClient({
    link: ApolloLink.from([
      new TokenRefreshLink({
        accessTokenField: "accessToken",
        isTokenValidOrUndefined: () => {
          const token = getAccessToken()

          if (!token) {
            return true;
          }

          try {
            //when token expires
            const { exp } = jwtDecode<JwtPayload>(token);
            //check if token still valid
            if (Date.now() >= exp * 1000) {
              return false;
            } else {
              return true;
            }
          } catch {
            return false;
          }
        },
        fetchAccessToken: () => {
          return fetch('http://localhost:4000/refresh_token', { 
            method: "POST",
            credentials: "include" 
          });
        },
        handleFetch: accessToken => {
          setAccessToken(accessToken)
        },
        handleError: err => {
          // used to handle token fetch error
          console.warn("Your refresh token is invalid. Try to login again");
          console.error(err);
        }
      }),
      onError(({ graphQLErrors, networkError }) => {
        console.log(graphQLErrors)
        console.log(networkError)
      }),
      requestLink,
      new HttpLink({
        uri: 'http://localhost:4000/graphql',
        credentials: "include"
      })
    ]),
    cache
  });

  const [loading, setLoading] = useState(true);

  /*
  renew refresh token when page refreshes, so user can stay logged in
  before app is rendered, request to server... 
        sending refresh token to get new access token
  (persisting user between refreshes)
  */
  useEffect(() => {
    fetch('https://staysback.up.railway.app', { 
      method: "POST",
      credentials: "include" }).
      then(async x => {
        const {accessToken} = await x.json();
        setAccessToken(accessToken);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>loading...</div>
  }



  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />

    </ApolloProvider>
  );
}
