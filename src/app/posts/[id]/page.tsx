'use client'
import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import { findPost } from '@/lib/posts'
import { formatDate } from '@/lib/utils'

export default function Page() {
  const params = useParams()
  const router = useRouter()
  const id = String(params?.id)
  const [post, setPost] = React.useState(()=> findPost(id))

  React.useEffect(()=> setPost(findPost(id)), [id])

  if (!post) return <div className='card'>Post not found</div>

  return (
    <article className='stack'>
      <div className='text-sm text-slate-500'>{formatDate(post.createdAt)} • {post.category}</div>
      <h1 className='text-2xl font-bold'>{post.title}</h1>
      <div className='text-sm text-slate-600 mb-4'>by {post.author}</div>
      <div className='card'><p style={{whiteSpace:'pre-wrap'}}>{post.content}</p></div>
    </article>
  )
}
