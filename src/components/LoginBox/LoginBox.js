import React, { useEffect, useState } from 'react';
import "./LoginBox.css";
import { useNavigate,Navigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners'



const LoginBox = () => {

    const navigatePrev =useNavigate();
    const navigate =useNavigate();
    // const[verification,setVerification]=useState("")
    const[loading,setLoading]=useState(false)


    
       const LoginHandler= async(e)=>{

        e.preventDefault();
        setLoading(true)
        const RawloginData = new FormData(e.currentTarget)
        const {email,password} = Object.fromEntries(RawloginData.entries());
        console.log("main login data is",email,password);
        
        try{
        
        const response= await fetch("https://6a2e4176c9776ca6c0c47384.mockapi.io/youtube/users")
        const data = await response.json()
        // setUser(data);


        const matchedUser = data.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password );
        // console.log("matched user is",matchedUser);
        
        if(matchedUser){

            localStorage.setItem("LoggedUser",JSON.stringify(matchedUser));

            setTimeout(() => {
                navigate("/")
                 setLoading(false)
            }, 2400);
            
           
            // setVerification("success")
            
        }
        else{
            // setVerification("failed")
            toast.error('Invalid credentials!',) 
             setLoading(false)
            
        }
        
        
    }
        catch(err){
            console.log(err);
            
        }
        
    }

    
    




    
    function NavigatePrev(){
        navigatePrev(-1)
    }

  return (
    <>

    <i onClick={NavigatePrev} id='close-login-page' class="fa-solid fa-arrow-left"></i>
    <div className="login-container">

        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"  alt="YouTube Logo"
        className="login-box-youtube-logo"></img>
            

        <h1 className='login-heading'>Sign in</h1>

        <p className="login-subtitle">
            Continue to YouTube
        </p>

        <form onSubmit={LoginHandler} className='login-fields'>

            <input
                type="email" name='email'
                placeholder="Email or phone"
                required
            >
            </input>

            <input
                type="password" name='password'
                placeholder="Password"
                required
            >
            </input>

            <div className="login-remember-box">
                <input type="checkbox" id="remember"></input>
                <label for="remember">
                    Keep me signed in
                </label>
            </div>

            <button className='login-btn' type="submit">
               {loading? <ClipLoader color='#fff'/> :"Sign In"}
            <ToastContainer  position="top-center" autoClose={1200} hideProgressBar theme="dark" />
             
            </button>

        </form>

        <div className="login-box-footer">
            <span>Don't have an account?</span>
            <a href="/signup">Create account</a>
        </div>

    </div>
    </>
  )
}

export default LoginBox