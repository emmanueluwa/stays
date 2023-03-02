import { Flex, Button, Box } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import Link from "next/link";
import router from "next/router";
import { InputField } from "../components/InputField";
import Navbar from "../components/navbar";
import { Wrapper } from "../components/Wrappers";
import { toErrorMap } from "../src/utils/toErrorMap";
import login from "./login";

interface CreatePostProps {

}

export default function CreatePost<CreatePostProps>() {
    return (
      <Navbar>
        <Wrapper>
          <Formik initialValues={{ title: "", text: "" }} 
            onSubmit={async (values, {setErrors}) => {
              console.log(values)
            }}>
            {/* formik form component */}
            {({ isSubmitting }) => (
              <Form>
                <InputField name="title" placeholder="title" label="Title"/>
                <Box mt={4}>
                  <InputField name="text" placeholder="text..." label="Body" />
                </Box>
              <Button mt={4} type="submit" isLoading={isSubmitting}>create post</Button>
              </Form>
            )}
          </Formik>
        </Wrapper>
      </Navbar>
    )
}