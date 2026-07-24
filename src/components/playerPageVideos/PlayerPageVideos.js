import './PlayerPageVideos.css';
import thumb from './yt-thumbnail-4.avif'
import PlayerpageVideosTopp from './PlayerPageVideosTop';
import { useNavigate, Navigate } from 'react-router-dom';
import { apiContext } from '../../Context/ApiContext';
import { useContext, useState } from 'react';



function PlayerPageVideosMedia(){

    const{apiData} =useContext(apiContext)
    const[data,setData]=useState("none")
    

    const navigate = useNavigate();
    

    function GoToPlayer(e){
        const targetid = e.currentTarget.dataset.id
        navigate(`/watch/${targetid}`)
    }

    

    
    return(
        <>
        

        <div className="video-player-right">
                <div className="">

                    {/* <PlayerpageVideosTopp/> */}

                    <div className="vd-right-videos">



                        {apiData.map((video,index)=>{
                            return(

                                <div onClick={(e)=>{
                                    GoToPlayer(e);
                                }} key={index} className="vd-right-video" data-id={video.videoCollection}>

                                <div className="vd-right-picture">

                                    <video poster={video.thumbnail} >
                                    <source src="multimedia/videos/youtube3.mp4" type="video/mp4"></source>
                                    </video>

                                </div>

                                <div className="vd-right-content">

                                    <h2>{video.title}</h2>
                                    <div className='vd-right-repson-wrap-div'>
                                    <h3>{video.channelName}</h3>
                                        <span className='vd-right-dot-mobile'> • </span>

                                    <div className="vd-right-detail">

                                        <h4> {video.views} views  </h4>
                                        <span className='vd-right-dot'> • </span>
                                        <h5 className='vd-right-creation-date'>  {video.createdDate} </h5>
                                    </div>
                                    </div>


                                </div>

                            </div>
                            )
                        })}
                       



                            

                           
                            </div>


                            

                        </div>

                    </div>
        </>
    )
}

export default PlayerPageVideosMedia;