import Link from "next/link";
import { BlogPost } from "@/lib/types";
import { formatDate } from "@/lib/utils";

type Props = {
  post: BlogPost;
};

export default function PostCard({ post }: Props) {
  return (
    <Link href={`/posts/${post.id}`} className="card block">
      <div className="text-sm text-slate-500">
        {formatDate(post.createdAt)} • {post.category}
      </div>
      <h3 className="text-lg font-semibold">{post.title}</h3>
      <div className="text-slate-600">{post.summary}</div>
      <div className="text-sm text-slate-500 mt-2">by {post.author}</div>
    </Link>
  );
}
