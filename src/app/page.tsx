'use client'

import Button from '@/components/ui/Button'
import { db } from '@/lib/db'
import { signOut } from 'next-auth/react'


export default async function Home() {

  

  return (
    <Button onClick={() => signOut()}>
      Sign Out
    </Button>
  )
}
