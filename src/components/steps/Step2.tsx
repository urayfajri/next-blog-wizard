import TextAreaField from '@/components/fields/TextAreaField'
import SelectField from '@/components/fields/SelectField'
import { CATEGORIES } from '@/lib/utils'
import { useFormCtx } from '@/context/BlogFormContext'

export default function Step2() {
  const { state, set } = useFormCtx()
  return (
    <div>
      <TextAreaField label='Blog Summary' name='summary' value={state.summary} onChange={set('summary')} />
      <SelectField label='Category' name='category' value={state.category} onChange={set('category')} options={CATEGORIES} />
    </div>
  )
}
