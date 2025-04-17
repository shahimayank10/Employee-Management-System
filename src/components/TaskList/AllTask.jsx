import React from 'react'

const AllTask = ({data}) => {
  return (
<div>


                    <div className='w-full bg-zinc-600 flex items-center py-3 font-bold mt-10'>
                                <h2 className='w-1/5 px-4'>Employee Name</h2>
                                <h2 className='w-1/5 px-4'>New Task</h2>
                                <h2 className='w-1/5 px-4'>Active Task</h2>
                                <h2 className='w-1/5 px-4'>Completed</h2>
                                <h2 className='w-1/5 px-4'>Failed</h2>
                    </div>
    

            <div className='w-full h-40 bg-zinc-600 overflow-y-auto' id=''>

                {data.map((item,index)=>(
                    <div className='bg-zinc-500 flex justify-between items-center py-3 rounded mt-5' key={index}>
                    <h2 className='w-1/5 px-4'>{item.name}</h2>
                    <h2 className='w-1/5 px-4'>{item.taskCount.newTask}</h2>
                    <h2 className='w-1/5 px-4'>{item.taskCount.active}</h2>
                    <h2 className='w-1/5 px-4'>{item.taskCount.completed}</h2>
                    <h2 className='w-1/5 px-4'>{item.taskCount.failed}</h2>
                    
                    </div>
                ))}
                   

            </div>
   
</div>
  )
}

export default AllTask