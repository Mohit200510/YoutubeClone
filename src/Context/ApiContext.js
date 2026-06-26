
import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';





export const apiContext = createContext()
export default function ApiProvider({children}) {

     const[apiData,setApiData] = useState([]);
     const[loading,setLoading]= useState(true);
     const[category,setCategory]= useState("");
     const[signedUser,setSignedUser] =useState("")


       const FetchApi = async() =>{
        

        try{
            const response = await fetch(`https://6a2e4176c9776ca6c0c47384.mockapi.io/youtube/videos`);
            const data = await response.json();
            setApiData(data)
        }
        catch(err){
            console.log(err)
        }
    
        finally{
            
            setLoading(false)
        }
        
        }
    
        useEffect(()=>{
            setTimeout(()=>{
            FetchApi()
    
            },1000)
         
        },[])
      

        
  
        


  return (
    <apiContext.Provider value={{apiData,loading,FetchApi,category,setCategory,signedUser,setSignedUser}}>
      {children}
      </apiContext.Provider>
  )

}
