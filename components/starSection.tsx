import { ApolloCache } from "@apollo/client";
import { Flex, IconButton } from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons"
import { useState } from "react";
import { gql } from "urql";
import { PostSnippetFragment, useVoteMutation, VoteMutation } from "../src/generated/graphql";

interface StarSectionProps {
  post: PostSnippetFragment;
}

const  updateAfterVote = (value: number, postId: number, cache: ApolloCache<VoteMutation>) => {
  const data = cache.readFragment<{
    id: number
    points: number
    voteStatus: number | null;
  }>({
    id: 'Post:' + postId,
    fragment: gql`
      fragment _ on Post {
        id
        points
        voteStatus
      }
    `,
  });

  if (data) {
    if (data.voteStatus === value) {
      return;
    }
    const newPoints = 
      (data.points as number) + (!data.voteStatus ? 1 : 2) * value;
    cache.writeFragment({
      id: 'Post:' + postId,
      fragment: gql`
        fragment __ on Post {
          points
          voteStatus
        }
    `,
    data: { points: newPoints, voteStatus: value },
    });
  }
};

export default function StarSection({ post }: StarSectionProps) {
  const [loadingState, setLoadingState] = useState<'upstar-loading' | 'downstar-loading' | 'not-loading'>('not-loading');
  const [vote] = useVoteMutation()
    return (
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        mr={4}
      >
      
      <ChevronUpIcon 
        onClick={async () => {
          if (post.voteStatus === 1) {
            return;
          }
          setLoadingState('upstar-loading');
          await vote({
            variables: {
            postId: post.id,
            value: 1,
          },
          update: (cache) => updateAfterVote(1, post.id, cache),
        })
          setLoadingState('not-loading')
        }}
        // variant={post.voteStatus === 1 ? "green" : 'undefined'}
        // isLoading={loadingState==='upstar-loading'}
        icon-button=""
        aria-label="star post"
      />
      {post.points}
      <ChevronDownIcon
        onClick={async () => {
          if (post.voteStatus === -1) {
            return;
          }
          setLoadingState('downstar-loading')
          await vote({
            variables: {
            postId: post.id,
            value: -1,
          },
          update: (cache) => updateAfterVote(-1, post.id, cache),
        })
          setLoadingState('not-loading')
        }}
        // variant={post.voteStatus === -1 ? "red" : 'undefined'}
        // isLoading= {loadingState==='downstar-loading'}
        icon-button="chevron-down" 
        aria-label="dislikepost"
      />
      </Flex>
    );
}