import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";

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
      </Routes>
    </Suspense>
  );
}

export default App;
