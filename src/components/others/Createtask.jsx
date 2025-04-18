import { useState } from "react"
import React from 'react'



const Createtask = ({data}) => {


    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDecription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

  

    function handleSubmit(e){
        e.preventDefault();

        if(taskTitle=='' || taskDescription=='' || taskDate=='' || asignTo=='' || category==''){
            alert('Enter all details to Asign a Task');
            return;
        }

     
        data.forEach((element)=>{ 
            if((element.name).toLowerCase() === asignTo.toLowerCase() ){
                element.tasks.push({taskTitle,taskDescription,taskDate,asignTo,category,active:false,completed:false,failed:false, newTask:true});
                
                element.taskCount.newTask= element.taskCount.newTask+1;

                localStorage.setItem('employees',JSON.stringify(data));

            }

        
        
    })

        setTaskTitle('')
        setTaskDecription('')
        setTaskDate('')
        setAsignTo('')
        setCategory('')
    }
  return (
    <div className='bg-zinc-600 flex items-start p-5 h-96 mt-8 rounded'>

    <form className='w-full flex items-start justify-between gap-5 h-full' onSubmit={(e)=>handleSubmit(e)}>
      
        <div className='w-[40%] h-full flex flex-col justify-between'>
        <div>
            <h3 className='font-medium text-xl '>Task Title</h3>
            <input type="text" value={taskTitle} onChange={(e)=>setTaskTitle(e.target.value)} placeholder='Make a ui design' className='w-full border rounded p-2 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'/>
        </div>
  
        <div>
        <h3 className='font-medium text-xl '>Date</h3>
            <input type="date" value={taskDate} onChange={(e)=>setTaskDate(e.target.value)} className='w-full border rounded p-2 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'/>
        </div>

        <div>
        <h3 className='font-medium text-xl '>Asign To</h3>
            <input type="text" value={asignTo} onChange={(e)=>setAsignTo(e.target.value)} className='w-full border rounded p-2 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ' />
        </div>
        
        <div>
        <h3 className='font-medium text-xl '>Category</h3>
            <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder='Design, Development, etc...' className='w-full border rounded p-2 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ' />
        </div>

        </div>

        <div className='w-[40%] h-full flex flex-col justify-between'>
                    <div>
                    <h3 className='font-medium text-xl '>Description</h3>
                    <textarea  rows="10" value={taskDescription} onChange={(e)=>setTaskDecription(e.target.value)}  cols="67" className='border resize-none rounded p-2 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'></textarea>
                    </div>
                    <button className='py-3 font-semibold rounded text-xl w-full bg-green-500'>Create Task</button>
        </div>
    </form>
  </div>
  )
}

export default Createtask