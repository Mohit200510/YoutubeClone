import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";



function SearchResults({searchSujjestions,searchvalue,setSearchValue}){

  const navigate = useNavigate()

  function GoToPlayer(e){
    const clickedId= e.currentTarget.dataset.id
    // console.log("searc restks clicked",clickedId)
    const inputValue =e.currentTarget.textContent;
    setSearchValue(inputValue)
    navigate(`/watch/${clickedId}`)  
  }

  


  
    return(
        <>
        <div className="Search-Reslts-box" id="Search-Reslts-box" style={{display: searchSujjestions.length === 0 ? "none" :"flex"}}>

          <div className="Search-Reslts-items" id="Search-Reslts-items">

            {searchSujjestions.map((sujjestion,indx)=>{
              return(
                //  <h1>{searchSujjestion.length == 0 ? "Increase the count":count}</h1>

              <div onClick={(e)=>{
                GoToPlayer(e)
              }}  className="Search-Reslts-item" id="Search-Reslts-item" data-id={sujjestion.videoCollection}>
                <i class="fa-brands fa-sistrix"></i>
                <span>{sujjestion.title}</span>
                <img src={sujjestion.thumbnail}></img>
              </div>

              )
            })
              } 
                    
          </div>

        </div>


        </>
    )
}


export default SearchResults;