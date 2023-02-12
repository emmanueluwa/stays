import Navbar from "../../components/navbar"
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";


//using titles for url path
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  }
}

//blog data
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)

  return {
    props: {
      postData,
    }
  }
}

export default function Post({ postData }) {
    return (
      <Navbar>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl mx-auto py-6">
          <h1 className="text-[2rem] mt-[1rem] font-bold">{postData.title}</h1>
          <div className="text-[#666]">
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}/>
        </article>
      </Navbar>
    )
}