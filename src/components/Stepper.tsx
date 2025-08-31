export default function Stepper({ step }: { step: number }) {
  const labels = ['Metadata','Summary & Category','Content','Review']
  return (
    <div className='stepper'>
      {labels.map((l,i)=> (
        <div key={l} className={`step-badge ${i===step? 'active':''}`}>{i+1}. {l}</div>
      ))}
    </div>
  )
}
