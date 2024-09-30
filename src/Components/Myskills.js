import React,{useState,useRef} from 'react';
import "../Style/style.css";
import "../Style/utils.css";
import "../Style/responsive.css";


// Rating Component
const RatingCard = ({ rating }) => {
  return (
    <div className="rating">
      {Array.from({ length: 5 }, (v, i) => (
        <span key={i} className={i < rating ? 'filled-star' : 'empty-star'}>
          {i < rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

// Zoom Animation
// Create a single IntersectionObserver instance to be reused
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add class when the element is in view
      entry.target.classList.add('zoomShow');
      
      // Optionally unobserve the element to avoid repeated triggers
      observer.unobserve(entry.target);
    }
  });
}, {
  // Optional: Add threshold or rootMargin for better control
  threshold: 0.1, // Adjust as needed (e.g., 0.1 = 10% of the element is visible)
  rootMargin: "0px 0px -10% 0px" // Customize as needed for triggering the effect earlier or later
});

// Select all elements with the class 'zoomHide'
const hideElements = document.querySelectorAll(".zoomHide");

// Observe each element
hideElements.forEach(el => observer.observe(el));


export default function Myskills(props) {
  const cpp=process.env.REACT_APP_CPP;
  const py=process.env.REACT_APP_PY;
  const java=process.env.REACT_APP_JAVA;
  const html=process.env.REACT_APP_HTML;
  const css=process.env.REACT_APP_CSS;
  const js=process.env.REACT_APP_JS;
  const react=process.env.REACT_APP_REACT;
  const mongodb=process.env.REACT_APP_MONGODB;
  const bs=process.env.REACT_APP_BS;
  const node=process.env.REACT_APP_NODE;
  const express=process.env.REACT_APP_EXPRESS;
  const redux=process.env.REACT_APP_REDUX;


   // Manage the active link state
   const [activeTab, setActiveTab] = useState('lang');
   const bubbleRef = useRef(null);

   // Function to handle tab click
   const handleTabClick = (tab,event) => {
     setActiveTab(tab);
     props.onclick(tab); // If you're passing the click to a parent component
      // Get the position of the click relative to the tab element
    const rect = event.target.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    // Create the ripple element
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = `${Math.max(rect.width, rect.height)}px`; // Make sure ripple covers the element
    ripple.style.left = `${clickX - rect.width / 2}px`; // Position the ripple correctly
    ripple.style.top = `${clickY - rect.height / 2}px`;

    // Append the ripple to the clicked element
    event.target.appendChild(ripple);

    // Remove the ripple after the animation duration
    setTimeout(() => {
      ripple.remove();
    }, 600);  
   };

   
  return (
    <>
      <div className="mw3 myskills">
        <div className="myskillsLeft">
          <h1 className='heading'>My Skills💪 </h1>
        </div>
        <div className="myskillsRight">
          <div className="links">
          
          <div className="tab-links linksLeft">
      <p
        id="tlink1"
        className={`tlink ${activeTab === 'lang' ? 'activeLink' : ''}`}
        onClick={(e) => handleTabClick('lang', e)}
      >
        LANGUAGES
      </p>
      <p
        id="tlink2"
        className={`tlink ${activeTab === 'front' ? 'activeLink' : ''}`}
        onClick={(e) => handleTabClick('front', e)}
      >
        FRONTEND
      </p>
      <p
        id="tlink3"
        className={`tlink ${activeTab === 'back' ? 'activeLink' : ''}`}
        onClick={(e) => handleTabClick('back', e)}
      >
        BACKEND
      </p>
      <p
        id="tlink4"
        className={`tlink ${activeTab === 'dsa' ? 'activeLink' : ''}`}
        onClick={(e) => handleTabClick('dsa', e)}
      >
        DSA
      </p>
    </div>
            
            {/* Languages Section */}
            <div className='linksRight' onClick={onclick} id='lang'>
              <div className='img'>
                <img className='im1' src={cpp} alt="C++" /> <br />
                C++
                <RatingCard rating={4} /> {/* C++ Rating */}
              </div>
              <div className='img'>
                <img className='im1' src={py} alt="Python" /> <br />
                Python
                <RatingCard rating={3} /> {/* Python Rating */}
              </div>
              <div className='img'>
                <img className='im1' src={java} alt="Java" /> <br />
                Java
                <RatingCard rating={3} /> {/* Java Rating */}
              </div>
              <div className='img'>
                <img className='im1' src={js} alt="JavaScript" /> <br />
                JavaScript
                <RatingCard rating={3} /> {/* JavaScript Rating */}
              </div>
            </div>

            {/* Frontend Section */}
            <div className='linksRight none' onClick={onclick} id='front'>
              <div className='img'>
                <img className='im1' src={html} alt="HTML" /> <br />
                HTML
                <RatingCard rating={5} /> {/* HTML Rating */}
              </div>
              <div className='img'>
                <img className='im1' src={css} alt="CSS" /> <br />
                CSS
                <RatingCard rating={5} /> {/* CSS Rating */}
              </div>
              <div className='img'>
                <img className='im1' src={js} alt="JavaScript" /> <br />
                JavaScript
                <RatingCard rating={3} /> {/* JavaScript Rating */}
              </div>
              <div className='img'>
                <img className='im1' src={bs} alt="Bootstrap" /> <br />
                Bootstrap
                <RatingCard rating={4} /> {/* Bootstrap Rating */}
              </div>
              <div className='img'>
                <img className='im1' src={react} alt="React JS" /> <br />
                React JS
                <RatingCard rating={4} /> {/* React JS Rating */}
              </div>
              <div className='img'>
                <img className='im1' src={redux} alt="Redux" /> <br />
                Redux
                <RatingCard rating={4} /> {/* Redux Rating */}
              </div>
            </div>

            {/* Backend Section */}
            <div className='linksRight none' onClick={onclick} id='back'>
              <div className='img'>
                <img className='imgdif' src={mongodb} alt="MongoDB" /> <br />
                MongoDB
                <RatingCard rating={4} /> {/* MongoDB Rating */}
              </div>
              <div className='img'>
                <img className='imgdif' src={express} alt="Express JS" /> <br />
                Express JS
                <RatingCard rating={4} /> {/* Express JS Rating */}
              </div>
              <div className='img'>
                <img className='imgdif' src={node} alt="Node JS" /> <br />
                Node JS
                <RatingCard rating={4} /> {/* Node JS Rating */}
              </div>
            </div>

            {/* DSA Section */}
            <div className='linksRight none' onClick={onclick} id='dsa'>
              <div className='img'>
                <img className='im1' src={cpp} alt="C++" /> <br />
                C++
                <RatingCard rating={4} /> {/* C++ DSA Rating */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
