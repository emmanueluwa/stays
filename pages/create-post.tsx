import { Flex, Button, Box } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import Link from "next/link";
import router, { useRouter } from "next/router";
import { useEffect } from "react";
import { InputField } from "../components/InputField";
import Navbar from "../components/navbar";
import { Wrapper } from "../components/Wrappers";
import { useCreatePostMutation, useMeQuery } from "../src/generated/graphql";
import { toErrorMap } from "../src/utils/toErrorMap";
import { useIsAuth } from "../src/utils/useIsAuth";
import login from "./login";

interface CreatePostProps {

}

export default function CreatePost<CreatePostProps>() {

  //making sure logged in to access page
  /*
  TODO: only allow admin access to page
  */
  // useIsAuth();

  const router = useRouter();
  const [createPost] = useCreatePostMutation();
  
    return (
      <Navbar>
        <Wrapper>
          <Formik initialValues={{ title: "", text: "" }} 
            onSubmit={async (values) => {
              await createPost({variables: {input: values}})
              router.push("/rent")
            }}>
            {/* formik form component */}
            {({ isSubmitting }) => (
              <Form>
                <InputField  name="title" placeholder="title" label="Title"/>
                <Box mt={4}>
                  <InputField textarea name="text" placeholder="text..." label="Body" />
                </Box>
              <Button mt={4} type="submit" isLoading={isSubmitting}>create post</Button>
              </Form>
            )}
          </Formik>
        </Wrapper>
      </Navbar>
    )
}