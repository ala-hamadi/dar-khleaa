import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

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
      </Routes>
    </Suspense>
  );
}

export default App;
