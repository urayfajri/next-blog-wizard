export default function ReviewList({ data }: { data: any }) {
  const rows = [
    ['Title', data.title],
    ['Author', data.author],
    ['Summary', data.summary],
    ['Category', data.category],
    ['Content', data.content],
  ]
  return (
    <div className='space-y-2'>
      {rows.map(([k,v])=> (
        <div key={k} className='card'>
          <div className='text-sm text-slate-600 font-medium'>{k}</div>
          <div className='mt-1'>{v || '—'}</div>
        </div>
      ))}
    </div>
  )
}
