import React from 'react'
import { ClipLoader } from "react-spinners";
import styled from 'styled-components';
import "./PlayerVideo.js";


function LoadingScreen() {
  return (
    <div className="loadingScreen">
        <ClipLoader color="#fff" size={70}/>
    
    </div>
  )
}

export default LoadingScreen