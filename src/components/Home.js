import React from 'react'
import img1 from '../images/coding girl.avif'
import img2 from '../images/coding.avif'
import img3 from '../images/coding-girl-2.jpg'
import Footer from './Footer'
const Home = () => {
  return (
      <>
      <div className="home-page">
    <div className="left">
        <h1>I am a <span>Web</span> Developer</h1 >
        <p>I hope this message finds you well. I am writing to express my eagerness to take on new challenges and contribute to upcoming projects. Having successfully completed 10 projects involving HTML, CSS, JavaScript, React.js, and Bootstrap, I am confident in my ability to deliver high-quality work.</p>
        <button className="btn-1">Learn more <i className="fa-solid fa-arrow-right"></i></button>
    </div>
    <div className="right">
        <img src={img1} alt="" />
    </div>
 
  </div>
  {/* About */}
  <div className="about-section">
    <h1>About Me</h1>
    <div className="about-page">
        <div className="left-1">
            <img src={img2} alt="" />
        </div>
        <div className="right-1">
            <h2>I am a <span>Web</span> Developer</h2>
            <p>"I have successfully completed 10 projects utilizing HTML, CSS, JavaScript, React.js, and Bootstrap. This experience has not only honed my technical skills but also instilled a strong commitment to delivering quality work. I am enthusiastic about the opportunity to further sharpen my abilities and contribute my utmost effort to any projects presented to me. I am confident that my skills and dedication make me a perfect fit for this role."</p>
            <button className="btn-1" id="btn">About me <i className="fa-solid fa-arrow-right"></i> </button>
        </div>
    </div>
</div>
{/* Work */}
<div className="work-section">
    <h1>About my Work</h1>
   <div className="work-page">
    <div className="left-2">
        <h2><span>Work Experience &</span> Projects links </h2>
        <p>That's fantastic to hear that you've already completed 10 projects in HTML, CSS, JavaScript, React.js, and Bootstrap! It's evident that you have a solid foundation in web development. If you're looking to further sharpen your skills and take on new challenges, here are some examples of my work on projects :)</p>
    </div>
    <div className="right-2">
        <img src={img3} alt="" />
    </div>
   </div>
   <div className="project-section">
    <h2>My <span>projects links</span></h2>
    <ul>
        <li><span>Letterfix</span><i className="fa-solid fa-arrow-right"></i> <span className="color-1">https://sahibakhatoon.github.io/Letterfix-project/</span></li>
        <li><span className="color-1">Abstract</span> <i className="fa-solid fa-arrow-right"></i> <span>https://sahibakhatoon.github.io/Abstract/</span></li>
        <li><span>Monstercat</span> <i className="fa-solid fa-arrow-right"></i> <span className="color-1">https://sahibakhatoon.github.io/Monscat/</span></li>
        <li><span className="color-1">Temperature Converter</span> <i className="fa-solid fa-arrow-right"></i> <span>https://sahibakhatoon.github.io/Temperature-Converter/</span></li>
        <li><span>Tic-Tac-Toe</span> <i className="fa-solid fa-arrow-right"></i> <span className="color-1">https://sahibakhatoon.github.io/Tic-tac-toe/</span></li>
        <li><span className="color-1">Stop Watch</span> <i className="fa-solid fa-arrow-right"></i> <span>https://sahibakhatoon.github.io/Stop-watch/</span></li>
        <li><span>Weather-App</span><i className="fa-solid fa-arrow-right"></i> <span className="color-1">https://sahibakhatoon.github.io/Weather-App/</span></li>
        <li><span className="color-1">Todo-List</span><i className="fa-solid fa-arrow-right"></i> <span>todo-list-gules-two.vercel.app</span></li>
        <li><span>E-commerce</span><i className="fa-solid fa-arrow-right"> </i> <span className="color-1">https://e-commerce-web-shlt.vercel.app/</span></li>
        <li><span className="color-1">E-commerce-website</span><i className="fa-solid fa-arrow-right"></i> <span>https://e-commerce-xibh.vercel.app/</span></li>
    </ul>
</div>
</div>
  {/* Skill */}
  <div className="skill-section">
    <h1>Skill</h1>
 <div className="skills-area">
    <div className="skill">
        <div className="skill-title">HTML</div>
        <div className="skill-bar"></div>
        <div className="html skill-fill">
        <div className="skill-percent">90%</div>
    </div>
 </div>
 <div className="skill">
    <div className="skill-title">CSS</div>
    <div className="skill-bar"></div>
    <div className="css skill-fill">
    <div className="skill-percent">80%</div>
</div>
</div>
<div className="skill">
    <div className="skill-title">JAVASCRIPT</div>
    <div className="skill-bar"></div>
    <div className="javascript skill-fill">
    <div className="skill-percent">70%</div>
</div>
</div>
<div className="skill">
    <div className="skill-title">React.JS</div>
    <div className="skill-bar"></div>
    <div className="react skill-fill">
    <div className="skill-percent">50%</div>
</div>
</div>
<div className="skill">
    <div className="skill-title">Responsive Design</div>
    <div className="skill-bar"></div>
    <div className="responsive skill-fill">
    <div className="skill-percent">80%</div>
</div>
</div>
<div className="skill">
    <div className="skill-title">GitHub</div>
    <div className="skill-bar"></div>
    <div className="github skill-fill">
    <div className="skill-percent">50%</div>
</div>
</div>
<div className="skill">
    <div className="skill-title">Bootstrap</div>
    <div className="skill-bar"></div>
    <div className="bootstrap skill-fill">
    <div className="skill-percent">90%</div>
</div>
</div>
 
</div>
 </div>
 {/* Contact */}
 <div className="contact-section">
    <h1><span>Contact Me</span></h1>
    <div className="contact-page">
       <div className="d-flex">
        <div className="address-section">
            <div className="round">
             <i className="fa-sharp fa-solid fa-location-dot"></i>
            </div>
             <div className="address-detail">
                <h3>Address Details</h3>
             <p>Fazilnagar Kushinagar (U.P) PinCode - 274401</p>
             </div>
            
            </div>
            <div className="phone-section">
                <div className="round">
                    <i className="fa-sharp fa-solid fa-phone"></i>
                </div>
                <div className="call-detail">
                    <h3>Call Details</h3>
                   <p> Phone-No 7905948645</p>
                   <p>WhatsApp-No 9670660505</p>
                </div>
    
            </div>
            <div className="e-mail-section">
              <div className="round">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="e-mail-detail">
                <h3>E-mail Details</h3>
                <p>sahibakhatoon2023@gmail.com sahidaansari2024@gmail.com</p>
              </div>
            </div>
       </div>
    </div>
</div>
<Footer />
      </>
    
  )
}

export default Home