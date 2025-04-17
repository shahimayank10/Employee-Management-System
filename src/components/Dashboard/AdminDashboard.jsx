import React from 'react'
import Header from '../others/Header'
import Createtask from '../others/createTask'
import AllTask from '../TaskList/AllTask'

const AdminDashboard = ({logoutHandler,name,data}) => {
  return (
    <div className='w-full h-auto bg-[#1f1f1f] text-white p-10'>
      <Header logoutHandler={logoutHandler} name={name} />

      <Createtask data={data}/>

      <AllTask data={data}/>

    </div>
  )
}

export default AdminDashboard
