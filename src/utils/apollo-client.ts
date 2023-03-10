import { ApolloClient, InMemoryCache } from "@apollo/client";
import { PaginatedPosts } from "../generated/graphql";

const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_URL,
    credentials: "include",
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

export default client;