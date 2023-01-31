import Head from "next/head";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import NewListings from "../components/newListings";
import Footer from "../components/footer";
import {ApolloClient, ApolloProvider, InMemoryCache, useQuery, gql} from "@apollo/client"
import { useObotaQuery } from "../src/generated/graphql";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {

  return (
 
    <Navbar >
      <div className="">
        
        {/* Hero */}
        <Hero />

        {/* New Listings */}
        <NewListings />

        {/* take action */}
        {/* blogs */}
        <div>Greetings</div>

        {/* footer */}
        <Footer />
      </div>
    </Navbar>

  );
}
