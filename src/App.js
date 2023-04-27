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
import UserAccount from "./pages/UserAccount";

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
        <Route exact path='/contact-us' element={<ContactUs />} />
        <Route exact path='/search' element={<Search />} />
        <Route exact path='/location-detail' element={<LocationDetail />} />
        <Route exact path='/user-account' element={<UserAccount />} />
      </Routes>
    </Suspense>
  );
}

export default App;
