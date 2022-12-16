import React from 'react'
import "./intro.css"

function Intro() {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-12'>
      <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold'>Utsav <span style={{color:'#6ae1e6'}}>Sharma</span></h1>
      <p className='text-base md:text-xl mb-3 font-medium'> Computer Science Engineering  <span style={{color:'#6ae1e6'}}>&&</span> Commerce Student</p>
      <p className='text-sm max-w-xl mb-6 font-medium'> Computer Science student looking for internship <span style={{color:'#6ae1e6'}}>||</span> job opportunities in order to grow my skills as a Software Engineer. Currently studying at <span style={{color:'#6ae1e6'}}>The University of New South Wales</span>. I have been coding and developing small websites and applications since I was a child, and now I am aiming to take it to the next level by incorporating <span style={{color:'#6ae1e6'}}>DevOps</span> concepts and <span style={{color:'#6ae1e6'}}>Software Development</span> skillsets into my workflow.</p>
      <a href='/assets/resume.pdf' className='text-sm font-medium py-2 px-4 rounded bg-stone-500 text-white hover:bg-stone-600' download>Download Resume</a>
    </div>
  )
}

export default Intro
