import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getSubredditBySlug = async (slug: string) => {
  const lowerCaseSlug = slug.toLowerCase();
  const getSubredditBySlugQuery =
    defineQuery(`*[_type == "subreddit" && slug.current == $slug][0] {
      ...,
      "slug": slug.current,
      "moderator": moderator->,
    }`);

  const subreddit = await sanityFetch({
    query: getSubredditBySlugQuery,
    params: { slug: lowerCaseSlug },
  });

  return subreddit.data;
};
