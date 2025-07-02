"use server";

import { getUser } from "@/sanity/lib/user/get-user";
import { upvoteComment } from "@/sanity/lib/votes/upvote-comment";
import { upvotePost } from "@/sanity/lib/votes/upvote-post";

export const upvote = async (
  contentId: string,
  contentType: "post" | "comment" = "post"
) => {
  const user = await getUser();

  if ("error" in user) {
    return { error: user.error };
  }

  if (contentType === "comment") {
    const vote = await upvoteComment(contentId, user._id);
    return { vote };
  } else {
    const vote = await upvotePost(contentId, user._id);
    return { vote };
  }
};
