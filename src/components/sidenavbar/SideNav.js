import "./SideNav.css";
import shortsIcon from "../../assets/images/youtube1.png";

function SideNavBar(){
    return(
        <>

        <div className="section-left-nav">

                <div className="section-left-nav-list-item">
                    <i className="fa-solid fa-house"></i>
                    <h6>Home</h6>
                </div>

                <div className="section-left-nav-list-item" id="section-left-nav-list-item-two">
                    <img src={shortsIcon} width="40px"></img>
                    <h6>Shorts</h6>
                </div>

                <div className="section-left-nav-list-item">
                    <i className="fa-solid fa-play"></i>
                    <h6>Subscriptions</h6>
                </div>

                <div className="section-left-nav-list-item">
                    <i style={{fontSize: "26px"}} className="fa-regular fa-circle-user"></i>
                    <h6>You</h6>
                </div>

                </div>

        
        </>
    )
}

export default SideNavBar;