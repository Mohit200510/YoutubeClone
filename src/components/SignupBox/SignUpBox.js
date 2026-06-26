import React, { useState } from 'react'
import "./SignUpBox.css"
import { useNavigate,Navigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { ToastContainer,toast } from 'react-toastify'



const SignUpBox = () => {



    const navigatePrev =useNavigate();
    const navigate = useNavigate();
    const[Loading,setLoading]=useState(false)
    const[positon,setPosition]=useState("")

    const URL = "https://6a2e4176c9776ca6c0c47384.mockapi.io/youtube/users";




    const FormHandler= async(e)=>{

        e.preventDefault();
         setLoading(true);

        const rawloginData = new FormData(e.currentTarget);
        const loginData = Object.fromEntries(rawloginData.entries());
        console.log("form values",loginData);

        try{
            const response = await fetch(URL,{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(loginData)
            })
           

            
        }
        catch(err){
            console.log("eroor",err)
        }
        finally{

            
             toast.success("Redirecting to login...");

            setTimeout(() => {
                navigate("/login")
                    setLoading(false)
            }, 2000);

            
           
        }
         

    }

    
        function NavigatePrev(){
            navigatePrev(-1)
        }
    

    








  return (
    <>

    <i onClick={NavigatePrev} id='close-signup-page' class="fa-solid fa-arrow-left"></i>
    <div className="signup-container">

    <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
        alt="YouTube Logo"
        className="signup-box-logo"
    />

    <h1 className='signup-box-title'>Create account</h1>

    <p className="signup-box-subtitle">
        Sign up to continue to YouTube
    </p>

    <form onSubmit={FormHandler} className='signup-Form'>

        <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
        />

        <input
            type="email"
            name="email"
            placeholder="Email or phone"
            required
        />

        <input
            type="password"
            name="password"
            placeholder="Password"
            required
        />

        <div className="signup-remember-box">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
                I agree to terms & conditions
            </label>
        </div>

        <button className='signup-btn' type="submit" disabled={Loading}>
            {Loading ? <ClipLoader color='#fff'/> :"Sign Up"}
            <ToastContainer pauseOnHover={false} position="top-center"  theme="dark" autoClose={1000}  />
        </button>

    </form>

    <div className="signup-footer">
        <span>Already have an account?</span>
        <a href="/login">Sign in</a>
    </div>

</div>
</>
  )
}

export default SignUpBox;