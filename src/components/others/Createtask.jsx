import React from 'react'

const Createtask = () => {

    function handleSubmit(e){
        e.preventDefault();
    }
  return (
    <div className='bg-zinc-600 flex items-start p-5 h-96 mt-8 rounded'>

    <form className='w-full flex items-start justify-between gap-5 h-full' onSubmit={(e)=>handleSubmit(e)}>
      
        <div className='w-[40%] h-full flex flex-col justify-between'>
        <div>
            <h3 className='font-medium text-xl '>Task Title</h3>
            <input type="text" placeholder='Make a ui design' className='w-full border rounded p-2 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'/>
        </div>
  
        <div>
        <h3 className='font-medium text-xl '>Date</h3>
            <input type="date" name="" className='w-full border rounded p-2 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'/>
        </div>

        <div>
        <h3 className='font-medium text-xl '>Assign To</h3>
            <input type="text" className='w-full border rounded p-2 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ' />
        </div>
        
        <div>
        <h3 className='font-medium text-xl '>Category</h3>
            <input type="text" placeholder='Design, Development, etc...' className='w-full border rounded p-2 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ' />
        </div>

        </div>

        <div className='w-[40%] h-full flex flex-col justify-between'>
                    <div>
                    <h3 className='font-medium text-xl '>Description</h3>
                    <textarea  rows="10"  cols="67" className='border resize-none rounded p-2 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'></textarea>
                    </div>
                    <button className='py-3 font-semibold rounded text-xl w-full bg-green-500'>Create Task</button>
        </div>
    </form>
  </div>
  )
}

export default Createtask