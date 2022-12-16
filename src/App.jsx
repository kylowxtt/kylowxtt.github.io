import React, { useState } from 'react';
import Intro from './components/intro';
import Footer from './components/footer';
import Portfolio from './components/portfolio';
import Timeline from './components/timeline';
import "./App.css"

function App() {
  const [showApp, setShowApp] = useState(false);

  return (
    <div className="bg-stone-900 text-stone-300">
      { !showApp && 
        <div
          className="black-screen"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            className="open-app-button"
            style={{
              color: "white",
              padding: "10px 20px",
              border: "2px solid white",
              borderRadius: "4px",
              fontSize: "16px",
              cursor: "pointer",
            }}
            onClick={() => setShowApp(true)}
          >
            <span style={{color:'#6ae1e6'}}>  <h1 class='cumquat'>./kylowxtt</h1></span>
          </button>
        </div>
      }
      { showApp &&
        <div
          className="app-container"
          style={{
            animation: "fade-in 0.5s ease-in-out",
          }}
        >
          <Intro/>
          <Portfolio/>
          <Timeline/>
          <Footer/>
        </div>
      }
    </div>
  )
}

export default App
