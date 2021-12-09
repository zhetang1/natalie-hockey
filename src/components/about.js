import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = () => {
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
            <p>
              <a href="#home">Top</a>
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
