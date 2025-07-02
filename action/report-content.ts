"use server";

import { adminClient } from "@/sanity/lib/admin-client";
import { getUser } from "@/sanity/lib/user/get-user";

export async function reportContent(contentId: string) {
  const user = await getUser();
  if ("error" in user) return { error: user.error };

  const result = await adminClient
    .patch(contentId)
    .set({ isReported: true })
    .commit();

  return { result };
}
