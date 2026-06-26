import './PlayerVideo.css';
import thumb from './yt-thumbnail-4.avif'
import logo from './youtube6.jpg';
import { data, useParams } from 'react-router-dom';
import { useState , useEffect } from 'react';
import PlayerVideoSketon from './PlayerVideo-skelton';



function PlayerVideoModule(){


    const { id } = useParams();
    console.log("parameter",id)

    const [video, setVideo] = useState(null);
    

    useEffect(() =>{
        
         fetch(`https://6a2e4176c9776ca6c0c47384.mockapi.io/youtube/videos/${id}`)
        .then((response) => response.json())
        .then((data) => setVideo(data))
        
    },[id])
    // console.log("data founded",video)

    
    
  
   if (!video) return <PlayerVideoSketon/>;

    return(
        <>

       

        <div className="video-player-left">

              

                    <div className="video-player-video">
                        <video key={video.videoCollection} controls autoPlay loop  poster={video.thumbnail}>
                        <source src={video.videoUrl} type="video/mp4"></source>
                        </video>
                    </div>

                    <h2 className="video-player-title">{video.title}</h2>

                    <div className="video-player-options">
                        <div className="video-player-options-left">
                            <img id="vd-chanel-icon" src={video.channelLogo}></img>
                            <div className="vd-ch-name-subs">
                                <h3>{video.channelName} <i class="fa-solid fa-circle-check"></i></h3>
                                
                                <p>1.38k subscribers</p>
                            </div>
                            <button type="button">Subscribe</button>
                        </div>

                        <div className="video-player-options-right">

                            
                                <div className="vd-like-dislike-box">
                                    <div className="vd-like-dislike-box-likes">
                                        <i className="fa-regular fa-thumbs-up"></i>
                                        {/* <i style={{color: "#fff"}} class="fa-solid fa-thumbs-up"></i> */}
                                        
                                         <span>7.2k</span>
                                    </div>
                                <i className="fa-regular fa-thumbs-down"></i>
                                </div>

                                <div className="vd-share-box">
                                    <i className="fa-solid fa-share"></i>
                                    <span>Share</span>
                                </div>

                                <div class="vd-ask-box">
                                    <i className="fa-regular fa-star"></i>
                                     <span>Ask</span>
                                </div>

                                <div class="vd-save-box">
                                    <i className="fa-regular fa-bookmark"></i>
                                     <span>Save</span>

                                </div>

                                <div class="vd-more-box">
                                    <i className="fa-solid fa-ellipsis"></i>
                                </div>

                           
                        </div>
                    </div>

               

            </div>
        </>
    )
}

export default PlayerVideoModule;