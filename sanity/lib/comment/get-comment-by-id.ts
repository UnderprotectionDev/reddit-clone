import { sanityFetch } from "../live";
import { defineQuery } from "groq";

export const getCommentById = async (commentId: string) => {
  const getCommentByIdQuery =
    defineQuery(`*[_type == "comment" && _id == $commentId][0] {
    _id,
    content,
    createdAt,
    "author": author->,
    isDeleted
  }`);

  const comment = await sanityFetch({
    query: getCommentByIdQuery,
    params: { commentId },
  });
  return comment.data;
};
