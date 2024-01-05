import React from 'react'
import img3 from '../images/coding-girl-2.jpg'
import Footer from './Footer'
const Work = () => {
  return (
   <>
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
<Footer />
   </>
  )
}

export default Work