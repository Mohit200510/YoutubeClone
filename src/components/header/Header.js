import "./Header.css"
import logo from "../../assets/images/youtubelogo.png";
import SearchBoxSujjestion from "../Searchbox";
import { useContext, useEffect, useState } from "react";

import { findByPlaceholderText } from "@testing-library/dom";
import { useNavigate,navigate } from "react-router-dom";
import { apiContext } from "../../Context/ApiContext";
import UserProfileIcon from "./UserProfileIcon";
import ProfileBox from "./ProfileBox";




function Header(){


    const {apiData} =useContext(apiContext)

    const navigate = useNavigate()


    const[searchValue,setSearchValue]=useState("");
    const[searchResults,SetSearchResults]=useState([]);
    // const[emptyDataText,setEmptyDataText]=useState("");
    const[box,setBox]=useState(false);
    const[display,setDisplay]=useState("none");
    

   const {signedUser,setSignedUser}=  useContext(apiContext)

    
    

    function storeValue(e){
        // console.log("taget value",e.target.value);
        const value= (e.target.value.toLocaleLowerCase())
        setSearchValue(value)
        // console.log("orignal value",searchValue)

        SetSearchResults(apiData.filter(video => video.title.toLocaleLowerCase().includes(value)));
        // console.log("filter data is here",searchResults)
        
    }

    


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
            

            <div className="youtube-header-div-two-search-bar">
                
            
            <i className="fa-solid fa-magnifying-glass" id="hover-icon"></i>

            <div className="searchWrapper">
            
            
            <input type="text" name="search" id="search" value={searchValue}
              onInput={function(e){
                storeValue(e)
            }}
              onBlur={()=>{
                setTimeout(() => {
                setBox(false)
                    
                }, 300);
            //    console.log("box =", box);
              }}
              onFocus={()=>{
                setBox(true)
                // console.log("box =", box);

              }}
                placeholder="Search" className="hover"></input>

                {box ? <SearchBoxSujjestion searchSujjestions ={searchResults} searchvalue={searchValue} setSearchValue={setSearchValue} /> : null}

            

            <i onClick={()=>{
                setSearchValue("")
            }}  style={{display: searchValue.length >= 1 ? "block" :"none" }}  className="fa-solid fa-xmark"></i>

            </div>
            

            <div className="">
                <i className="fa-solid fa-magnifying-glass" id="search-icon-two"></i>
            </div>

            </div>


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