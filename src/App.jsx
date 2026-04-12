import React from 'react'
import Navbar from './components/Navbar'

import SplashScreen from "./SplashScreen"
import { useState } from "react";
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {

    const [splashDone, setSplashDone] = useState(false);
  return (
    

    <>
      {!splashDone && <SplashScreen onFinish={() => setSplashDone(true)} />}
    <Navbar/>

    <Hero/>
    <Footer/>
    
    
    </>
  )
}

export default App