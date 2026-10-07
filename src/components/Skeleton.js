import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton'
import styles from "./Skeleton.module.css"



function SkeletonBox(){

    const SkeletonaArr = Array.from({length:15})
    return(
        <>



    <div className={styles.homeSkeleton}  >
            {SkeletonaArr.map((skeleton,indx)=>{
                return(
        <div className={styles.sketonBox}>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton className={styles.skeltonVideo}  height={260} borderRadius={15} />
            <div className={styles.sketonBoxBottom}>
                <Skeleton width={40} height={40} style={{borderRadius: "50%"}}  />
                <div className={styles.textSkeletonDiv}>
                    <Skeleton className={styles.headingTextSketon}  height={26} borderRadius={3} />
                    <Skeleton className={styles.decTextSkeleton}  height={24} borderRadius={3} />
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