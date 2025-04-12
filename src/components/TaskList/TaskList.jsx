import React from 'react'

const TaskList = () => {
  return (
    <div id='taskList' className='h-[50%] mt-10 py-5 flex justify-start items-center gap-4 flex-nowrap overflow-x-auto'>
     
      <div className='flex-shrink-0 bg-red-400 w-1/4 h-full rounded-xl px-4 py-5'>
       
       <div className='flex items-center justify-between'>
       <h3 className='bg-red-500 rounded px-3 py-2 font-semibold'>high</h3>
       <h2 className='font-medium text-md'>13 April ,2025</h2> 
        </div> 

        <h1 className='mt-6 font-semibold text-2xl'>Make a youtube video</h1>
        <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint neque nam esse impedit ut quaerat?</p>
      </div>
    

      <div className='flex-shrink-0 bg-yellow-400 w-1/4 h-full rounded-xl px-4 py-5'>
       
       <div className='flex items-center justify-between'>
       <h3 className='bg-red-500 rounded px-3 py-2 font-semibold'>high</h3>
       <h2 className='font-medium text-md'>13 April ,2025</h2> 
        </div> 

        <h1 className='mt-6 font-semibold text-2xl'>Make a youtube video</h1>
        <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint neque nam esse impedit ut quaerat?</p>
      </div>
    

      <div className='flex-shrink-0 bg-blue-400 w-1/4 h-full rounded-xl px-4 py-5'>
       
       <div className='flex items-center justify-between'>
       <h3 className='bg-red-500 rounded px-3 py-2 font-semibold'>high</h3>
       <h2 className='font-medium text-md'>13 April ,2025</h2> 
        </div> 

        <h1 className='mt-6 font-semibold text-2xl'>Make a youtube video</h1>
        <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint neque nam esse impedit ut quaerat?</p>
      </div>

      <div className='flex-shrink-0 bg-green-400 w-1/4 h-full rounded-xl px-4 py-5'>
       
       <div className='flex items-center justify-between'>
       <h3 className='bg-red-500 rounded px-3 py-2 font-semibold'>high</h3>
       <h2 className='font-medium text-md'>13 April ,2025</h2> 
        </div> 

        <h1 className='mt-6 font-semibold text-2xl'>Make a youtube video</h1>
        <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint neque nam esse impedit ut quaerat?</p>
      </div>

     

    </div>
  )
}

export default TaskList
