import React from 'react';
import Intro from './components/intro';
import Footer from './components/footer';
import Portfolio from './components/portfolio';
import Timeline from './components/timeline';



function App() {
  return (
    <div className="bg-stone-900 text-stone-300">
      <Intro/>
      <Portfolio/>
      <Timeline/>
      <Footer/>
    </div>
  )
}

export default App
