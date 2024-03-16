import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/common/Navbar"
import Home from "./Components/common/Home"
import Signup from "./Components/common/Signup"
import OurTeam from "./Components/common/OurTeam"
import Login from "./Components/common/Login"
import Logout from "./Components/common/Logout"
import About from "./Components/Farmers/About"
import Buyer from "./Components/Farmers/Buyer"
import Transporter from "./Components/Farmers/Transporter"
import NotificationFarmer from "./Components/Farmers/Notification-farmer"
import Requests from "./Components/Farmers/MyRequest"
import Others from "./Components/Farmers/Others"
import WeatherReport from "./Components/Farmers/WeatherReport"
import NavbarBuyer from './Components/common/NavbarBuyer'
import NavbarTransporter from './Components/common/NavbarTransporter'
import Farmer from "./Components/Buyer/Farmer"
import NotificationBuyer from "./Components/Buyer/Notification-buyer"
import Setinfo from "./Components/Buyer/Setinfo"
import NotificationTransporter from "./Components/Transporter/Notification-transporter"
import ColdStoragep from './Components/Farmers/ColdStoragep';
import Coldstorage from './Components/Farmers/Coldstorage-location';
import Coldstoragesignup from './Components/common/Coldstoragesignup';

function App() {
  const [userData, setUserData] = useState({});
  const [runned, setRunned] = useState(false)
  const callAboutPage = async () => {
    if (runned === false) {
      try {
        const res = await fetch("/getFarmerdata", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include"
        })

        const data = await res.json();
        console.log(data)
        setUserData(data)

        if (!res.status === 200) {
          const error = new Error(res.error)
          throw error
        }
      } catch (error) {
        console.log(error)
      }
      setRunned(true)
    } else {

    }
  }

  useEffect(() => {
    callAboutPage();
  });
  const RenderedNavbar = () => {
    if (userData.role === "Farmer") {
      return (
        <Navbar />
      )
    } else if (userData.role === "Buyer") {
      return (
        <NavbarBuyer />
      )
    } else if (userData.role === "Transporter") {
      return (
        <NavbarTransporter />
      )
    } else {
      return (
        <Navbar />
      )
    }
  }
  return (
    <Router>
      <RenderedNavbar />
      <Routes>
        {/* Common Routes need by all client */}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/team' element={<OurTeam />} />
        <Route path='/cstorage-signup' element={<Coldstoragesignup />} />
        <Route path='/logout' element={<Logout />} />

        {/* Farmer Routes */}
        <Route path='/about' element={<About />} />
        <Route path='/buyer' element={<Buyer />} />
        <Route path='/transporter' element={<Transporter />} />
        <Route path='/notification-farmer' element={<NotificationFarmer />} />
        <Route path='/requests' element={<Requests />} />
        <Route path='/services' element={<Others />} />
        <Route path='/weather-details' element={<WeatherReport />} />
        <Route path='/buypstorage' element={<ColdStoragep />} />
        <Route path='/locationstorage' element={<Coldstorage />} />
        {/* Buyers Routes*/}
        <Route path='/farmer' element={<Farmer />} />
        <Route path='/transporter' element={<Transporter />} />
        <Route path='/notification-buyer' element={<NotificationBuyer />} />
        <Route path='/set-info' element={<Setinfo />} />

        {/* Transporter Routes */}
        <Route path='/requests-transporter' element={<NotificationTransporter />} />
      </Routes>
    </Router>
  );
}

export default App;
