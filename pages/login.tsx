import { useRouter } from "next/router";
import { useState } from "react";
import Navbar from "../components/navbar";
import { useLoginMutation } from "../src/generated/graphql";


interface Props {
  
}

export default function Login() {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useLoginMutation();


    return(
      <Navbar>
        <div>register</div>
        <form onSubmit={async e => {
          e.preventDefault()
          console.log('form submitted');
          const response = await login({
            variables: {
              email,
              password
            }
          });

          console.log(response);
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