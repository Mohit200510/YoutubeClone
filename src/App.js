import './App.css';
import { Routes,Route } from 'react-router-dom';
import { useState,useEffect, useContext } from 'react';
import HomePage from './pages/home/Home';
import Header from './components/header/Header';
import SideNavBar from './components/sidenavbar/SideNav';
import TopNavBar from './components/topnavbar/TopNav';
import HomeVideosShowcase from './components/HomeVidoes';
import VideoPlayerPageMain from './pages/videoPlayerPage/VideoPlayerPage';
import LoginBox from './components/LoginBox/LoginBox';
import SignUpBox from './components/SignupBox/SignUpBox';
import { useLocation } from 'react-router-dom';
import { apiContext } from './Context/ApiContext';
import { Navigate,useNavigate } from 'react-router-dom';


function App() {

  const location =useLocation()
  const[multimedia,setmultiemdia] = useState([]);
  const[loading,setLoading]= useState(true);
  const navigate =useNavigate()

  const {signedUser} = useContext(apiContext)
//   const[category,setCategory]= useState();
//   const[categoryType,setCategoryType]= useState("category=");

  const fetchApi = async() =>{
      
      try{
          const response = await fetch(`https://6a2e4176c9776ca6c0c47384.mockapi.io/youtube/videos`);
          const data = await response.json();
          setmultiemdia(data)
      }
      catch(err){
          console.log(err)
      }
  
      finally{
          // console.log(" data fetched")
          setLoading(false)
      }
      
      }
  
      useEffect(()=>{
          setTimeout(()=>{
          fetchApi()
  
          },1000)
       
      },[])

      console.log("data in app.js",multimedia)






  return (
    <div className="App">

        {/* <ApiProvider> */}


    
         {/* {location.pathname !== "/login" && <Header apiData= {multimedia} />} */}
         {!["/login", "/signup"].includes(location.pathname) && (
         <Header />
         )}

         

        

      
        <Routes>
            <Route path='/' element= {<HomePage />}/>
            <Route path='/watch/:id' element= {<VideoPlayerPageMain />}/>
            <Route path='/login' element= { signedUser? <Navigate to="/"/> : <LoginBox/>}/>
            <Route path='/signup' element= {<SignUpBox/>}/>

        </Routes>

      
      
      
      {/* </ApiProvider> */}
      
    </div>
  );
}

export default App;
