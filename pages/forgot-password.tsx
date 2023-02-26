import Link from "next/link";
import router from "next/router";
import Navbar from "../components/navbar";
import { setAccessToken } from "../lib/accessToken";
import { MeQuery, MeDocument } from "../src/generated/graphql";
import login from "./login";

export default function ForgotPassword() {

  const [complete, setComplete] = useState(false);
  const [, forgotPassword] = useForgotPasswordMutation();

    return (
      <Navbar>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div className="">
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Login</h2>
            </div>
            <form className="mt-8 space-y-6"
                onSubmit={async e => {
                  e.preventDefault()
                  
                  await forgotPassword(e)
                  setComplete(true)

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

              
                <button 
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#d8a90f] py-2 px-4 text-sm font-medium text-black hover:bg-[#d8a90f] focus:outline-none focus:ring-2 focus:ring-[#d8a90f] focus:ring-offset-2"
                  type="submit"
                >
                  forgot password
                </button>
              </div>
            </form>
          </div>
        </div>

      </Navbar>
    )
}