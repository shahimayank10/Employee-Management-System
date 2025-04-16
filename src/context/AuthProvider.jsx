import React, { createContext, useState ,useEffect} from 'react'
import { getLocalStorage ,setLocalStorage } from '../utils/LocalStorage'


export const AuthContext  = createContext();

const AuthProvider = ({children}) => {

    const [data,setData]=useState([]);


    useEffect(() => {
        setLocalStorage()
        const data = getLocalStorage();
        setData(data);
    },[])

  return (
    <div>
   <AuthContext.Provider value={data}>
   {children}
   </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider