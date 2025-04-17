import { useState , useEffect} from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useContext } from 'react'
import { AuthContext } from './context/AuthProvider'


function App() {

  const[user,setUser]=useState('');
  const[loggedInUserData,setLoggedInUserData]=useState({});

  const AuthData = useContext(AuthContext);
 
  // console.log(AuthData);

  useEffect(() => {

    if(AuthData){
      const loggedinUser=JSON.parse( localStorage.getItem('loggedinUser'));   //don't run in first
      if(loggedinUser){
        setUser(loggedinUser.role);
        setLoggedInUserData(loggedinUser.data);
      }
    }
    
  }, [AuthData])



  function logoutHandler(){
    if(user){
      localStorage.setItem('loggedinUser', JSON.stringify(null));
      setUser(null);
      setLoggedInUserData(null);
    }
  }
  

  
// form login button invoke handleLogin function
  function handleLogin(email,password){
    if(AuthData && (AuthData.admin[0].email === email && AuthData.admin[0].password === password)){
      setUser("admin");
      localStorage.setItem('loggedinUser', JSON.stringify({role:"admin",data:AuthData.admin[0]}));   //in case of refresh 
   
    }
    else if(AuthData &&  AuthData?.employees.find((e)=> e.email === email && e.password === password)){
      const employeeData= AuthData?.employees.find((e)=> e.email === email && e.password === password);
      if(employeeData){
        setUser("employee");
        localStorage.setItem('loggedinUser', JSON.stringify({role:"employee",data:employeeData})); //in case of refresh 
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
     {user==="admin" &&  <AdminDashboard logoutHandler={logoutHandler} name={ AuthData.admin[0].name} data={AuthData.employees}/>}
     {user==="employee" && <EmployeeDashboard data={loggedInUserData} logoutHandler={logoutHandler}/> }
 
    </>
  )
}

export default App
