'use client'
import React from 'react'
import Link from 'next/link'
import { listPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export default function Page() {
  const [posts, setPosts] = React.useState(() => listPosts())
  React.useEffect(()=>{
    const onFocus = ()=> setPosts(listPosts())
    window.addEventListener('focus', onFocus)
    return ()=> window.removeEventListener('focus', onFocus)
  },[])

  return (
    <div className="stack">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Blog Posts</h1>
        <Link href="/create" className="button">New Post</Link>
      </div>
      {posts.length === 0 ? (
        <div className="card">No posts yet. Create your first post.</div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {posts.map(p=> <PostCard key={p.id} post={p} />)}
        </div>
      )}
    </div>
  )
}
