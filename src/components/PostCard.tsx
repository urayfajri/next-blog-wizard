import Link from "next/link";
import { BlogPost } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { truncateByChars } from "@/lib/text";
import { categoryColors } from "@/constants/categoryColors";

type Props = {
  post: BlogPost;
};

export default function PostCard({ post }: Props) {
  return (
    <Link
      href={`/posts/${post.id}`}
      className="flex flex-col justify-between  min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-slate-300 h-full"
    >
      <div>
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
          <span
            className={`px-2 py-0.5 rounded-full font-medium bg-blue-50 ${
              categoryColors[post.category.toLowerCase()] ||
              "bg-gray-100 text-gray-600"
            }`}
          >
            {post.category}
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="min-w-0">{formatDate(post.createdAt)}</span>
        </div>

        <h3
          className="text-lg font-semibold text-slate-800 mb-2 break-words min-w-0"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {post.title}
        </h3>

        <p
          className="text-slate-600 text-sm mb-3 break-words min-w-0"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {truncateByChars(post.summary, 50)}
        </p>
      </div>

      <div className="grid grid-cols-2 items-center text-xs text-slate-500 mt-3">
        <span className="italic">{truncateByChars(post.author, 10)}</span>
        <span className="justify-self-end text-blue-600 font-medium">
          Read more →
        </span>
      </div>
    </Link>
  );
}
