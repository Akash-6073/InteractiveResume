import React, {useState}from 'react'
import "../Style/style.css"
import "../Style/utils.css"

export default function Projects() {
    const tictt=process.env.REACT_APP_TICTT
    const notebook=process.env.REACT_APP_NOTEBOOK
    const ecart=process.env.REACT_APP_ECART
    const tdl=process.env.REACT_APP_TDL
    const sc=process.env.REACT_APP_SC
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
                   <a href="https://ecart-site-ten.vercel.app/" target='_blank'> <button className='' >Go to Website &nbsp; <i className="fa-solid fa-link"></i></button></a> 
                    <a href="https://github.com/Akash-6073/Ecommerce-Website" target='_blank'><h1><i className="fa-brands fa-github fa-2xs " style={{height:"20px"}}></i></h1></a>
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
                   <a href="https://mynotebook-gamma.vercel.app/" target='_blank'> <button>Go to Website &nbsp; <i className="fa-solid fa-link"></i></button></a> 
                    <a href="https://github.com/Akash-6073/myNotebook" target='_blank'><h1><i className="fa-brands fa-github fa-2xs"></i></h1></a>
                </div>
            </div>
        </div>
        <div className="box ">
        <h3>Online Voting System</h3>
            <img src={tictt} alt="" />
            <div className="content">
                <p className='contentDesc'>Developed an online voting app in a <b>Team project</b>, showcasing collaboration and project management while enhancing MERN stack skills.</p> <br />
                <p  className='techUsed' style={{textAlign:'left'}}> <b>Tech Used :  </b> <span style={{color:"#ff004f"}}>  MERN and other frameworks</span></p>
                <div className='pbtns'>
                   <a href="https://online-voting1.vercel.app/" target='_blank'> <button>Go to Website &nbsp; <i className="fa-solid fa-link"></i></button></a> 
                    <a href="https://github.com/Akash-6073/Online-Voting-System" target='_blank'><h1><i className="fa-brands fa-github fa-2xs"></i></h1></a>
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
                   <a href="https://crud-app-yz3i.vercel.app/" target='_blank'> <button >Go to Website &nbsp; <i className="fa-solid fa-link"></i></button></a> 
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
