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
        <div className="mx-8 pb-2">
          <div className="mt-8">
            <p className="text-[24px] font-medium">Blog</p>
          </div>
          <ul className="pt-4 flex flex-nowrap">
            {
              allPostsData.map(({ id, date, title, cover_image }) => (
                  <li key={id}>
                      <Blog 
                        post={cover_image}
                        link_id={id}
                        created={date}
                        title={title}
                      />
                  </li>
              ))
            }
          </ul>
        </div>

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
