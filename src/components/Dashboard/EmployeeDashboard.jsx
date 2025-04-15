import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data,logoutHandler}) => {

  console.log(data);
  return (
    <div className='w-full h-screen bg-[#1f1f1f]  text-white p-10'>
      <Header name={data?.name} logoutHandler={logoutHandler}/>
      <TaskListNumbers data={data}/>
      <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard
