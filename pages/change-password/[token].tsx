import { Box, Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { NextPage } from "next"
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { InputField } from "../../components/InputField";
import Navbar from "../../components/navbar";
import { Wrapper } from "../../components/Wrappers";
import { MeQuery, useChangePasswordMutation } from "../../src/generated/graphql";
import { toErrorMap } from "../../src/utils/toErrorMap";
import login from "../login";


const ChangePassword: NextPage = () => {

  const [changePassword] = useChangePasswordMutation()

    const router = useRouter();
    const [tokenError, setTokenError] = useState('');

    return (
       <Navbar>
         <Wrapper variant="small">
          <Formik initialValues={{ newPassword: "" }} 
            onSubmit={async (values, {setErrors}) => {
              console.log(values)
              const response = await changePassword({
                variables:  {
                newPassword: values.newPassword,
                token: 
                  typeof router.query.token === 'string' ? router.query.token : "",
              }
              })
              if (response.data?.changePassword.errors) {
                const errorMap = toErrorMap(response.data.changePassword.errors)
                if ('token' in errorMap) {
                  //no token with user link
                  setTokenError(errorMap.token);
                }
                setErrors(errorMap)
              } else if (response.data?.changePassword.user) {
                router.push("/");
              }
            }}>
            {/* formik form component */}
            {({ isSubmitting }) => (
              <Form>
                <InputField name="newPassword" placeholder="new password" label="New Password" type="password"/>
                {tokenError ? <Box color="red">{tokenError}</Box> : null}
                <Link href="forgot-password">
                  <p>link to reset password</p>
                </Link>
                <Button mt={4} type="submit" isLoading={isSubmitting}>change password</Button>
              </Form>
            )}
          </Formik>
        </Wrapper>
{/*         
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div className="">
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Login</h2>
            </div>
            <form className="mt-8 space-y-6"
                onSubmit={async e => {
                  e.preventDefault()
                  console.log('form submitted');
                  const response = await changePassword({
                    variables: {
                      newPassword,
                      token
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
                  <label htmlFor="email-address" className="sr-only">newPassword</label>
                  <input
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#d8a90f] focus:outline-none focus:ring-[#d8a90f] sm:text-sm"
                    type="password"
                    value={newPassword}
                    placeholder="newPassword"
                    onChange={e => {
                      setNewPassword(e.target.value);
                    }}
                  />
                </div>

                <button 
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#d8a90f] py-2 px-4 text-sm font-medium text-black hover:bg-[#d8a90f] focus:outline-none focus:ring-2 focus:ring-[#d8a90f] focus:ring-offset-2"
                  type="submit"
                >
                  change password
                </button>
              </div>
            </form>
          </div>
        </div> */}

      </Navbar>
    )
}

export default ChangePassword;