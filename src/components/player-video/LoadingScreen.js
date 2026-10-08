import React from 'react'
import { ClipLoader } from "react-spinners";
import "./PlayerVideo.js";


function LoadingScreen() {
  return (
    <div className="loadingScreen">
        <ClipLoader color="#fff" size={56}/>
    
    </div>
  )
}

export default LoadingScreen