import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='max-h-screen flex items-center justify-center'>
      <div className='absolute top-2 left-5'>
        <Button variant="secondary" size="sm" className='p-5'>
        <Link href="/"  >
            <ArrowLeft className='h-4 w-4' />
             Back to Home
        </Link>
        </Button>
      </div>
        <div className='w-full max-w-md mx-auto pt-30'>
            {children}
        </div>
    </div>
  )
}

export default AuthLayout