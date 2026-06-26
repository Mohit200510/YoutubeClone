import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'



function PlayerVideoSketon(){
    return(
        
        <div style={{display: "flex" ,flexDirection: "column", gap:"15px"}}>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton width={983} height={520} borderRadius={15} />
            
            <div style={{display:"flex" ,alignItems:"center" ,gap:"15px"}}>
                <Skeleton width={50} height={50} style={{borderRadius: "50%"}}  />
                <Skeleton width={830} height={50} borderRadius={8} />
            </div>
            </SkeletonTheme>
        </div>
        
    )
}

export default PlayerVideoSketon;