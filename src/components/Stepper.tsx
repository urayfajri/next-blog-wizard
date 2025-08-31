export default function Stepper({ step }: { step: number }) {
  const labels = ["Metadata", "Summary & Category", "Content", "Review"];
  return (
    <div className="w-full mb-4">
      {/* Progress Bar */}
      <div className="w-full h-2 bg-slate-200 rounded-full mb-6 overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all duration-500"
          style={{ width: `${((step + 1) / labels.length) * 100}%` }}
        />
      </div>

      {/* Step Badges */}
      <div className="flex justify-between">
        {labels.map((label, i) => (
          <div
            key={label}
            className={`flex flex-col items-center text-xs font-medium w-1/4`}
          >
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                i === step
                  ? "bg-blue-600 border-blue-600 text-white shadow"
                  : i < step
                  ? "bg-green-500 border-green-500 text-white"
                  : "bg-white border-slate-300 text-slate-400"
              }`}
            >
              {i + 1}
            </div>
            <span
              className={`mt-2 ${
                i === step
                  ? "text-blue-600"
                  : i < step
                  ? "text-green-600"
                  : "text-slate-400"
              }`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
