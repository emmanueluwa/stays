import Head from "next/head";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import NewListings from "../components/newListings";
import Blog from "../components/blog";
import Footer from "../components/footer";
import {ApolloClient, ApolloProvider, InMemoryCache, useQuery, gql} from "@apollo/client"
import { useMeQuery, useObotaQuery, User, useUsersQuery } from "../src/generated/graphql";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";



const inter = Inter({ subsets: ["latin"] });

//importing blog posts from file(using static generation)
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  

  return {
    props: {
      allPostsData,
    },
  };
}



export default function Home({ allPostsData }) {

  const {data, } = useUsersQuery({fetchPolicy: 'network-only'});

  return (
 
    <Navbar>
      <div className="">
        
        {/* Hero */}
        <Hero />

        {/* New Listings */}
        <NewListings />

        {/* take action */}
        {/* blogs */}
        <h2>Blog</h2>
        <ul>
          {
            allPostsData.map(({ id, date, title }) => (
                <li key={id}>
                    <Link href={`/posts/${id}`}>{title}</Link>
                    <br />
                    <small>
                        <Date dateString={date}/>
                    </small>
                </li>
            ))
          }
            </ul>
        {/* <div>Greetings</div>
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
