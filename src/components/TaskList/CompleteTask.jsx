import React from 'react'

const CompleteTask = ({data}) => {
    
  return (
    <div className='flex-shrink-0 bg-blue-400 w-1/4 h-full rounded-xl px-4 py-5'>
       
       <div className='flex items-center justify-between'>
    <h3 className='bg-red-500 rounded px-3 py-2 font-semibold'>{data.category}</h3>
    <h2 className='font-medium text-md'>{data.taskDate}</h2> 
     </div> 

     <h1 className='mt-6 font-bold text-2xl'>{data.taskTitle}</h1>
     <p className='mt-5'>{data.taskDescription}</p>
     <button className='mt-5 w-full bg-green-500 p-2 rounded'>Complete</button>
   </div>
  )
}

export default CompleteTask