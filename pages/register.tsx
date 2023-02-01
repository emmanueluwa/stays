import { useRouter } from "next/router";
import { useState } from "react";
import Navbar from "../components/navbar";
import { useRegisterMutation } from "../src/generated/graphql";

interface Props {

}

export default function Register() {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register] = useRegisterMutation();


    return(
      <Navbar>
        <div>register</div>
        <form onSubmit={async e => {
          e.preventDefault()
          console.log('form submitted');
          const response = await register({
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
          <button type="submit">register</button>
        </form>
      </Navbar>
    ) 
}