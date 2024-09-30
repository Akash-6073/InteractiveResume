import React, { useRef } from 'react';
import "../Style/style.css";
import "../Style/utils.css";
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast ,Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = React.useState(false);
  const form = useRef()
  const sendEmail = async (data) => {
    setLoading(true);
    try {
      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID, 
        process.env.REACT_APP_TEMPLATE_ID, 
        form.current, 
        process.env.REACT_APP_PUBLIC_KEY
      );
      toast.success(`Thank you ${data.user_name} 😊 Message sent successfully!`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
      reset();
    } catch (error) {
      toast.error('Internal Server Error!!😔', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    } finally {
      setLoading(false);
    }
  };
  const observe = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting)
      {
        entry.target.classList.add('zoomShow');
      }
    })
  })
  
  const hide=document.querySelectorAll(".zoomHide");
  hide.forEach((el)=>observe.observe(el));
  return (
    <>
            <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
      <div className="hr mw3" name="contact">
        <hr />
      </div>
      <div className='mw2 contactMain'>
        <div className="mw3 contact">
          <div className="contactLeft">
            <h1 className='heading'>Contact me</h1>
            <p>
              <span><i className="fa-solid fa-envelope" style={{ color: "#ababab" }}></i></span>&nbsp;
              <a href="mailto:akashmahendrakar6073@gmail.com" style={{ textDecoration: "none", color: "black" }}>Email</a>
            </p>
            <p>
              <span><i className="fa-solid fa-square-phone" style={{ color: "#ababab" }}></i></span>&nbsp;+91 8919596263
            </p>
            <div className="contactMedia">
              <a target='_blank' href={process.env.REACT_APP_INSTA} style={{ paddingLeft: "0" }} className="insta">
                <i className="fa-brands fa-instagram " style={{ color: "#e1306c" }}></i>
              </a>
              <a target='_blank' href={process.env.REACT_APP_FB}>
                <i className="fa-brands fa-facebook " style={{ color: "#4267B2" }}></i>
              </a>
              <a target='_blank' href={process.env.REACT_APP_GITHUB}>
                <i className="fa-brands fa-github "></i>
              </a>
              <a target='_blank' href={process.env.REACT_APP_LINKEDIN}>
                <i className="fa-brands fa-linkedin" style={{ color: "#0a66c2" }}></i>
              </a>
              <a target='_blank' disabled={true} href={process.env.REACT_APP_WP} style={{ textDecoration: "none", color: "black" }}>
                <i disabled={true} className="fa-brands fa-whatsapp" style={{ color: "#2db950" }}></i>
              </a>
            </div>
            <p style={{ fontSize: "24px" }} className='thanks'>Thanks for Visiting my <a href="https://github.com/Akash-6073/InteractiveResume" target='_blank' style={{color:"#ff004f",textDecoration:"underline"}}>Portfolio !</a></p>
          </div>
          <div className="contactRight">
            <form ref={form} onSubmit={handleSubmit(sendEmail)}>
              <p className='message'>Send me a Message </p>
              <input 
                className={`rname removeBorder ${errors.user_name ? 'error' : ''}`} 
                type="text" 
                placeholder={errors.user_name?'*Please enter your Name': 'Your Name' } 
                {...register('user_name', { required: true })} 
              />
              {errors.user_name && <span className="errorMsg"></span>}
              
              <input 
                className={`remail removeBorder ${errors.user_email ? 'error' : ''}`} 
                type="email" 
                placeholder={errors.user_email?'*Please enter your Email': 'Your Email' }
                {...register('user_email', { required: true })} 
              />
              {errors.user_email && <span className="errorMsg"></span>}
              
              <textarea 
                name="message" 
                //  style={{ background: "rgba(128, 128, 128, 0.681)" }}
                cols="30" 
                rows="5" 
                {...register('message', { required: true })} 
                style={{ resize: "none" }}
                className={errors.message && "error"}
                placeholder={errors.message?'*Message...': 'Message' }

              ></textarea>
              {errors.message && <span className="errorMsg"></span>}

              <button type='submit' className={loading?"submittingnForm":""} disabled={loading}>
                <i className="fa-solid fa-paper-plane"></i>&nbsp;
                {loading ? "Sending Message..." : "Let's Collaborate"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="mw2 footer">
        Made with &nbsp;<i className="fa-solid fa-heart" style={{ color: "#ff004f" }}></i>&nbsp; by Akash Mahendrakar
      </div>
    </>
  );
}
