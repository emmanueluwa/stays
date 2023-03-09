import { Box, Heading, Stack, Text, Link as CLink, Flex, Button, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import EditDeletePostButtons from "../components/editDeletePostButtons";
import Navbar from "../components/navbar";
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
        <Flex>
          <Heading>Renting</Heading>
          <Link href="/advertise">
            <p >create ad</p>
          </Link>
        </Flex>
        {loading && !data ? (
          <div>loading..</div>
        ) : (
        <Stack>
         {data!.posts.posts.map((p) => (
          !p ? null : (
            <Flex key={p.id} p={5} shadow="md" borderWidth="1px">
            <StarSection post={p}/>
            <Box flex={1}>
              <Link href={`/rent/${p.id}`}>
                <Heading fontSize="xl">{p.title}</Heading>
              </Link>
              <Text>posted by {p.creator.email}</Text>
              <Flex align="center">
                <Text flex={1} mt={4}>{p.textSnippet}</Text>
                <Box ml="auto">
                  <EditDeletePostButtons id={p.id} creatorId={p.creator.id}/>
                </Box>
              </Flex>
            </Box>
          </Flex>
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