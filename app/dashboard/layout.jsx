import React from 'react'
import SideNav from './_components/SideNav'
const DashboardLayout = ({children}) => {
  return (
    <div>
    <div className='md:w-64 fixed '>
        <SideNav/>
    </div>
    <div className='md:ml-64'>
    {children}
    </div>
    </div>
  )
}

export default DashboardLayout