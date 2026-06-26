import React, { useContext, useEffect } from 'react'
import "./ProfileBox.css";
import UserProfileIcon from './UserProfileIcon';
import { apiContext } from '../../Context/ApiContext';
import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';

// const  div =styled.div`
// width= 50px;
// height= 50px;

// `

function ProfileBox({display}) {

    const {signedUser}=useContext(apiContext);
    const navigate= useNavigate()



  return (

    <div  className='profile-box' style={{display:signedUser?display:"none"}}>

        <div className='profile-box-header'>

            <div className='user-profile-detail'>

                <span> {signedUser?<UserProfileIcon/>:""}  </span>

               <div>
                <h2>{signedUser?signedUser.name:""}</h2>
                <h3>{signedUser?signedUser.email:""}</h3>
               </div>

            </div>

        </div>

            <div className='user-profile-body'>

                <div className='user-profile-body-opts'>

                    <div className='user-profile-body-opt'>
                        <i class="fa-brands fa-google"></i>
                        <h5>Google Account</h5>
                    </div>

                    <div className='user-profile-body-opt'>
                        <i class="fa-regular fa-circle-question"></i>
                        <h5>Help</h5>
                    </div>

                    <div className='user-profile-body-opt'>
                       <i class="fa-regular fa-message"></i>
                        <h5>Send feedback</h5>
                    </div>

                </div>

            </div>

            <div className='user-profile-footer'>

                <div onClick={()=>{
                
                    localStorage.removeItem("LoggedUser")
                    navigate("/login")

                }} className='user-profile-body-opt'>
                       <i class="fa-solid fa-arrow-right-from-bracket"></i>
                        <h5>Sign Out</h5>
                    </div>

            </div>

            
            

            

        
       
    </div>

  )
}


export default ProfileBox;