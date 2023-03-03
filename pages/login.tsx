import { Box, Button, Flex } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { InputField } from "../components/InputField";
import Navbar from "../components/navbar";
import { Wrapper } from "../components/Wrappers";
import { setAccessToken } from "../lib/accessToken";
import { MeDocument, MeQuery, useLoginMutation } from "../src/generated/graphql";
import { toErrorMap } from "../src/utils/toErrorMap";


interface Props {
  
}

export default function Login() {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useLoginMutation();


    return(
      <Navbar>
         <Wrapper variant="small">
          <Formik initialValues={{ email: "", password: "" }} 
            onSubmit={async (values, {setErrors}) => {
              console.log(values)
              const response = await login({variables: values})
              if (response.data?.login.errors) {
                // destructure graphql error [{field: 'username', message: 'something'}]
                setErrors(toErrorMap(response.data.login.errors))
              } else if (response.data?.login.user) {
                // return to page user was previously on
                if (typeof router.query.next === "string") {
                  router.push(router.query.next)
                } else {
                  router.push("/");
                }
              }
            }}>
            {/* formik form component */}
            {({ isSubmitting }) => (
              <Form>
                <InputField name="email" placeholder="email" label="Email"/>
                <Box mt={4}>
                  <InputField name="password" placeholder="password" label="password" type="password"/>
                </Box>
                <Flex>
                  <Box>
                    <Link href="/forgot-password"><p>Forgot password?</p></Link>
                  </Box>
                </Flex>
              <Button mt={4} type="submit" isLoading={isSubmitting}>login</Button>
              </Form>
            )}
          </Formik>
        </Wrapper>
        {/* <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div className="">
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Login</h2>
            </div>
            <form className="mt-8 space-y-6"
                onSubmit={async e => {
                  e.preventDefault()
                  console.log('form submitted');
                  const response = await login({
                    variables: {
                      email,
                      password
                    },
                    //updating apollo cache
                    update: (store, {data}) => {
                      if (!data) {
                        return null;
                      }

                      //details when logging in user must match details when fetching 'me' #apollocache
                      store.writeQuery<MeQuery>({
                        query: MeDocument,
                        data: {
                          __typename: "Query",
                          me: data.login.user
                        }
                      })
                      
                    }
                  });

                console.log(response);

                if (response && response.data) {
                  setAccessToken(response.data.login.accessToken)
                }

                router.push("/");
              }}>
              <div className="space-y-8 rounded-md shadow-sm">
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

              <div>
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
                  login
                </button>
                <div>
                  <Link href="/forgot-password">
                    <p className="mb-4 text-gray-600">
                      forgot password
                    </p>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div> */}

      </Navbar>
    ) 
}