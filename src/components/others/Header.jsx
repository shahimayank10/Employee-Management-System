import React from 'react'

const Header = ({name,logoutHandler}) => {

  console.log(name);
  return (
    <div className='w-full h-24 flex justify-between items-end py-5'>
      <h3 className='font-semibold text-2xl'>hello <br /><span className='font-bold text-3xl'>{name} ✋</span></h3>
      <button className=' bg-red-500 py-2 px-3 rounded font-medium cursor-pointer' onClick={()=>logoutHandler()}>Log Out</button>
    </div>
  )
}

export default Header
