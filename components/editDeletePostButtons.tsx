import { Box, IconButton } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { id } from "date-fns/locale";
import Link from "next/link";
import { useDeletPostMutation, useMeQuery } from "../src/generated/graphql";

interface editDeletePostButtonsProps {
  id: number;
  creatorId: number;
}

export default function EditDeletePostButtons({ id, creatorId }: editDeletePostButtonsProps) {

  const {data: meData} = useMeQuery();

  const [deletePost] = useDeletPostMutation();

  if (meData?.me.id !== creatorId) {
    return null;
  }

  return (
    
    <Box>
      <Link href={`/rent/edit/${id}`}>
        <IconButton mr={4} icon={<AiFillEdit />} aria-label="Edit Post"></IconButton>
      </Link>
      <IconButton
        aria-label="Delete Post"
        icon={<DeleteIcon />}
        onClick={() => {
          deletePost({ id });
        }}
      />
    </Box>
  )
};