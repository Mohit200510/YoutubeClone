import { useContext, useState } from "react";
import "./TopNav.css"
import { apiContext } from "../../Context/ApiContext";
import { NavLink } from "react-router-dom";

function TopNavBar(){

    const {category,setCategory} = useContext(apiContext);
    const[navItem,setNavItem]= useState(0)
    



    // const categoryType ="";
    function CategoryClicked(e){
        e.preventDefault();
        const CategoryType = e.target.closest("li")?.dataset.category
        setCategory(CategoryType)
        const navID = e.target.closest("li")?.dataset.item ;
        setNavItem(navID);
        
        
        // console.log("category is",category);
        
    }
        // console.log("category is",category);







    return(
        <>
        <div className="youtube-top-categories-menu">
                    <ul onClick={CategoryClicked}>

                        <li id={navItem == 0?"nav-active":""}  data-category="" data-item="0"><a href="">All</a></li>
                        <li id={navItem == 1?"nav-active":""} data-category="Music" data-item= "1"><a href="">Music</a></li>
                        <li id={navItem == 2?"nav-active":""} data-category="Movie trailers" data-item= "2"><a href="">Entertainment</a></li>
                        <li id={navItem == 3?"nav-active":""} data-category="Movie trailers" data-item= "3"><a href="">Movie Trailers</a></li>
                        
                        <li id={navItem == 4?"nav-active":""} data-category="Bhajan" data-item= "4"><a href="">Religious</a></li>
                        <li id={navItem == 5?"nav-active":""} data-category="Hanuman Chalisa" data-item= "5"><a href="">Hanuman Chalisa</a></li>
                        <li id={navItem == 6?"nav-active":""} data-category="Music" data-item= "6"><a href="">Star Studios</a></li>

                        <li id={navItem == 7?"nav-active":""} data-category="Bhajan" data-item= "7"><a href="">Spiritual</a></li>
                        <li id={navItem == 8?"nav-active":""} data-category="Music" data-item= "8"><a href="">Songs</a></li>
                        <li id={navItem == 9?"nav-active":""} data-category="Movie trailers" data-item= "9"><a href="">Masala Films</a></li>
                        <li id={navItem == 10?"nav-active":""} data-category="Music" data-item= "10"><a href="">Indian pop music</a></li>
                        <li id={navItem == 11?"nav-active":""} data-category="Bhajan" data-item= "11"><a href="">Spiritual</a></li>
                        <li id={navItem == 12?"nav-active":""} data-category="Music" data-item= "12"><a href="">Star Studios</a></li>
                        <li id={navItem == 13?"nav-active":""} data-category="Music" data-item= "13"><a href="">New to you</a></li>
                        <li id={navItem == 14?"nav-active":""} data-category="Movie trailers" data-item= "14"><a href="">Thrillers</a></li>
                        <li id={navItem == 15?"nav-active":""} data-category="Music" data-item= "15"><a href="">Mixes</a></li>
                        {/* <i style={{ color: "#f1f1f1" , marginLeft: "6px"}}  className="fa-solid fa-angle-right"></i> */}
                        
                    </ul>

        </div>
        </>
    )
}

export default TopNavBar;