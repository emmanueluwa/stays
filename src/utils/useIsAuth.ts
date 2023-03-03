import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMeQuery } from "../generated/graphql";

export const useIsAuth = () => {
  
  const {data, loading} = useMeQuery();

  const router = useRouter();
  useEffect(() => {
    if (!loading && !data?.me) {
      //return to page after logging in
      router.push("/login?next=" + router.pathname);
    }
  }, [loading, data, router])
}