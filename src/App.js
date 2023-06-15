import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import AddLocation from "./pages/AddLocation";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import LocationDetail from "./pages/LocationDetail";
import Search from "./pages/Search";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

import About from './pages/About';
import UserAccount from "./pages/UserAccount";
import axios from "axios";
import UpdateLocation from "./pages/UpdateLocation";

axios.defaults.baseURL = "http://127.0.0.1:8000";
function App() {
  return (
    <Suspense
      fallback={
        <div className='preloader d-none' id='preloader'>
          <div className='preloader-inner'>
            <div className='spinner'>
              <div className='dot1' />
              <div className='dot2' />
            </div>
          </div>
        </div>
      }
    >
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/signin' element={<Signin />} />
        <Route exact path='/add-location' element={<AddLocation />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact-us' element={<ContactUs />} />
        <Route exact path='/search' element={<Search />} />
        <Route exact path='/location-detail/:id' element={<LocationDetail />} />
        <Route exact path='/user-account' element={<UserAccount />} />
        <Route exact path='/update-location/:id' element={<UpdateLocation />} />
      </Routes>
    </Suspense>
  );
}

export default App;
