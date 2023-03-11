import { Box, Heading, Stack, Text, Link as CLink, Flex, Button, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import EditDeletePostButtons from "../components/editDeletePostButtons";
import Navbar from "../components/navbar";
import Image from "next/image";
import StarSection from "../components/starSection";
import { useMeQuery, usePostsQuery } from "../src/generated/graphql";

export default function Rent() {

  const {data, loading, error, fetchMore, variables}  = usePostsQuery({
    variables: { 
      limit: 10, 
      cursor: null 
    },
    //trigger when loading
    notifyOnNetworkStatusChange: true,
  });
  
  


  if (!loading && !data) {
    return <div>please come back later, the site is under maintenance</div>
  }
    return (
      <Navbar>
        {loading && !data ? (
          <div>loading..</div>
        ) : (
        <Stack spacing={8}>
         {data!.posts.posts.map((p) => (
          !p ? null : (
          //   <Flex key={p.id} p={5} shadow="md" borderWidth="1px">
          //   {/* <StarSection post={p}/> */}
          //   <Box flex={1}>
          //     <Link href={`/rent/${p.id}`}>
          //       <Heading fontSize="xl">{p.title}</Heading>
          //     </Link>
          //     {/* <Text>posted by {p.creator.email}</Text> */}
          //     <Flex align="center">
          //       <Text flex={1} mt={4}>{p.textSnippet}</Text>
          //       <Box ml="auto">
          //         {/* <EditDeletePostButtons id={p.id} creatorId={p.creator.id}/> */}
          //       </Box>
          //     </Flex>
          //   </Box>
          // </Flex>
          <div className="flex justify-center pt-10">
            <div
              className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row">
              {/* <img
                className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                alt="" /> */}
                {/* <Image
                  priority
                  src={}
                  width={1000}
                  height={1000}
                  alt={}
                  className="w-full h-20 rounded-t "
                /> */}
              <div className="flex flex-col justify-start p-6">
                <div className="flex space-x-8">
                  <div className="">
                    <h5
                      className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                      {p.title}
                    </h5>
                    <h5
                      className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                      {p.type} | {p.location}
                    </h5>
                  </div>
                  <div className="justify-end">
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {p.price}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-300">
                      {p.included}
                    </p>
                  </div>
                </div>
                <div>
                  <p>{p.textSnippet}</p>
                  <h5
                      className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                      {p.availability}
                  </h5>
                </div>
                
                
              </div>
            </div>
          </div>
          )
            ))}
        </Stack>
        )}
        {data && data.posts.hasMore ? (
          <Flex>
            <Button onClick={() => {
              fetchMore({
                variables: {
                limit: variables?.limit,
                cursor: data.posts.posts[data.posts.posts.length - 1].createdAt,
              }, 
              //pagination
              // updateQuery: (
              //   previousValue,
              //   {fetchMoreResult}
              //   ): PostsQuery => {
              //   if (!fetchMoreResult) {
              //     return previousValue as PostsQuery
              //   }

              //   return {
              //     __typename: "Query",
              //     posts: {
              //       __typename: "PaginatedPosts",
              //       hasMore: (fetchMoreResult as PostsQuery).posts.hasMore,
              //       posts: [
              //         ...(previousValue as PostsQuery).posts.posts,
              //         ...(fetchMoreResult as PostsQuery).posts.posts,
              //       ]
              //     }
              //   }
              // }
              }); 
            }}
             m="auto" my={8}
            >load more
            </Button>
          </Flex>
        ) : null}
      </Navbar>
    )
}