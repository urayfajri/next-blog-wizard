import { DraftPost } from "@/lib/types";

type Props = {
  data: DraftPost;
};

export default function ReviewList({ data }: Props) {
  const rows = [
    ["Title", data.title],
    ["Author", data.author],
    ["Summary", data.summary],
    ["Category", data.category],
    ["Content", data.content],
  ];

  return (
    <div className="grid gap-4">
      {rows.map(([k, v]) => (
        <div
          key={k}
          className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {k}
          </div>
          <div
            className="mt-2 text-sm text-slate-700 leading-relaxed line-clamp-3"
            title={v || "—"}
          >
            {v || "—"}
          </div>
        </div>
      ))}
    </div>
  );
}
