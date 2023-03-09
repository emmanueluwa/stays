import { Box, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import { InputField } from "../components/InputField";
import Navbar from "../components/navbar";
import { Wrapper } from "../components/Wrappers";
import { MeDocument, MeQuery, useRegisterMutation, UsernamePasswordInput } from "../src/generated/graphql";
import { toErrorMap } from "../src/utils/toErrorMap";

interface Props {

}

export default function Register() {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register] = useRegisterMutation();


    return(
      <Navbar>
        <Wrapper variant="small">
          <Formik initialValues={{ email: "", password: "" }} 
            onSubmit={async (values, {setErrors}) => {
              const response = await register({variables: {options: values},
                update:(cache, {data}) => {
                  cache.writeQuery<MeQuery>({
                    query: MeDocument,
                    data: {
                      __typename: "Query",
                      me: data?.register.user,
                    }
                  })
                }
              })
              if (response.data?.register.errors) {
                // destructure graphql error [{field: 'username', message: 'something'}]
                setErrors(toErrorMap(response.data.register.errors))
              } else if (response.data?.register.user) {
                router.push("/");
              }
            }}>
            {/* formik form component */}
            {({ isSubmitting }) => (
              <Form>
                <InputField name="email" placeholder="email" label="Email"/>
                <Box mt={4}>
                <InputField name="password" placeholder="password" label="password" type="password"/>
                </Box>
              <Button mt={4} type="submit" isLoading={isSubmitting}>register</Button>
              </Form>
            )}
          </Formik>
        </Wrapper>

        {/* <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Register</h2>
            </div>
         
            <form 
              className="mt-8 space-y-6"
              onSubmit={async (values) => {
                  values.preventDefault()
                  console.log('form submitted');
                  const response = await register({
                    variables: {
                              options: values
                            }
                          },
                  );

                  console.log(response);
                  router.push("/");
                }}>
              <div className="space-y-8  rounded-md shadow-sm">
                  <div>
                    <label htmlFor="email-address" className="sr-only">Email</label>
                    <input
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#d8a90f] focus:outline-none focus:ring-[#d8a90f] sm:text-sm"
                      value={email}
                      placeholder="email"
                      onChange={e => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>

                  <div className="-space-y-px rounded-md shadow-sm">
                      <label htmlFor="password" className="sr-only">Password</label>
                      <input
                        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#d8a90f] focus:outline-none focus:ring-[#d8a90f] sm:text-sm"
                        type="password"
                        value={password}
                        placeholder="password"
                        onChange={e => {
                          setPassword(e.target.value);
                        }}
                      />
                  </div>
                  <button 
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#d8a90f] py-2 px-4 text-sm font-medium text-black hover:bg-[#d8a90f] focus:outline-none focus:ring-2 focus:ring-[#d8a90f] focus:ring-offset-2"
                    type="submit"
                  >
                    register
                  </button>
              </div>
            </form>
         </div>
        </div> */}
      </Navbar>
    ) 
}