import { Box, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import EditDeletePostButtons from "../../components/editDeletePostButtons";
import Navbar from "../../components/navbar";
import { usePostQuery } from "../../src/generated/graphql";
import { useGetPostFromUrl } from "../../src/utils/useGetPostFromUrl";

export default function RentDetail({ }) {

  const {loading, data} = useGetPostFromUrl()
   

    if (loading){
    return (
      <Navbar>
        <div>loading...</div>
      </Navbar>
    );
  }

  if (!data?.post) {
    return (
      <Navbar>
        <Box>could not find post</Box>
      </Navbar>
    )
  } 

  return (
      <Navbar>
        <Heading mb={4}>{data.post.title}</Heading>
        <Box mb={4}>{data.post.text}</Box>
        <EditDeletePostButtons id={data.post.id} creatorId={data.post.creator.id}/>
      </Navbar>

    )
}