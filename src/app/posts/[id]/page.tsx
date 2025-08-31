"use client";
import React from "react";
import { useParams } from "next/navigation";
import { findPost } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import Loading from "@/components/Loading";
import NotFound from "@/components/NotFound";
import { categoryColors } from "@/constants/categoryColors";

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
    <article className="space-y-6">
      {/* Header Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <span>{post.createdAt ? formatDate(post.createdAt) : ""}</span>
          <span>•</span>
          <span
            className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
              categoryColors[post.category.toLowerCase()] ||
              "bg-gray-100 text-gray-600"
            }`}
          >
            {post.category}
          </span>
        </div>
        <div className="text-sm text-slate-600 break-words whitespace-pre-wrap flex flex-col items-end">
          <span>👤 Written by</span>
          <span className="font-bold text-lg">{post.author}</span>
        </div>
      </div>

      {/* Title */}
      <header>
        <h1 className="text-3xl font-bold tracking-tight leading-snug break-words whitespace-pre-wrap">
          {post.title}
        </h1>
      </header>

      {/* Summary */}
      {post.summary && (
        <section className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 text-sm leading-relaxed">
          <h2 className="font-semibold mb-1 text-slate-800">📌 Summary</h2>
          <p className="break-words whitespace-pre-wrap">{post.summary}</p>
        </section>
      )}

      {/* Content */}
      <section className="card p-6 bg-white shadow rounded-xl prose max-w-none">
        <h2 className="font-semibold text-slate-800 text-lg mb-3">
          📝 Content
        </h2>
        <p style={{ whiteSpace: "pre-wrap" }}>{post.content}</p>
      </section>
    </article>
  );
}
