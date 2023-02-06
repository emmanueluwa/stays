import Navbar from "../../components/navbar"
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
// import Date from "../../components/date";


//using titles for url path
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  }
}

//blog data
export async function getStaticprops({ params }) {
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
        <article>
          <h1>{postData.title}</h1>
          <div>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}/>
        </article>

      </Navbar>
    )
}