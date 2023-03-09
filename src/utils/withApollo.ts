import { ApolloClient, InMemoryCache } from "@apollo/client";
import { NextPageContext } from "next";
import { PaginatedPosts } from "../generated/graphql";
import { createWithApollo } from "./createWithApollo";

const createClient = (ctx: NextPageContext) => new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_URL,
    credentials: "include",
    headers: {
      cookie: 
        (typeof window === 'undefined' ? ctx.req?.headers.cookie : undefined) || "",
    },
    cache: new InMemoryCache({
        //pagination
        typePolicies: {
            Query: {
                fields: {
                    posts: {
                        merge(
                            existing: PaginatedPosts | undefined,
                            incoming: PaginatedPosts
                            ): PaginatedPosts {
                            return {
                                //keep incoming values and update posts
                                ...incoming,
                            posts: [...(existing?.posts || []), ...incoming.posts],
                            };
                        },
                    },
                },
            },
        },
    }),
});

export const withApollo = createWithApollo(createClient);