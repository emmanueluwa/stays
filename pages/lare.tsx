import { useLareQuery } from "../src/generated/graphql"

export default function Lare() {
  const {data, loading, error} = useLareQuery()

  if (loading) {
   return <div>loading..</div>
  } 

  if (error) {
    console.log(error);
    return <div>error</div>
  }

    return (
      <div>
        
        {
          (!data) ? (
            <div>no data!</div>
          ) : 
          <div>{data.lare}/</div>
        }
      </div>
    );
}