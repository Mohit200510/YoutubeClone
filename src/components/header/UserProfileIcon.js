import React, { useContext } from 'react'
import styled from 'styled-components'
import { apiContext } from '../../Context/ApiContext';

// const  div =styled.div`
// backgroud= red;
// `

function UserProfileIcon() {

  const {signedUser} = useContext(apiContext)
  return (
    <div  style={{ display: "flex", alignItems: "center" ,justifyContent: "center" ,borderRadius: "50%"  ,height:"34px", width: "34px"  ,background: "#00579C"}}>
        <span style={{fontSize: "18px"}}>{signedUser?.name?.charAt(0).toUpperCase()}</span>
    </div>
  )
}

export default UserProfileIcon;
