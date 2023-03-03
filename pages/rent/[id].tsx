import { Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Navbar from "../../components/navbar";
import { usePostQuery } from "../../src/generated/graphql";

export default function RentDetail({ }) {

  const router = useRouter();
  const Id = typeof router.query.id === "string" ? parseInt(router.query.id) : -1;
 
  const {loading, data} = usePostQuery({
    pause: intId === -1,
    variables: {
      id: intId
    }
  });

    if (loading){
    return (
      <Navbar>
        <div>loading...</div>
      </Navbar>
    );
  }

  if (!data?.post) {
    return (
      <Layout>
        <Box>could not find post</Box>
      </Layout>
    )
  } 

  return (
      <Navbar>
        <Heading>{data?.post?.title}</Heading>
        {data?.post?.text}
      </Navbar>

    )
}