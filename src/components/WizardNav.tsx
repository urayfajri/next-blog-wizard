type Props = {
  canBack: boolean;
  onBack: () => void;
  onNext: () => void;
  onSubmit?: () => void;
  isLast: boolean;
};

export default function WizardNav({
  canBack,
  onBack,
  onNext,
  onSubmit,
  isLast,
}: Props) {
  return (
    <div className="flex justify-between mt-6">
      {canBack ? (
        <button
          className="px-4 py-2 text-sm font-medium bg-slate-100 text-slate-600 rounded-lg shadow hover:bg-slate-200 transition"
          disabled={!canBack}
          onClick={onBack}
        >
          ← Back
        </button>
      ) : (
        <div></div>
      )}
      {!isLast ? (
        <button
          className="px-5 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          onClick={onNext}
        >
          Next →
        </button>
      ) : (
        <button
          className="px-5 py-2 text-sm font-semibold bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          onClick={onSubmit}
        >
          ✅ Submit
        </button>
      )}
    </div>
  );
}
