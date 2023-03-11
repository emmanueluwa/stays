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
import { withApollo } from "../src/utils/withApollo";
import login from "./login";

interface CreatePostProps {

}

const CreatePost = () => {

  //making sure logged in to access page
  /*
  TODO: only allow admin access to page
  */
  // useIsAuth();

  const router = useRouter();
  const [createPost] = useCreatePostMutation();
  
    return (
      <Navbar>
        <Wrapper variant="small">
          <Formik initialValues={{
             title: "",
             text: "",
             type: "",
             location: "",
             price: "",
             included: "",
             availability: "",
            }} 
            onSubmit={async (values) => {
              const { errors } = await createPost({variables: {input: values},
                update: (cache) => {
                  cache.evict({ fieldName: "posts:{}" });
                }
              });
              if (!errors) {
                router.push("/rent")
              }
            }}>
            {/* formik form component */}
            {({ isSubmitting }) => (
              <Form>
                <InputField  name="title" placeholder="title" label="Title"/>
                <Box mt={4}>
                  <InputField textarea name="text" placeholder="text..." label="Body" />
                </Box>
                <Box mt={4}>
                  <InputField name="type" placeholder="Flat/house..." label="Property Type" />
                </Box>
                <Box mt={4}>
                  <InputField name="location" placeholder="location..." label="Location" />
                </Box>
                <Box mt={4}>
                  <InputField name="price" placeholder="price..." label="Price" />
                </Box>
                <Box mt={4}>
                  <InputField name="included" placeholder="included..." label="Bills Included?" />
                </Box>
                <Box mt={4}>
                  <InputField name="availability" placeholder="availability..." label="Availability" />
                </Box>
              <Button my={4} type="submit" background="#d8a90f" isLoading={isSubmitting}>create post</Button>
              </Form>
            )}
          </Formik>
        </Wrapper>
      </Navbar>
    )
}

export default withApollo({ ssr: false })(CreatePost);