import { Flex, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { PostSnippetFragment, useVoteMutation } from "../src/generated/graphql";

interface StarSectionProps {
  post: PostSnippetFragment;
}

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
      <IconButton 
        onClick={async () => {
          if (post.voteStatus === 1) {
            return;
          }
          setLoadingState('upstar-loading')
          await vote({
            variables: {
            postId: post.id,
            value: 1,
          }})
          setLoadingState('not-loading')
        }}
        variant={post.voteStatus === 1 ? "green" : 'undefined'}
        isLoading= {loadingState==='upstar-loading'}
        icon-button="chevron-up"
        aria-label="star post"
      />
      {post.points}
      <IconButton
        onClick={async () => {
          if (post.voteStatus === -1) {
            return;
          }
          setLoadingState('downstar-loading')
          await vote({
            variables: {
            postId: post.id,
            value: -1,
          }})
          setLoadingState('not-loading')
        }}
        variant={post.voteStatus === -1 ? "red" : 'undefined'}
        isLoading= {loadingState==='downstar-loading'}
        icon-button="chevron-down" 
        aria-label="dislikepost"
      />
      </Flex>
    );
}