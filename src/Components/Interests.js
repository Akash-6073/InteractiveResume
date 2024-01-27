import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Interests() {
    const observe = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting)
        {
          entry.target.classList.add('transShow');
        }
      })
    })
    const hide=document.querySelectorAll(".transHide");
    hide.forEach((el)=>observe.observe(el));


  return (
    <>
    <div className="hr mw3" name="interests">
      <hr />
    </div>
    <div className="mw3 interests">
        <div className="interestsLeft">
        <h1 className='heading'><i className="fa-solid fa-laptop"></i>&nbsp;Interests</h1>
        </div>
        <div className="interestsRight ">
            <div className={ " transHide designs"}>
            <span><i className="fa-solid fa-code"></i></span>
                <h3>Web Design</h3>
                <p>Thriving on the intersection of creativity and technology.Skilled web developer proficient in HTML, CSS, and JS. Building engaging and responsive websites with a focus on functionality and user experience.</p>
            </div>
            <div className={ " transHide designs"}>
            <span><i className="fa-solid fa-crop-simple"></i></span>
                <h3>UI/UX Design</h3>
                <p>Crafting intuitive and visually stunning UI/UX experiences that solve user problems and delight.Passionate about user-centered design, building interfaces that are as functional as they are engaging.</p>
            </div>
            <div className={ " transHide designs"}>
                <span> <i className="fa-brands fa-app-store"></i></span>
                <h3>S/W Development</h3>
                <p>Full-stack developer with a holistic understanding of software development, from planning and design to implementation and deployment.I build robust and user-friendly applications from scratch.</p>
            </div>
        </div>
    </div>
    </>
  )
}
