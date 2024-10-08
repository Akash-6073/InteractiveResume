import React ,{useState} from 'react'
import { Link } from 'react-scroll'
import { useTypewriter ,Cursor } from 'react-simple-typewriter'
import About from './About'

import "../Style/style.css"
import "../Style/utils.css"
import "../Style/responsive.css"
export default function Navbar(props) {
//   const [right, setright] = useState("-200px")
//  var menu=document.getElementById("Menu")
//  function close(){
//   setright("-200px")
//  }
//  function open(){
//   setright("0px")
//  }
const img2=process.env.REACT_APP_IMG2
const img3=process.env.REACT_APP_IMG3
function sr(){
  props.setright("-200px")
}
const [text] =useTypewriter({
  words: ['Web Developer','Learner','Student'],
  loop:{},
  typeSpeed:80,
  deleteSpeed:20
});

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
    <div className="mw2 intro" name="home">
    <div className='m-auto'>
      <nav className= ' navbar m-auto'>
        <ul className='navleft'>
            <li className='a'>A</li>
            <li>K</li>
            <li>A</li>
            <li>S</li>
            <li className='h'>H </li>
        </ul>
        <ul className=  'navright' style={{right:props.right}} id='Menu'>
            <li><Link    to='home' spy={true} smooth={true}   duration={500} onClick={sr}>Home</Link></li>
            <li><Link   to='about'  smooth={true}  offset={-85}   duration={500} onClick={sr}>About</Link></li>
            <li><Link  activeclassname='active' to='interests' spy={true} smooth={true} offset={-60} duration={1000} onClick={sr}>Interests</Link></li>
            <li><Link  activeclassname='active' to='projects' spy={true} smooth={true} offset={-60} duration={500} onClick={sr}>Projects</Link></li>
            <li><Link  activeclassname='active' to='contact' spy={true} smooth={true} offset={-65} duration={1000} onClick={sr}>Contact</Link></li>
            <i className="fa-solid fa-circle-xmark fas closeMenu" onClick={props.close}></i>
        </ul>
        <i className="fa-solid fa-bars fas openMenu" onClick={props.open} style={{cursor:"pointer"}}></i>
      </nav>
      <div className=" about">
      <div className="aboutLeft">
        <p>Student | Learner | Developer</p>
        <h1>Hi <span className='hi'>🖐️</span> , I am <span style={{color:"white"}} className='underline'> Akash</span> <br />
        <div style={{paddingTop:"15px"}}> 
         <span style={{position:"relative" , color:"#ff004f" ,marginTop:"45px"}}  >{text}</span>
         <Cursor/>

         </div>

         
         </h1>
      </div>
      <div className="aboutRight">
        <img className='pc' src={img2} alt="" />
        <img className='phone' src={img3} alt="" />
      </div>
    </div>
    </div>
    </div>
  )
}
