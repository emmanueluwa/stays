import { Box, Heading, Stack, Text, Link as CLink, Flex, Button, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/navbar";
import StarSection from "../components/starSection";
import { usePostsQuery } from "../src/generated/graphql";

export default function Rent() {

  const [variables, setVariables] = useState({ limit: 10, cursor: null });
  const {data,loading}  = usePostsQuery({
    variables: {
      limit, cursor
    }
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
          <Flex key={p.id} p={5} shadow="md" borderWidth="1px">
            <StarSection post={p}/>
            <Box>
              <Link href={`/rent/${p.id}`}>
                <Heading fontSize="xl">{p.title}</Heading>
              </Link>
              <Text>posted by {p.creator.email}</Text>
              {/* <Text mt={4}>{p.textSnippet}</Text> */}
            </Box>
          </Flex>
            ))}
        </Stack>
        )}
        {data && data.posts.hasMore ? (
          <Flex>
            <Button onClick={() => {
              setVariables({
                limit: variables.limit,
                cursor: data.posts.posts[data.posts.posts.length - 1].createdAt,
              })
            }} m="auto" my={8}>load more</Button>
          </Flex>
        ) : null}
      </Navbar>
    )
}