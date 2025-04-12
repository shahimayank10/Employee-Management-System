import React from 'react'

const TaskListNumbers = () => {
  return (
   <div className='mt-10 py-3  flex gap-4 items-center flex-nowrap'>
     <div className=' w-[45%] bg-red-400 rounded-xl p-4'>
      <h3 className='font-bold text-4xl'>0</h3>
      <h2 className='font-semibold text-3xl mt-5'>New Task</h2>
    </div>

    <div className=' w-[45%] bg-green-400 rounded-xl p-4'>
    <h3 className='font-bold text-4xl'>0</h3>
      <h2 className='font-semibold text-3xl mt-5'>New Task</h2>
    </div>

    <div className=' w-[45%] bg-blue-400 rounded-xl p-4'>
    <h3 className='font-bold text-4xl'>0</h3>
    <h2 className='font-semibold text-3xl mt-5'>New Task</h2>
    </div>

    <div className=' w-[45%] bg-yellow-400 rounded-xl p-4'>
    <h3 className='font-bold text-4xl'>0</h3>
    <h2 className='font-semibold text-3xl mt-5'>New Task</h2>
    </div>

   </div>
  )
}

export default TaskListNumbers
