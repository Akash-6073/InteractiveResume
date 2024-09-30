import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Interests from './Components/Interests'
import { Link } from 'react-scroll';
import Myskills from './Components/Myskills';
function App() {
const [ht, setht] = useState("0")
const pr=process.env.REACT_APP_PR
const onclick = (tname) => {
  const tabs = {
    lang: document.getElementById("tlink1"),
    front: document.getElementById("tlink2"),
    back: document.getElementById("tlink3"),
    dsa: document.getElementById("tlink4"),
  };

  // Remove 'activeLink' class from all tabs
  Object.values(tabs).forEach(tab => tab.classList.remove("activeLink"));

  // Add 'activeLink' class to the clicked tab
  if (tabs[tname]) {
    tabs[tname].classList.add("activeLink");
  }

  // Hide all sections
  document.querySelectorAll(".linksRight").forEach(el => el.classList.add("none"));

  // Show the clicked section
  const inames = document.getElementById(tname);
  if (inames) {
    inames.classList.remove("none");
  }
};

  const [id,setid]=useState('');

  // on scroll effect
  const [scroll, setscroll] = useState(false)
  function scrolled(){
   if(window.scrollY >=100){
     setscroll(true);
   }
   else{
     setscroll(false);
   }
  }
  window.addEventListener("scroll",scrolled)

// MENU bar setting
  const [right, setright] = useState("-200px")
  var menu=document.getElementById("Menu")
  function close(){
   setright("-200px")
  }
  function open(){
   setright("0px")
  }

// Hidden and show

const observe = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting)
    {
      entry.target.classList.add('show');
    }
  })
})

const hide=document.querySelectorAll(".hidden");
hide.forEach((el)=>observe.observe(el));

  return (
    <>
    <div className={scroll ? 'tran tscroll' :'none'} >
      <div className="ttl">
      <div className="titleLeft">
      Akash Mahendrakar , I
        </div> 
        <div className="titleRight">
         <Link to='home' smooth={true} spy={true} duration={500}> 
         <img src={pr} alt="" style={{cursor:"pointer"}} />
          </Link> 
        </div>
        </div>
         

    </div>
    <Navbar scroll={scroll} right={right} setright={setright} close={close} open={open}/>
    <About onclick={onclick} ht={ht}/>
    <Myskills onclick={onclick} ht={ht}/>
    <Interests/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default App;
