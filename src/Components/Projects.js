import React ,{useState}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../Style/style.css"
import "../Style/utils.css"
// import pj from "../Images/project.png"
import js from "../Images/js.png"
import gh from "../Images/github.png"
import p2 from "../Images/p2.png"
import tictt from "../Images/tictt.png"
import notebook from "../Images/notebook.png"
import ecart from "../Images/ecart.png"
import tdl from "../Images/tdl.png"
import sc from "../Images/sc.png"

export default function Projects() {
    const [shake, setshake] = useState(false)

    // const observe = new IntersectionObserver((entries)=>{
    //     entries.forEach((entry)=>{
    //       if(entry.isIntersecting)
    //       {
    //         entry.target.classList.add('pjShow');
    //       }
    //     })
    //   })
      
    //   const hide=document.querySelectorAll(".pjHide");
    //   hide.forEach((el)=>observe.observe(el));


      
  return (
     <>
      <div className="hr mw3" name="projects">
      <hr />
    </div>
    <div className="mw3 projects">
        <div className="projectsLeft">
        <h1 className='heading'>Projects&nbsp;💻</h1>
        </div>
    <div className="projectsRight    ">
        
        <div className="box ">
        <h3>Ecommerce Website</h3>
            <img src={ecart} alt="" />
            <div className="content">
                <p className='contentDesc'>Made a Ecommerce website (Ecart) with features seamless Stripe payment integration and includes an admin panel for efficient management of products, orders, and users.</p> <br />
                <p  className='techUsed' style={{textAlign:'left'}}> <b>Tech Used : </b> <span style={{color:"#ff004f"}}>MERN , Stripe Payment , Redux tools , Axios , Material UI , and other frontend frameworks</span>  </p>
                <div className='pbtns'>
                   <a href="" aria-disabled> <button className='disabled' >Go to Website &nbsp; <i className="fa-solid fa-link"></i></button></a> 
                    <a href="https://github.com/Akash-6073/Ecart-Project"><h1><i className="fa-brands fa-github fa-2xs " style={{height:"20px"}}></i></h1></a>
                </div>
            </div>
        </div>
        <div className="box ">
        <h3>myNotebook</h3>
            <img src={notebook} alt="" />
            <div className="content">
                <p className='contentDesc'>A MERN-based myNotebook app enabling users to effortlessly create, edit, and organize notes with MongoDB, ExpressJS, React, and Node.js.</p> <br />
                <p  className='techUsed' style={{textAlign:'left'}}> <b>Tech Used : </b> <span style={{color:"#ff004f"}}>MongoDB , Express , ReactJS , NodeJS , other frontend frameworks</span>  </p>
                <div className='pbtns'>
                   <a href="https://inotebook2-49rm.onrender.com/" target='_blank'> <button>Go to Website &nbsp; <i className="fa-solid fa-link"></i></button></a> 
                    <a href="https://github.com/Akash-6073/iNotebook-CRUD-APP-" target='_blank'><h1><i className="fa-brands fa-github fa-2xs"></i></h1></a>
                </div>
            </div>
        </div>
        <div className="box ">
        <h3>TIC - TAC - TOE</h3>
            <img src={tictt} alt="" />
            <div className="content">
                <p className='contentDesc'>Unleash your X's and O's in a sleek new Tic Tac Toe game built with HTML, CSS, and JavaScript!</p> <br />
                <p  className='techUsed' style={{textAlign:'left'}}> <b>Tech Used :  </b> <span style={{color:"#ff004f"}}>  HTML , CSS , JS</span></p>
                <div className='pbtns'>
                   <a href="https://tice-tac-toe.netlify.app/" target='_blank'> <button>Go to Website &nbsp; <i className="fa-solid fa-link"></i></button></a> 
                    <a href="https://github.com/Akash-6073/Tic-Tac-Toe" target='_blank'><h1><i className="fa-brands fa-github fa-2xs"></i></h1></a>
                </div>
            </div>
        </div>
        <div className="box ">
        <h3>TO - DO - LIST</h3>
            <img src={tdl} alt="" />
            <div className="content">
                <p className='contentDesc'>This web app, built with HTML, CSS, and JS, keeps the tasks safe in local storage.</p> <br />
                <p  className='techUsed' style={{textAlign:'left'}}> <b>Tech Used : </b> <span style={{color:"#ff004f"}}>HTML , CSS , JS</span>  </p>
                <div className='pbtns'>
                   <a href="https://to-do-list63.netlify.app/" target='_blank'> <button>Go to Website &nbsp; <i className="fa-solid fa-link"></i></button></a> 
                    <a href="https://github.com/Akash-6073/To-Do-List" target='_blank'><h1><i className="fa-brands fa-github fa-2xs"></i></h1></a>
                </div>
            </div>
        </div>
        <div className="box ">
        <h3>Spotify Clone</h3>
            <img src={sc} alt="" />
            <div className="content">
                <p className='contentDesc'>Created a Static display of Spotify Clone using JavaScript.</p> <br />
                <p  className='techUsed' style={{textAlign:'left'}}> <b>Tech Used : </b> <span style={{color:"#ff004f"}}>JavaScript , CSS</span>  </p>
                <div className='pbtns'>
                   <a href="https://spotify-clone63.netlify.app/" target='_blank'> <button >Go to Website &nbsp; <i className="fa-solid fa-link"></i></button></a> 
                    <a href="https://github.com/Akash-6073/Spotify-Clone" target='_blank'><h1><i className="fa-brands fa-github fa-2xs"></i></h1></a>
                </div>
            </div>
        </div>
        <div className="box last  ">
        <h3>View all on my GitHub</h3>
        <div className="icon">
        <i className="fa-brands fa-square-github"></i>
        </div>

            <div className="content">
                <div className='pbtns lpbtns'>
                   <a href="https://github.com/Akash-6073" target='_blank'> <button>Go to Website &nbsp; <i className="fa-solid fa-link"></i></button></a> 
                    <a href="https://github.com/Akash-6073" target='_blank'><h1><i className="fa-brands fa-github fa-2xs"></i></h1></a>
                </div>
            </div>
        </div>
    </div>
    </div>
    {/* <div className="mw3 projects">
        <div className="container">
            <h1>Projects</h1>
            <div className="works">
                <div className="work">
                    <img src={p2} alt="" />
                </div>
                <div className="work">
                    <img src={p2} alt="" />
                </div>
                <div className="work">
                    <img src={jsy} alt="" />
                </div>
            </div>
        </div>
    </div> */}


     </>
  )
}
