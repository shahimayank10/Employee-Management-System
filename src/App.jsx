import { useState , useEffect} from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useContext } from 'react'
import { AuthContext } from './context/AuthProvider'


function App() {

  const[user,setUser]=useState(null);
  const[loggedInUserData,setLoggedInUserData]=useState('');

  const AuthData = useContext(AuthContext);
 
  // console.log(AuthData);

  useEffect(() => {

    if(AuthData){
      const loggedinUser=JSON.parse( localStorage.getItem('loggedinUser'));
      if(loggedinUser){
        setUser(loggedinUser.role);
      }
    }
    
  }, [AuthData])



  function logoutHandler(){
    if(user){
      localStorage.setItem('loggedinUser', JSON.stringify({role:null}));
      setUser(null);
      setLoggedInUserData('');
    }
  }
  

  

  function handleLogin(email,password){
    if(AuthData && (AuthData.admin[0].email === email && AuthData.admin[0].password === password)){
      setUser("admin");
      localStorage.setItem('loggedinUser', JSON.stringify({role:"admin"}));
      // setLoggedInUserData({name:AuthData.admin[0].name, email:AuthData.admin[0].email})
    }
    else if(AuthData){
      const employeeData= AuthData?.employees.find((e)=> e.email === email && e.password === password);
      if(employeeData){
        setUser("employee");
        localStorage.setItem('loggedinUser', JSON.stringify({role:"employee"}));
        setLoggedInUserData(employeeData);
      }
    }
    else{
      alert("incorrect Credintials");
    }
  }
 

  return (
    <>
     {!user ? <Login handleLogin={handleLogin}/> : ""}
     {user==="admin" &&  <AdminDashboard logoutHandler={logoutHandler} name={ AuthData.admin[0].name}/>}
     {user==="employee" && <EmployeeDashboard data={loggedInUserData} logoutHandler={logoutHandler}/> }
 
    </>
  )
}

export default App
