import { useRouter } from "next/router";
import { useState } from "react";
import Navbar from "../components/navbar";
import { setAccessToken } from "../libs/accessToken";
import { MeDocument, MeQuery, useLoginMutation } from "../src/generated/graphql";


interface Props {
  
}

export default function Login() {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useLoginMutation();


    return(
      <Navbar>
        <div>login</div>
        <form onSubmit={async e => {
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
          <div>
            <input
              value={email}
              placeholder="email"
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              placeholder="password"
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button type="submit">login</button>
        </form>
      </Navbar>
    ) 
}