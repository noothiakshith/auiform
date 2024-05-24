"use client";
import { Button } from '@/components/ui/button';
import { SignInButton, SignUpButton, SignedIn } from '@clerk/nextjs';
import  {UserButton, useAuth, useUser}  from '@clerk/nextjs';
import { BUILD_ID_FILE } from 'next/dist/shared/lib/constants';
import Image from 'next/image'
import Link from 'next/link';


const Header = () => {
  const{user,isSignedIn}=useUser()
  return (

    <header className="bg-white">
  <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
    <Link href="/">
    <Image src="/logo.svg" height={30} width={30} alt='logo'  />

    </Link>
    
    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About </a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          {isSignedIn?<div className='flex items-center  gap-5 '>
           <Link href="/dashboard">
           <Button >Dashboard</Button></Link>
           <UserButton/>
            </div>:<div className='flex fle-col gap-5 items-center'>
              <SignInButton>
                <Button variant="secondary">Sign In</Button>
              </SignInButton>
              <SignUpButton>
              <Button>Sign Up</Button>
              </SignUpButton>
            </div>
}  
          </div>

        <button
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header