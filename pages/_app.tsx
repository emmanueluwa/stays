import '../styles/globals.css'
import { AppProps } from 'next/app'
import {ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache, Observable} from "@apollo/client"
import { onError } from "@apollo/client/link/error";
import { getAccessToken, setAccessToken } from '../lib/accessToken';
import { useEffect, useState } from 'react';
import { TokenRefreshLink } from 'apollo-link-token-refresh'
import jwtDecode, { JwtPayload } from 'jwt-decode';
import client from '../src/utils/apollo-client';
import { ChakraProvider } from '@chakra-ui/react';


export default function App({ Component, pageProps }: AppProps) {

  // const [loading, setLoading] = useState(true);

  

  // if (loading) {
  //   return <div>loading...</div>
  // }



  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}
