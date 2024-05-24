"use client"
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { useState } from 'react';
  import { Button } from '@/components/ui/button';
  import { Textarea } from '@/components/ui/textarea';

import { Plus } from 'lucide-react';
import { AiChatSession } from '@/configs/Aimodal';
import { useUser } from '@clerk/nextjs';
import { db } from '@/configs';
import moment from 'moment/moment';
import { JsonForms } from '@/configs/schema';
import { Route } from 'lucide-react';
import { useRouter } from 'next/navigation';
const PROMPT=",On Basis of description create JSON form with formTitle, formHeading along with fieldName, FieldTitle,FieldType, Placeholder, label , required fields, and checkbox and select field type options will be in array only and in JSON format"
const CreateForm = () => {
    const{user} = useUser();
    const router = useRouter();
    const[openDialog,setOpenDialog]=useState(false);
    const[userInput,setUserInput]=useState('');
    const[loading,setLoading]=useState(false);
    const onCreateForm= async ()=>{
        console.log(userInput);
        setLoading(true);
        const result = await AiChatSession.sendMessage("Description"+userInput+PROMPT);
        console.log(result.response.text());
        if(result.response.text()){
            const resp = await db.insert(JsonForms)
            .values({ jsonform:result.response.text(),
                createdBy:user?.primaryEmailAddress?.emailAddress,
                createdAt:moment().format('DD/MM/yyyy')}).returning({id:JsonForms.id});

                if(resp[0].id){
                    router.push('/edit-form/'+resp[0].id);
                }
            console.log("Form created successfully");
            setLoading(false);
        }
        setLoading(false);
    }
  
  return (
    <div>
        <Button onClick={()=>setOpenDialog(true)}> <Plus className='h-4 w-4'/>Create Form</Button>
        <Dialog open={openDialog}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Form creation</DialogTitle>
      <Textarea className="my-2" placeHolder="Enter the text you want " onChange={(e)=>setUserInput(e.target.value)}/>
      <div className='justify-end flex my-3 gap-2 pt-3'>
        <Button variant="destructive" onClick={()=>setOpenDialog(false)}>Cancel</Button>
        <Button variant="secondary" onClick={()=>onCreateForm()}>Save</Button>
      </div>
      <Dialog/>
    </DialogHeader>
  </DialogContent>
</Dialog>


    </div>
  )
}

export default CreateForm