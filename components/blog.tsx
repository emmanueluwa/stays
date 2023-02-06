import Link from "next/link";
import Date from "../components/date";

export default function Blog({allPostData}) {
    return (
        <div>
            <h2>Blog</h2>
            <ul>
                {
                    allPostData.map(({ id, date, title }) => (
                        <li key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <br />
                            <small>
                                <Date dateString={date}/>
                            </small>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}