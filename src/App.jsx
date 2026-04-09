import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SplashScreen from "./SplashScreen"
import { useState } from "react";

function App() {

    const [splashDone, setSplashDone] = useState(false);
  return (
    

    <>
      {!splashDone && <SplashScreen onFinish={() => setSplashDone(true)} />}
    <Navbar/>
    <Home/>
    
    
    </>
  )
}

export default App