import React from 'react'
import img2 from '../images/coding.avif'
import Footer from './Footer'
const About = () => {
  return (
   <>
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
<Footer />
   </>
  )
}

export default About