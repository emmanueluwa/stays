import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: LoginResponse;
  register: Scalars['Boolean'];
  revokeRefreshTokensForUser: Scalars['Boolean'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRevokeRefreshTokensForUserArgs = {
  userId: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  lare: Scalars['String'];
  obota: Scalars['String'];
  users: Array<User>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['Int'];
};

export type ObotaQueryVariables = Exact<{ [key: string]: never; }>;


export type ObotaQuery = { __typename?: 'Query', obota: string };


export const ObotaDocument = gql`
    query Obota {
  obota
}
    `;

/**
 * __useObotaQuery__
 *
 * To run a query within a React component, call `useObotaQuery` and pass it any options that fit your needs.
 * When your component renders, `useObotaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useObotaQuery({
 *   variables: {
 *   },
 * });
 */
export function useObotaQuery(baseOptions?: Apollo.QueryHookOptions<ObotaQuery, ObotaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ObotaQuery, ObotaQueryVariables>(ObotaDocument, options);
      }
export function useObotaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ObotaQuery, ObotaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ObotaQuery, ObotaQueryVariables>(ObotaDocument, options);
        }
export type ObotaQueryHookResult = ReturnType<typeof useObotaQuery>;
export type ObotaLazyQueryHookResult = ReturnType<typeof useObotaLazyQuery>;
export type ObotaQueryResult = Apollo.QueryResult<ObotaQuery, ObotaQueryVariables>;