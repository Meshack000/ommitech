import React from 'react'
import Navbar from './components/Navbar'

import SplashScreen from "./SplashScreen"
import { useState } from "react";
import Hero from './components/Hero';
import Footer from './components/Footer';
import RecentFeatures from './components/Feature';

function App() {

    const [splashDone, setSplashDone] = useState(false);
  return (
    

    <>
      {!splashDone && <SplashScreen onFinish={() => setSplashDone(true)} />}
    <Navbar/>

    <Hero/>
     <RecentFeatures />
    <Footer/>
    
    
    
    </>
  )
}

export default App