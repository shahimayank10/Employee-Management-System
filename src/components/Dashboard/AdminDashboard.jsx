import React from 'react'
import Header from '../others/Header'
import Createtask from '../others/createTask'
import AllTask from '../TaskList/AllTask'

const AdminDashboard = () => {
  return (
    <div className='w-full h-screen bg-[#1f1f1f] text-white p-10'>
      <Header/>

      <Createtask/>

      <AllTask/>

    </div>
  )
}

export default AdminDashboard
