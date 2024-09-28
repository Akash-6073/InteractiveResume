import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../Style/style.css"
import "../Style/utils.css"
import "../Style/responsive.css"

import resume from "../Images/RESUME.pdf"

export default function About(props) {


  return (
    <>
      
    <div className="info mw3" name="about">
      <div className="infoLeft " >
       <h1 className='heading'>👨‍🎓About Me</h1>
       <div >
       <p> Hello I am <span className='splColor'>Akash Mahendrakar</span> , currently a 3rd year student in <span className='splColor'>Vellore Institute of Technology</span> , <span className='splColor'> Chennai</span> .I have been interested in technology and computers.Hence , I am currently pursuing this interest as a Computer Science Student.</p>
       <p style={{marginTop:"3%"}}>
        I am good at <span className='splColor'>Frontend Development</span> , <span className='splColor'>DSA</span> and Experienced in <span className='splColor'>Web Development</span>
       </p>
       </div>
      </div>
      <div className="infoRight">
        
        <a href={resume} download ><button>Download CV</button></a>
      </div>
    </div>
    <div className="hr mw3">
      <hr />
    </div>
    
    
    </>
  )
}
