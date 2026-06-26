import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton'



function SkeletonBox(){

    const SkeletonaArr = Array.from({length:15})
    return(
        <>



        <div style={{display: "flex" ,gap: "15px", flexWrap: "Wrap" ,marginLeft: "7px" ,marginTop: "3px"}} >
            {SkeletonaArr.map((skeleton,indx)=>{
                return(
                    <div className="">
                        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton width={450} height={260} borderRadius={15} />
            <div style={{display: "flex", gap: "12px" ,marginTop: "6px"}}>
                    <Skeleton width={40} height={40} style={{borderRadius: "50%"}}  />
                <div style={{display: "flex", flexDirection: "column" ,gap: "6px"}}>
                <Skeleton width={380} height={26} borderRadius={3} />
                <Skeleton width={255} height={24} borderRadius={3} />
                </div>
            </div>
            </SkeletonTheme>
        </div>

                )
            })
            }
            
        
        </div>


        </>
    )
}

export default SkeletonBox;