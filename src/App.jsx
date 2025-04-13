import { useState , useEffect} from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useContext } from 'react'


function App() {

  const[user,setUser]=useState(null);

  function handleLogin(email,password){
    if(email==="Admin@m.com" && password==="123"){
      setUser("Admin");
    }
    else if(email==="user@m.com" && password==="123"){
      setUser("User");
    }
    else{
      alert("incorrect Credintials");
    }
  }
 

  return (
    <>
     {!user ?  <Login handleLogin={handleLogin}/> : ""}
     {user==="Admin" ?  <AdminDashboard/>: <EmployeeDashboard/> }
 
    </>
  )
}

export default App
