"use server";

import { getUser } from "@/sanity/lib/user/get-user";
import { downvotePost } from "@/sanity/lib/votes/downvote-post";
import { downvoteComment } from "@/sanity/lib/votes/downvote-comment";

export const downvote = async (
  contentId: string,
  contentType: "post" | "comment" = "post"
) => {
  const user = await getUser();

  if ("error" in user) {
    return { error: user.error };
  }

  if (contentType === "comment") {
    const vote = await downvoteComment(contentId, user._id);
    return { vote };
  } else {
    const vote = await downvotePost(contentId, user._id);
    return { vote };
  }
};
