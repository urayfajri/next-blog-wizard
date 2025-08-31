import { BlogPost, DraftPost } from "./types";
import { storage } from "./storage";
import { uid } from "./utils";

const KEY = "blog_posts";
export function listPosts(): BlogPost[] {
  const items = storage.get(KEY, []) as BlogPost[];
  return items.sort((a, b) => b.createdAt - a.createdAt);
}
export function findPost(id: string) {
  return listPosts().find((p) => p.id === id) ?? null;
}
export function addPost(draft: DraftPost) {
  const post: BlogPost = { ...draft, id: uid(), createdAt: Date.now() };
  const items = storage.get(KEY, []) as BlogPost[];
  items.push(post);
  storage.set(KEY, items);
  return post;
}
