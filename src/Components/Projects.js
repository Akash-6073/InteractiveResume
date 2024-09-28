import React, {useState}from 'react'
import "../Style/style.css"
import "../Style/utils.css"
import tictt from "../Images/tictt.png"
import notebook from "../Images/notebook.png"
import ecart from "../Images/ecart.png"
import tdl from "../Images/cc.png"
import sc from "../Images/sc.png"

export default function Projects() {
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
                <p  className='techUsed' style={{textAlign:'left'}}> <b>Tech Used : </b> <span style={{color:"#ff004f"}}>MERN,  Stripe Payment,  Redux tools,  Axios,  Material UI,  and other frontend frameworks</span>  </p>
                <div className='pbtns'>
                   <a href="https://ecart-smoky.vercel.app/" > <button className='' >Go to Website &nbsp; <i className="fa-solid fa-link"></i></button></a> 
                    <a href="https://github.com/Akash-6073/Ecart-Project"><h1><i className="fa-brands fa-github fa-2xs " style={{height:"20px"}}></i></h1></a>
                </div>
            </div>
        </div>
        <div className="box ">
        <h3>myNotebook</h3>
            <img src={notebook} alt="" />
            <div className="content">
                <p className='contentDesc'>A MERN-based myNotebook app enabling users to effortlessly create, edit, and organize notes with MongoDB, ExpressJS, React, and Node.js.</p> <br />
                <p  className='techUsed' style={{textAlign:'left'}}> <b>Tech Used : </b> <span style={{color:"#ff004f"}}>MongoDB,  Express,  ReactJS,  NodeJS,  other frontend frameworks</span>  </p>
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
                <p  className='techUsed' style={{textAlign:'left'}}> <b>Tech Used :  </b> <span style={{color:"#ff004f"}}>  HTML, CSS, JS</span></p>
                <div className='pbtns'>
                   <a href="https://tice-tac-toe.netlify.app/" target='_blank'> <button>Go to Website &nbsp; <i className="fa-solid fa-link"></i></button></a> 
                    <a href="https://github.com/Akash-6073/Tic-Tac-Toe" target='_blank'><h1><i className="fa-brands fa-github fa-2xs"></i></h1></a>
                </div>
            </div>
        </div>
        <div className="box ">
        <h3>Currency Converter</h3>
            <img src={tdl} alt="" />
            <div className="content">
                <p className='contentDesc'>I built a fully responsive currency converter app using HTML, CSS, and JavaScript. It fetches live exchange rates from a 
GitHub API, providing real-time conversions.</p> <br />
                <p  className='techUsed' style={{textAlign:'left'}}> <b>Tech Used : </b> <span style={{color:"#ff004f"}}>HTML, CSS, JS, Fetch API</span>  </p>
                <div className='pbtns'>
                   <a href="https://currconvertr.netlify.app/" target='_blank'> <button>Go to Website &nbsp; <i className="fa-solid fa-link"></i></button></a> 
                    <a href="https://github.com/Akash-6073/Currency-Converter" target='_blank'><h1><i className="fa-brands fa-github fa-2xs"></i></h1></a>
                </div>
            </div>
        </div>
        <div className="box ">
        <h3>CRUD APP</h3>
            <img src={sc} alt="" />
            <div className="content">
                <p className='contentDesc'>Built a CRUD app that improved my skills in managing state, handling asynchronous operations, and enhancing user interaction.</p> <br />
                <p  className='techUsed' style={{textAlign:'left'}}> <b>Tech Used : </b> <span style={{color:"#ff004f"}}>MERN</span>  </p>
                <div className='pbtns'>
                   <a href="https://crud-app-pqua.onrender.com/" target='_blank'> <button >Go to Website &nbsp; <i className="fa-solid fa-link"></i></button></a> 
                    <a href="https://github.com/Akash-6073/CRUD-APP" target='_blank'><h1><i className="fa-brands fa-github fa-2xs"></i></h1></a>
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
