export default function WizardNav({ canBack, canNext, onBack, onNext, onSubmit, isLast }: { canBack: boolean; canNext: boolean; onBack: ()=>void; onNext: ()=>void; onSubmit?: ()=>void; isLast: boolean }) {
  return (
    <div className='flex justify-between mt-4'>
      <button className='button secondary' disabled={!canBack} onClick={onBack}>Back</button>
      {!isLast ? (
        <button className='button' disabled={!canNext} onClick={onNext}>Next</button>
      ) : (
        <button className='button' disabled={!canNext} onClick={onSubmit}>Submit</button>
      )}
    </div>
  )
}
