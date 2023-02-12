import Link from "next/link";
import Date from "./date";
import Image from "next/image";




export default function Blog({post, link_id, created, title}) {
    return (
        <div className="min-w-[12rem] rounded shadow-lg">
          <div className="relative">
            <Image
              priority
              width={1000}
              height={1000}
              alt="image of pet on table by Dan Barrett "
              src={post}
              className=" rounded-t"
            />

            {/* description */}
            <div className="mt-1 mx-4 pb-2">
                <div>
                    <Link href={`/posts/${link_id}`}>{title}</Link>
                    <br />
                    <small className="text-[14px]">
                        <Date dateString={created}/>
                    </small>
                </div>
            </div>
          </div>
        </div>
       
    )
}