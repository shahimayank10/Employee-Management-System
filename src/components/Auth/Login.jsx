import React, { useState } from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [rememberMe, setRememberMe] = useState(false);

    function submitHandler(e){
        e.preventDefault();
        console.log("submit");

        if(email==='' || password===''){
            setRememberMe(false);
            return;
        }
        const data={email,password};
        console.log(data);

        setEmail('');
        setPassword('');
        setRememberMe(false);
        
    }


  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-[#1f1f1f] '>

<div className="bg-[#1e1e1e] text-white p-4 rounded-lg w-80 h-96 shadow-xl border border-black">
    <h2 className="text-3xl font-bold mb-20">Log In</h2>
    
    
    <form onSubmit={submitHandler}>
      <div className="flex items-center bg-transparent border border-pink-500 rounded-full px-4 py-2 mb-4">
    
         <MdOutlineEmail color='pink' className='mr-2' />
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="bg-transparent outline-none w-full text-white placeholder-zinc-500" />
      </div>
    
      <div className="flex items-center bg-transparent border border-pink-500 rounded-full px-4 py-2 mb-4">
   
         <RiLockPasswordLine color='pink' className='mr-2'/>
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="bg-transparent outline-none w-full text-white placeholder-zinc-500" />
       
        <span className="text-sm text-white hover:underline ml-2">Show</span>

    
      </div>

    <div className="flex items-center justify-between text-sm mb-6">
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox rounded text-pink-500" checked={rememberMe} onChange={(prev)=>setRememberMe(!prev)}/>
        <span>Remember me</span>
      </label>
      <a href="#" className="text-pink-400 hover:underline">Forget Password</a>
    </div>

    <button className="bg-pink-500 w-full py-2 rounded-full text-white font-semibold hover:bg-pink-600 transition-all">
      Log In
    </button>

    </form>


    </div>
    </div>
  )
}

export default Login
