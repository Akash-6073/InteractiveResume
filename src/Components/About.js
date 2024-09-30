import React, { useState } from 'react';
import "../Style/style.css"
import "../Style/utils.css"
import "../Style/responsive.css"

// import resume from "../Images/RESUME.pdf"

export default function About(props) {

  const resume = process.env.REACT_APP_RESUME

  return (
    <>
      
    <div className="info mw3" name="about">
      <div className="infoLeft " >
       <h1 className='heading'>👨‍🎓About Me</h1>
       <div >
       <p> Hello I am <span className='splColor'>Akash Mahendrakar</span>, currently a final year student in <span className='splColor'>Vellore Institute of Technology</span>, <span className='splColor'> Chennai</span>. I have been interested in technology and computers. Hence, I am currently pursuing this interest as a Computer Science Student.</p>
       <p style={{marginTop:"3%"}}>
      I have a strong knowledge of <span className='splColor'>DSA</span>, <span className='splColor'>C++ </span> and am familiar with <span className='splColor'>Full Stack Web Development</span>
       </p>
       </div>
      </div>
      <div className="infoRight">
        
        <a href={resume} download ><button><i className="fa-solid fa-cloud-arrow-down"></i> Download CV</button></a>
      </div>
    </div>
    <div className="hr mw3">
      <hr />
    </div>
    
    
    </>
  )
}
