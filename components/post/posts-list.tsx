import { getPosts } from "@/sanity/lib/post/get-posts";
import { currentUser } from "@clerk/nextjs/server";
import { Post } from "./post";

export const PostsList = async () => {
  const posts = await getPosts();
  const user = await currentUser();

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Post key={post._id} post={post} userId={user?.id || null} />
      ))}
    </div>
  );
};
