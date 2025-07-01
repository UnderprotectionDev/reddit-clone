"use server";

import { addComment } from "@/sanity/lib/comment/add-comment";
import { getUser } from "@/sanity/lib/user/get-user";

export async function createComment(
  postId: string,
  content: string,
  parentCommentId?: string
) {
  const user = await getUser();

  if ("error" in user) {
    return { error: user.error };
  }

  try {
    const comment = await addComment({
      postId,
      userId: user._id,
      content,
      parentCommentId,
    });

    return { comment };
  } catch (error) {
    console.error("Error adding comment:", error);
    return { error: "Failed to add comment" };
  }
}
