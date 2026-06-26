import VideoComponent from "./videocomponent/Video";

function HomeVideosShowcase(){
    return(
        
        <div className="home-page-videos" style={{position: "relative", top: "128px" ,marginLeft: "95px" ,display: "flex" ,flexWrap: "wrap", rowGap: "35px"}}>
            <VideoComponent />
           
        </div>
        
    )
}

export default HomeVideosShowcase;