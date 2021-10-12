import React from "react"
import Fade from "react-reveal/Fade"

import data from "../yourdata"
import YoutubeEmbed from "./YoutubeEmbed";

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <div className="grid">
            <Fade bottom cascade>
              {data.videos.map((video, index) => (
                <div>
                  <YoutubeEmbed
                      key={index}
                      embedId={video.embedId} />
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
