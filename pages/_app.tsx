import '../styles/globals.css'
import { AppProps } from 'next/app'
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from "@apollo/client"
import { getAccessToken, setAccessToken } from '../libs/accessToken';
import { useEffect, useState } from 'react';


export default function App({ Component, pageProps }: AppProps) {
  const accessToken = getAccessToken()
  const link = new HttpLink({
    uri: 'http://localhost:4000/graphql',
    credentials: 'include',
    headers: {
      authorization: accessToken ? `bearer ${accessToken}` : ""
    }
  })
  const client = new ApolloClient({
    cache: new InMemoryCache({}), 
    link,
  });

  const [loading, setLoading] = useState(true);

  /*
  renew refresh token when page refreshes, so user can stay logged in
  before app is rendered, request to server... 
        sending refresh token to get new access token
  (persisting user between refreshes)
  */
  useEffect(() => {
    fetch('http://localhost:4000/refresh_token', { 
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
