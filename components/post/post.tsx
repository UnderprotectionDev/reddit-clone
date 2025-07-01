import { GetAllPostsQueryResult } from "@/sanity.types";

interface PostProps {
  post: GetAllPostsQueryResult[number];
  userId: string | null;
}

export const Post = async ({ post, userId }: PostProps) => {
  return <div>Post</div>;
};
