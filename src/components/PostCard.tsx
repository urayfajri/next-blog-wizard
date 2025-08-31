import Link from "next/link";
import { BlogPost } from "@/lib/types";
import { formatDate } from "@/lib/utils";

type Props = {
  post: BlogPost;
};

export default function PostCard({ post }: Props) {
  return (
    <Link
      href={`/posts/${post.id}`}
      className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-slate-300"
    >
      {/* Meta Info */}
      <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
        <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-medium">
          {post.category}
        </span>
        <span>•</span>
        <span>{formatDate(post.createdAt)}</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-slate-800 mb-2 line-clamp-2">
        {post.title}
      </h3>

      {/* Summary */}
      <p className="text-slate-600 text-sm mb-3 line-clamp-3">{post.summary}</p>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span className="italic">by {post.author}</span>
        <span className="text-blue-600 font-medium hover:underline">
          Read more →
        </span>
      </div>
    </Link>
  );
}
