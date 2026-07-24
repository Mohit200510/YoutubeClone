import './PlayerVideo.css';
import thumb from './yt-thumbnail-4.avif'
import logo from './youtube6.jpg';
import { data, useParams } from 'react-router-dom';
import { useState , useEffect } from 'react';
import PlayerVideoSketon from './PlayerVideo-skelton';
import LikeIcon from './LikeIcon';
import DislikeIcon from './DislikeIcon';



function PlayerVideoModule(){

    const[video, setVideo] = useState(null);

    const[liked,setliked]=useState(false);
    const[disliked,setDisliked]=useState(false)

    const[subscribed,setSubscribed]=useState(false)


    
    
    

    const { id } = useParams();
    // console.log("parameter",id)

    

    useEffect(() =>{
        
         fetch(`https://6a2e4176c9776ca6c0c47384.mockapi.io/youtube/videos/${id}`)
        .then((response) => response.json())
        .then((data) => setVideo(data))
        
    },[id])

    const handleSubscription = ()=>{
        if(subscribed){
            setSubscribed(false)
            console.log("worked unscsribe");
            
        }
        else{
            setSubscribed(true)
            console.log("worked subscribed");

        }
    
    }
    

    
    
  
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
                        <h3>{video.channelName} <i className="fa-solid fa-circle-check"></i></h3>
                        <p>1.38k subscribers</p>
                    </div>
                    <button className={subscribed? "subscribed" : ""} onClick={handleSubscription} type="button">
                    <i id={subscribed? "bell" : ""}
                    style={{display: subscribed? "inline" : "none"}}
                    className="fa-regular fa-bell "></i>
                    {subscribed? "": "Subscribe"}</button>
                    </div>

                <div className="video-player-options-right">

                            
                    <div className="vd-like-dislike-box" >
                        <div className="vd-like-dislike-box-likes">

                        <LikeIcon liked ={liked} setliked={setliked} setDisliked={setDisliked} ></LikeIcon>
                                        
                                        
                        <span>7.2k</span>
                        </div>

                        <DislikeIcon disliked={disliked} setDisliked={setDisliked} setliked={setliked}></DislikeIcon>
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