import "./Header.css"
import logo from "../../assets/images/youtubelogo.png";
import { useContext, useEffect, useState } from "react";

import { findByPlaceholderText } from "@testing-library/dom";
import { useNavigate,navigate } from "react-router-dom";
import { apiContext } from "../../Context/ApiContext";
import UserProfileIcon from "./UserProfileIcon";
import ProfileBox from "./ProfileBox";
import SearchModule from "../SearchModule/SearchModule";
import { Link } from "react-router-dom";




function Header(){


    // const {apiData} =useContext(apiContext)

    const navigate = useNavigate()


    
    const[display,setDisplay]=useState("none");
    

    const {signedUser,setSignedUser}=  useContext(apiContext)

    
    

    
    


    useEffect(()=>{
         const user = JSON.parse(localStorage.getItem("LoggedUser"))
    setSignedUser(user)
    // console.log("value in locals storage",signedUser);
    },[])
   
    // console.log("value in locals storage",signedUser);
   
    // 



   

    
    

    return(
        <>
        
        <header id="target-one">
        <div className="container">

            <div className="youtube-header">

        <div className="youtube-header-div-one">
            <i className="fa-solid fa-bars"></i>
            <img onClick={()=>{
                navigate("/")
            }} src= {logo} width="100px" title="YouTube Home"></img>
        </div>

        

        <div className="youtube-header-div-two">

            <SearchModule></SearchModule>
            

            


            <div className="youtube-header-div-two-microphone">
               <i  className="fa-solid fa-microphone"></i>
               
                <h5 className="hover-test">Search with your voice</h5>
            </div>
        
        </div>


        <div className="youtube-header-div-three">
            {/* <i className="fa-solid fa-magnifying-glass"></i> */}


            <div className="youtube-header-div-three-setting-icon">
                <i className="fa-solid fa-ellipsis-vertical"></i>
                <h5 className="youtube-header-div-three-setting-popup">Settings</h5>
            </div>

            <div className="">
                <Link to="/search">
                <i className="fa-solid fa-magnifying-glass" id="Mobile-Search-icon"></i>
                </Link>
            </div>
            


            <div onClick={()=>{
                if(!signedUser){
                    navigate("/login")

                //  setDisplay("block")
                }
                else{
                    // navigate("/login")

                }
               }}

             onMouseOver={()=>{
                 setDisplay("block")

                }}
             onMouseLeave={()=>{
                setDisplay("none")
            }}
             className="youtube-header-div-three-account">
                {/* <i style={{color:signedUser? "rgb(110 160 200)": "#fff"}} className="fa-regular fa-circle-user"></i> */}
                {signedUser?<UserProfileIcon signedUser={signedUser}/>:<i style={{color:signedUser? "rgb(110 160 200)": "#fff"}} className="fa-regular fa-circle-user"></i> }
                {/* <UserProfileIcon signedUser={signedUser}/> */}
                <span className="user-name">{signedUser ? `Hello, ${signedUser.name}` : "Sign In"}</span>
                <ProfileBox display={display}/>


            </div>
        </div>

        
        </div>

        </div>
    </header>

    

        </>
    )
}

export default Header;