import React, { useState } from 'react'

function DislikeIcon({disliked,setDisliked,setliked}) {

  // const[disliked,setDisliked]=useState(false)



  const handledislike = ()=>{
    if(disliked){
      setDisliked(false)
    }
    else{
      setDisliked(true)
      setliked(false)
    }
  }
  


  return (
    <svg onClick={handledislike}
      className={disliked? "disliked" : ""}


     xmlns="http://www.w3.org/2000/svg"
     width="26"
     height="26"
     viewBox="0 0 24 24"
     fill={disliked? "#fff" : "none" }
     stroke="#fff"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round">

  <path d="M17 14V4"/>
  <path d="M17 4h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"/>
  <path d="M15 4H7.8a2 2 0 0 0-2 1.6l-1.2 6A2 2 0 0 0 6.6 14H11v4.2A1.8 1.8 0 0 0 12.8 20L15 14V4z"/>

</svg>
  )
}

export default DislikeIcon