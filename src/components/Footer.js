import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact</h1>
          </Fade>
          <a className="email-link" href={`mailto:${data.contactEmail}`}>
            {data.contactEmail}
          </a>
          <div className="social-icons">
            {data.social.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"/>
              </a>
            ))}
          </div>
          <span>
            Made With <icon>❤</icon> and help from{" "}
            <a href="https://www.linkedin.com/in/zhetang/">Hockey Dad</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
