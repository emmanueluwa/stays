import { Box, Button } from "@chakra-ui/react"
import { Formik, Form } from "formik"
import { useRouter } from "next/router"
import { InputField } from "../../../components/InputField"
import Navbar from "../../../components/navbar"
import { Wrapper } from "../../../components/Wrappers"
import { usePostQuery, useUpdatePostMutation } from "../../../src/generated/graphql"
import { useGetIntId } from "../../../src/utils/useGetIntId"
import { useGetPostFromUrl } from "../../../src/utils/useGetPostFromUrl"
import createPost from "../../create-post"

export default function EditPost({ }) {
  const router = useRouter();
  const intId = useGetIntId();
  const {loading, data} = usePostQuery({
    skip: intId === -1,
    variables: {
      id: intId
    }
  })

  const [updatePost] = useUpdatePostMutation()

  if (loading) {
    return (
      <Navbar>
        <div>loading...</div>
      </Navbar>
    )
  }

  
  if (!data?.post) {
    return <div>could not find the post</div>
  }
  
    return (
       <Navbar>
        <Wrapper>
          <Formik initialValues={{ title: data.post?.title, text: data?.post.text }} 
            onSubmit={async (values) => {
              await updatePost({ variables: {id: intId, ...values} })
              router.back()
            }}>
            {/* formik form component */}
            {({ isSubmitting }) => (
              <Form>
                <InputField  name="title" placeholder="title" label="Title"/>
                <Box mt={4}>
                  <InputField textarea name="text" placeholder="text..." label="Body" />
                </Box>
              <Button mt={4} type="submit" isLoading={isSubmitting}>update post</Button>
              </Form>
            )}
          </Formik>
        </Wrapper>
      </Navbar>
    )
}