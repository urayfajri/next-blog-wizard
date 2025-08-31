import ReviewList from '@/components/ReviewList'
import { useFormCtx } from '@/context/BlogFormContext'

export default function Step4() {
  const { state } = useFormCtx()
  return <ReviewList data={state} />
}
