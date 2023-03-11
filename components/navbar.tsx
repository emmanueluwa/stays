import { CgMenuGridO } from "react-icons/cg";
import { HiOutlineUser } from "react-icons/hi";
import Image from "next/image";
import NavBtn from "./navBtn";
import Link from 'next/link'
import Head from "next/head";
import { useLogoutMutation, useMeQuery } from "../src/generated/graphql";
import { isServer } from "../src/utils/isServer";
import { useRouter } from "next/router"

interface NavBarProps {}

export default function Navbar({children}) {

  const router = useRouter();

  const {data, loading} = useMeQuery({
    //do not query on server
    skip: isServer(),
  });
  //reset store when using apollo and logging user out
  const [logout, {loading: logoutLoading}] = useLogoutMutation();
  // let body = null;

  //fetching data
  // if (loading) {
  //   body = null
  //   //user not logged in
  // } else if (!data?.me) {
  //   body = (
  //     <>
  //       <div className="hidden lg:flex items-center pl-8">
  //         <Link href="/login">
  //           <button>Log in</button>
  //         </Link>
  //         <div className="bg-[#d8a90f] p-2 rounded-[0.5rem] px-4 ml-4 flex items-center">
  //           <Link href="/register">
  //             <button>Sign up</button>
  //           </Link>
  //         </div>
  //       </div>
  //     </>
  //   )
  //   //user logged in
  // } else {
  //   body = (
  //     <>
  //     <div className="hidden lg:flex items-center pl-8">
  //       <Link href="/">
  //         <button 
  //           onClick={async () => {
  //             await logout();
  //           }}
  //         >
  //           Logout
  //         </button>
  //       </Link>
  //       <div className="bg-[#d8a90f] p-2 rounded-[0.5rem] px-4 ml-4 flex items-center">
  //         <div>{data.me.email}</div>
  //       </div>
  //     </div>
  //     </>
  //   )

  // }

  // console.log(data.me.email)

  const buttons = [
    { title: "Rent", underline: "-bottom-[1.2] bg-[#d8a90f]" },
    { title: "Short stays", underline: "-bottom-[1.2]" },
    { title: "Blog", underline: "-bottom-[1.2]" },
    { title: "About us", underline: "-bottom-[1.2]" },
    {
      title: "Advertise",
      border: "border p-1 rounded-[0.5rem] border-grey-900",
    },
  ];
  return (
    <div className="bg-white">
      <Head>
        <title>Stays</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          
      </Head>
      <div className="flex justify-between  px-4 items-center max-w-[95vw] sm:max-w-[85vw] lg:max-w-[85vw] mx-auto whitespace-nowrap">
        {/* left menu */}
        <div className="lg:hidden flex items-center">
          <CgMenuGridO className="w-10 h-10" />
        </div>
        {/* middle logo*/}
        <div className="shrink-0 pr-6">
          {/* Logo */}
          <Link href="/">
            <div className="">
              <Image
                priority
                src="/images/a_house.png"
                width={80}
                height={80}
                alt=""
                className="shrink-0"
              />
            </div>
          </Link>
        </div>

        {/* links */}
        <div className="hidden lg:flex">
          <ul className="flex space-x-10 items-center  py-4">
            {buttons.map((button, id) => (
              <NavBtn
                title={button.title}
                border={button.border}
                underline={button.underline}
                key={id}
              />
            ))}
          </ul>
        </div>

        {/* right authentication */}
        <div className="lg:hidden flex h-full items-center">
          <div className="w-10 h-10 bg-[white] rounded-full flex justify-center ">
            <HiOutlineUser className="text-[38px]" />
          </div>
        </div>

        
          {/* large page, logged in or logged out */}
          {/* {body} */}
          {(data && data.me) ? (
            <div className="hidden lg:flex items-center pl-8">
              <Link href="/">
                <button 
                  onClick={async () => {
                    await logout();
                    router.reload()
                  }}
                >
                  Logout
                </button>
              </Link>
              <div className="bg-[#d8a90f] p-2 rounded-[0.5rem] px-4 ml-4 flex items-center">
                <div>{data.me.email}</div>
              </div>
            </div>
          ):  
          
            <div className="hidden lg:flex items-center pl-8">
              <Link href="/login">
                <button>Log in</button>
              </Link>
              <div className="bg-[#d8a90f] p-2 rounded-[0.5rem] px-4 ml-4 flex items-center">
                <Link href="/register">
                  <button>Sign up</button>
                </Link>
              </div>
            </div>
          }

          
        

        
      </div>
      <main>{children}</main>
    </div>
  );
}
