"use client";
import React from "react";
import Link from "next/link";
import { listPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import { BlogPost } from "@/lib/types";

export default function Page() {
  const [posts, setPosts] = React.useState<BlogPost[]>([]);

  React.useEffect(() => {
    setPosts(listPosts());

    const onFocus = () => setPosts(listPosts());
    window.addEventListener("focus", onFocus);
    return () => window.removeEventListener("focus", onFocus);
  }, []);

  return (
    <div className="stack">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-slate-800">Blog Posts</h1>
        <Link
          href="/create"
          className="px-4 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          + New Post
        </Link>
      </div>

      {/* If no posts */}
      {posts.length === 0 ? (
        <div className="p-6 text-center text-slate-500 border border-dashed border-slate-300 rounded-xl">
          No posts yet.{" "}
          <Link href="/create" className="text-blue-600 hover:underline">
            Create your first post
          </Link>
          .
        </div>
      ) : (
        /* Posts grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <div key={p.id} className="min-w-0">
              <PostCard post={p} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
