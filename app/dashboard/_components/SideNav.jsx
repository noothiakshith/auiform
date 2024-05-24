"use client"
import { MessageSquare } from 'lucide-react'
import { Shield } from 'lucide-react'
import { LibraryBig } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '@/components/ui/button';


const SideNav = () => {
  const path = usePathname();
  const menuList = [
    {
      id:1,
      name:'My Forms',
      icon:LibraryBig,
      path:'/dashboard'
    },
    {
      id:2,
      name:'Responses',
      icon:MessageSquare,
      path:'/dashboard/responses'
    },
    {
      id:3,
      name:'Upgrade',
      icon:Shield,
      path:'/dashboard/upgrade'
    }
  ]
  return (
    <div className='h-screen shadow-md border '>
      <div className='p-5 '>
        {menuList.map((menu,index)=>(
          <Link key={index} href={menu.path} className={`flex items-center gap-5 mb-3 p-4 hover:bg-primary hover:text-white rounded-lg cursor-pointer text-gray-500 ${path === menu.path && 'bg-primary text-white'}`}>
            <menu.icon/>
            {menu.name}
          </Link>
        ))}
      </div>
      <div className='fixed-bottom-7 p-6 w-64 mt-40 mb-3'>
        <Button className='w-full'> + create form</Button>
      </div>
    </div>
  )
}

export default SideNav