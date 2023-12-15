import React from 'react'

import { Suspense } from 'react'
import Link from 'next/link'
import Repo from '@/app/components/repo'
import RepoDirs from '@/app/components/repoDirs'

export default function RepoPage({ params: {name} }) {
  return (
    <div className='card'>
        <Link href='/code/repos' className='btn btn-back'>Back To Respositories</Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Repo name={name} />
        </Suspense>
        <Suspense fallback={<div>Loading Directories...</div>}>
          <RepoDirs name={name} />
        </Suspense>
    </div>
  )
}
