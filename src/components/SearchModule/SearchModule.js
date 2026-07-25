import React, { useContext, useState } from 'react'
import "../header/Header.css"

import SearchResults from './SearchResults';
import { apiContext } from '../../Context/ApiContext';

function SearchModule() {

    const {apiData} =useContext(apiContext)

    const[searchValue,setSearchValue]=useState("");
    const[searchResults,SetSearchResults]=useState([]);
    const[box,setBox]=useState(false);

    function storeValue(e){
        // console.log("taget value",e.target.value);
        const value= (e.target.value.toLocaleLowerCase())
        setSearchValue(value)
        // console.log("orignal value",searchValue)
        SetSearchResults(apiData.filter(video => video.title.toLocaleLowerCase().includes(value)));
        // console.log("filter data is here",searchResults)
        
    }


  return (
    <>

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
              }}
              onFocus={()=>{
                setBox(true)
                // console.log("box =", box);

              }}
                placeholder="Search" className="hover"></input>

                {box ? <SearchResults searchSujjestions ={searchResults} searchvalue={searchValue} setSearchValue={setSearchValue} /> : null}

            

            <i onClick={()=>{
                setSearchValue("")
            }}  style={{display: searchValue.length >= 1 ? "block" :"none" }}  className="fa-solid fa-xmark"></i>

            </div>
            

            <div className="search-icon-two">
                <i className="fa-solid fa-magnifying-glass" id="search-icon-two"></i>
            </div>

            </div>
    </>
  )
}

export default SearchModule