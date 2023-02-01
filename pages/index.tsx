import Head from "next/head";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import NewListings from "../components/newListings";
import Footer from "../components/footer";
import {ApolloClient, ApolloProvider, InMemoryCache, useQuery, gql} from "@apollo/client"
import { useObotaQuery, User, useUsersQuery } from "../src/generated/graphql";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  const {data, } = useUsersQuery({fetchPolicy: 'network-only'});

  // const userData = {
  //   user: data.users
  // }

  return (
 
    <Navbar>
      <div className="">
        
        {/* Hero */}
        <Hero />

        {/* New Listings */}
        <NewListings />

        {/* take action */}
        {/* blogs */}
        <div>Greetings</div>
        {
          (!data) ? (
            <div>loading...</div>
          ) : 
           <ul>
          {data.users.map((x, id) => (
            <li key={id}>
              {x.id}, {x.email}
            </li>
          ))}
        </ul>
        }
       
            


        {/* footer */}
        <Footer />
      </div>
    </Navbar>

  );
}