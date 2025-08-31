"use client";
import React from "react";
import { useParams } from "next/navigation";
import { findPost } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import Loading from "@/components/Loading";
import NotFound from "@/components/NotFound";

export default function Page() {
  const params = useParams();
  const id = String(params?.id || "");

  const [post, setPost] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (id) {
      const p = findPost(id);
      setPost(p);
    }
    setLoading(false);
  }, [id]);

  if (loading) return <Loading />;
  if (!post) return <NotFound message="Post not found" />;

  return (
    <article className="stack space-y-4">
      {/* meta */}
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <span>{post.createdAt ? formatDate(post.createdAt) : ""}</span>
        <span>•</span>
        <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-xs font-medium">
          {post.category}
        </span>
      </div>

      {/* title */}
      <h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>
      <div className="text-sm text-slate-600 mb-4">by {post.author}</div>

      {/* content */}
      <div className="card p-6 bg-white shadow rounded-xl prose max-w-none">
        <p style={{ whiteSpace: "pre-wrap" }}>{post.content}</p>
      </div>
    </article>
  );
}
