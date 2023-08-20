
import React, { useEffect } from 'react';
import { initScrollReveal, initTyped } from '../utils/animations';

function Home() {

  useEffect(() => {
    initScrollReveal();
    initTyped();

    return () => {
  
    };
  }, []);
  return (
    <div>
      <section className="home" id="home">
        <div className="home-content">
            <h3>Hello, It's Me</h3>
            <h1>M.UMAR KHAN</h1>
            <h3>And I'm a <span className="multiple-text"></span></h3>
            <p><span><em>Studying Software Engineering at NUST</em></span></p>
            <p><span><em>Frontend Web Developer</em></span></p>
            <p><span><em>MERN Developer</em></span></p>

            <div className="social-media">
                <a href="https://web.facebook.com/muhammadumar.khan.12139"><i className='bx bxl-facebook'></i></a>
                <a href="https://www.instagram.com/hm_umax15/"><i className='bx bxl-instagram'></i></a>
                <a href="mailto:umarkhan00150@gmail.com"><i className='bx bxl-gmail'></i></a>
                <a href="https://www.linkedin.com/in/muhammad-umar-khan-762722256/"><i className='bx bxl-linkedin'></i></a>
                <a href="https://github.com/HmUmaxKhan"><i className='bx bxl-github'></i></a>
            </div>
            <a href="https://drive.google.com/uc?export=download&id=1fvnnZwvLc7KWT1PwkA9SL4ykgrqjRoAi" className="btn">Download CV</a>
        </div>
        <div className="home-img">
            <img src={require("../Assests/Images/Home2.png")} alt="UMAR's pic" />
        </div>
    </section>
    </div>
  )
}

export default Home