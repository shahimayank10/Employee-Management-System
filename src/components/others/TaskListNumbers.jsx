import React from 'react'

const TaskListNumbers = ({data}) => {

  console.log(data);
  return (
   <div className='mt-10 py-3  flex gap-4 items-center flex-nowrap'>
     <div className=' w-[45%] bg-blue-400 rounded-xl p-4'>
      <h3 className='font-bold text-4xl'>{data?.taskCount?.newTask}</h3>
      <h2 className='font-semibold text-3xl mt-5'>New Task</h2>
    </div>

    <div className=' w-[45%] bg-yellow-400 rounded-xl  text-black p-4'>
    <h3 className='font-bold text-4xl'>{data?.taskCount?.active}</h3>
      <h2 className='font-semibold text-3xl mt-5'>Active Task</h2>
    </div>

    <div className=' w-[45%] bg-green-400 rounded-xl p-4'>
    <h3 className='font-bold text-4xl'>{data?.taskCount?.completed}</h3>
    <h2 className='font-semibold text-3xl mt-5'>Completed Task</h2>
    </div>

    <div className=' w-[45%] bg-red-400 rounded-xl p-4'>
    <h3 className='font-bold text-4xl'>{data?.taskCount?.failed}</h3>
    <h2 className='font-semibold text-3xl mt-5'>Failed Task</h2>
    </div>

   </div>
  )
}

export default TaskListNumbers
