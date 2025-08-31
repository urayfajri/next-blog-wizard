type Props = {
  message?: string;
};

export default function NotFound({ message = "Data not found" }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-40 text-center">
      <div className="text-4xl mb-2">😕</div>
      <p className="text-slate-600">{message}</p>
    </div>
  );
}
