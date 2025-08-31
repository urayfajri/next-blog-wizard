import TextAreaField from '@/components/fields/TextAreaField'
import { useFormCtx } from '@/context/BlogFormContext'

export default function Step3() {
  const { state, set } = useFormCtx()
  return (
    <div>
      <TextAreaField label='Blog Content' name='content' value={state.content} onChange={set('content')} />
    </div>
  )
}
