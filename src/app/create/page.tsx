'use client'
import React from 'react'
import Layout from '@/components/Layout'
import { BlogFormProvider, useFormCtx } from '@/context/BlogFormContext'
import Stepper from '@/components/Stepper'
import WizardNav from '@/components/WizardNav'
import Step1 from '@/components/steps/Step1'
import Step2 from '@/components/steps/Step2'
import Step3 from '@/components/steps/Step3'
import Step4 from '@/components/steps/Step4'
import { validateStep } from '@/lib/utils'
import { addPost } from '@/lib/posts'
import { useRouter } from 'next/navigation'

function WizardInner() {
  const { state, dispatch } = useFormCtx()
  const router = useRouter()
  const errors = validateStep(state.step, state)
  const hasErrors = Object.keys(errors).length > 0

  const goNext = ()=> { if (!hasErrors) dispatch({type:'NEXT'}) }
  const submit = ()=> {
    const allErrors = {...validateStep(0,state), ...validateStep(1,state), ...validateStep(2,state)}
    if (Object.keys(allErrors).length>0) return
    const saved = addPost({ title: state.title, author: state.author, summary: state.summary, category: state.category, content: state.content })
    dispatch({type:'RESET'})
    router.push(`/posts/${saved.id}`)
  }

  const Step = [Step1, Step2, Step3, Step4][state.step]

  return (
    <div className="stack">
      <Stepper step={state.step} />
      <div className="card">
        <Step />
      </div>
      <WizardNav
        canBack={state.step>0}
        canNext={!hasErrors}
        onBack={()=>dispatch({type:'BACK'})}
        onNext={goNext}
        onSubmit={submit}
        isLast={state.step===3}
      />
    </div>
  )
}

export default function Page() {
  return (
    <BlogFormProvider>
      <WizardInner />
    </BlogFormProvider>
  )
}
