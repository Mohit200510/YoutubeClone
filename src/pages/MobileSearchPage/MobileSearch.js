import React from 'react'
import SearchModule from '../../components/SearchModule/SearchModule'
import "./MobileSearch.css"
import { useNavigate,navigate } from 'react-router-dom'

function MobileSearch() {

    const navigate =useNavigate()

    function goBack(){
        navigate(-1)
    }

  return (
    <div className='mob-search'>
        <div className='Mob-search-header'>
            <div onClick={goBack} className='header-back-btn'>
                <i class="fa-solid fa-arrow-left"></i>
            </div>

            <div>

                <SearchModule></SearchModule>

            </div>

            <div className="mobile-mic">
               <i  className="fa-solid fa-microphone"></i>
            </div>

        </div>

    </div>
  )
}

export default MobileSearch