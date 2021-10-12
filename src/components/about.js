import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
// import aboutImage from "../images/2021-09-09_07-28-26_519.jpg"

const About = () => {
  console.log({data});
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              {data.aboutParaOne}
            </p>
          </div>
          <div className="image-wrapper">
            <img src={data.aboutImage} alt="about"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
