import { useLareQuery } from "../src/generated/graphql"
import  Navbar  from "../components/navbar";
import Image from "next/image";
import Link from "next/link";


export default function Lare() {
  const {data, loading, error} = useLareQuery()

  if (loading) {
   return <div>loading..</div>
  } 

  const errorCollect = <div>
    <Link href="/login">
      <div className="text-decoration-line: underline">
        Please click here to login before creating an Advert.
      </div>
    </Link>
  </div>

  if (error) {
    console.log(error);
    return <div>{errorCollect}</div>
  }

    return (
      <Navbar>
        <div>
        
        {
          (!data) ? (
            <div>no data!</div>
          ) : 
          <div>{data.lare}</div>
        }

          <div>
            <Image
              priority
              src="/images/advert_landing.svg"
              width={1000}
              height={1000}
              alt=""
              className="m-15 mt-15 w-auto h-[26rem] sm:h-[26rem]"
            />
          </div>
        
        </div>
      </Navbar>
      
    );
}