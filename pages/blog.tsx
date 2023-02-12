import Navbar from "../components/navbar";
import BlogCard from "../components/blogCard";
import { getSortedPostsData } from "../lib/posts";


//importing blog posts from file(using static generation)
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Blog({ allPostsData }) {
  console.log(allPostsData)

    return (
        <Navbar>
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight ">Blogs</h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {
                  allPostsData.map(({ id, date, title, cover_image }) => (
                      <div key={id} className="group relative">
                          <BlogCard 
                            post={cover_image}
                            link_id={id}
                            created={date}
                            title={title}
                          />
                      </div>
                  ))
                }
            </div>
          </div>


        </Navbar>
      )
}