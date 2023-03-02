import Navbar from "../components/navbar";
import { usePostsQuery } from "../src/generated/graphql";

export default function Rent() {

  const {data}  = usePostsQuery();
    return (
      <Navbar>
        <div>renting</div>
        {!data ? null : data.posts.map((p) => <div key={p.id}>{p.title}</div>)}
      </Navbar>
    )
}