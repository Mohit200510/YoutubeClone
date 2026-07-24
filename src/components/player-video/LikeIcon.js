import React from 'react'
import { useState } from 'react';
import "./PlayerVideo.css"

function LikeIcon({liked,setliked,setDisliked}) {

  // const[color,setColor]=useState("red");
    // const[liked,setliked]=useState(false);

    const handlelike = ()=>{
        if(liked){
            setliked(false)
            console.log("works false");
            
        }
        else{
            setliked(true)
            setDisliked(false)
            console.log("works true");
            
        }
    }

  
  return (
    
    <svg  onClick={handlelike}
          className={`${liked ? "liked" : ""}`} 
                                            
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill={liked? "#fff" : "none"}
      stroke="#fff"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round">

      <path d="M7 10v10"/>
      <path d="M7 20H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2"/>
      <path d="M9 20h7.2a2 2 0 0 0 2-1.6l1.2-6A2 2 0 0 0 17.4 10H13V5.8A1.8 1.8 0 0 0 11.2 4L9 10v10z"/>

    </svg>
    
  )
}

export default LikeIcon;