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
    <div className="flex justify-between mt-4">
      <button className="button secondary" disabled={!canBack} onClick={onBack}>
        Back
      </button>
      {!isLast ? (
        <button className="button" onClick={onNext}>
          Next
        </button>
      ) : (
        <button className="button" onClick={onSubmit}>
          Submit
        </button>
      )}
    </div>
  );
}
