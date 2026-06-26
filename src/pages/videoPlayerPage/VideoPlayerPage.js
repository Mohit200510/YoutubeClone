import './VideoPlayerPage.css';
import PlayerVideoModule from "../../components/player-video/PlayerVideo";
import PlayerPageVideosMedia from "../../components/playerPageVideos/PlayerPageVideos";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function VideoPlayerPageMain(){


    const {pathname} =useLocation();

    useEffect(()=>{
        window.scrollTo(0,0)
    },[pathname])


    return(
        <>

        <div class="video-player-main">
            <div class="video-player-container">
                <div class="video-player-whole">

        <PlayerVideoModule/>
        <PlayerPageVideosMedia/>

        </div>
          </div>
            </div>
        </>
    )
}

export default VideoPlayerPageMain;