import InputField from '@/components/fields/InputField'
import { useFormCtx } from '@/context/BlogFormContext'

export default function Step1() {
  const { state, set } = useFormCtx()
  const errors = {}
  return (
    <div>
      <InputField label='Blog Title' name='title' value={state.title} onChange={set('title')} />
      <InputField label='Author Name' name='author' value={state.author} onChange={set('author')} />
    </div>
  )
}
