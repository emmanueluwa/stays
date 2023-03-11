import { Box, IconButton } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
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
        <EditIcon mr={4} aria-label="Edit Post"></EditIcon>
      </Link>
      <DeleteIcon
        aria-label="Delete Post"
        onClick={() => {
          deletePost({ variables: { id }, update: (cache) => {
            cache.evict({ id: "Post:" + id });
          },
         });
        }}
      />
    </Box>
  )
};