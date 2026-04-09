import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SplashScreen from "./SplashScreen"
import { useState } from "react";
import Hero from './components/Hero';

function App() {

    const [splashDone, setSplashDone] = useState(false);
  return (
    

    <>
      {!splashDone && <SplashScreen onFinish={() => setSplashDone(true)} />}
    <Navbar/>
    <Home/>
    <Hero/>
    
    
    </>
  )
}

export default App