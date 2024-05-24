import React from 'react'
import { Button } from '@/components/ui/button';
import FormList from './_components/FormList';
import CreateForm from './_components/CreateForm';

const Dashboard = () => {
  return (
    <div className='p-10'>
      <div className='flex  justify-between ml-3'>
        <h2 className='font-bold text-3xl flex items-center '>Dashboard</h2>
        <CreateForm/>
      </div>
    </div>
  )
}

export default Dashboard