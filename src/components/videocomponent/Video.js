import "./Video.css";
import video1 from "../../assets/videos/youtube3.mp4";
import { useContext, useEffect, useState } from "react";
import SkeletonBox from "../Skeleton";
import { data, Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { apiContext } from "../../Context/ApiContext";



function VideoComponent(){

    const {category,setCategory} = useContext(apiContext)


    // const {loading,apiData} =useContext(apiContext)

    const navigate = useNavigate()

    const [filterData,setFilterData ] = useState([]);
    const[loading,setLoading]=useState(true);
        
    
        useEffect(() =>{
            setLoading(true)
             
             fetch(`https://6a2e4176c9776ca6c0c47384.mockapi.io/youtube/videos/?category=${category}`)
            .then((response) => response.json())
            .then((data) =>
                {
                    setFilterData(data);
                    setTimeout(() => {
                    setLoading(false);
                        
                    }, 1200);
                 })
            
        },[category])

 
        if(loading) return <SkeletonBox/>;  
        
        
    

    const GoToPlayer =(e) =>{
        const clickedId= e.currentTarget.dataset.id
        console.log("Clicked On ProductId",clickedId)
        navigate(`/watch/${clickedId}`)
    }


    // function Finding(e){
    //     console.log("clicked product is",e.currentTarget.dataset.id)
    //      const productFound = apiData.find((clicked)  => 
    //          Number(clicked.videoCollection )== Number(e.currentTarget.dataset.id) )
    //     console.log(productFound)
    //     return productFound
        
    // }


    // if(loading){
    //     return  <SkeletonBox/>
    // }
    


    return(
        filterData.map((video,index)=>{
           return(

          
            <div  onClick={(e)=>{
                  GoToPlayer(e)
                }} key={index} data-id={video.videoCollection} className="video-box">
                

                

                <div   className="box-video">
                    <video   loop muted width="100%" height="auto" poster={video.thumbnail}   onMouseEnter={(e) => console.log(e.target) }     >
                        <source src={video.videoUrl} type="video/mp4"></source>
                    </video>
                </div>

                <div className="video-desc">

                
                    <img src={video.channelLogo}></img>
                

                    <div className="video-details">

                        <div className="normal-video-details-heading">
                            <h2>{video.title}</h2>
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                        </div>

                        <div className="normal-video-details-subheading">
                            <span className="normal-video-details-subheading-span-one">{video.channelName} <i className="fa-solid fa-circle-check"></i></span>
                        </div>
                        
                        <div className="normal-video-details-info">{video.views} views • {video.createdDate}</div>
                    </div>
                    </div>

 

                </div>

               
           )
        })

        


       
    )
}

export default VideoComponent;