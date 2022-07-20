import React from 'react'
import './home.scss'
import ResponsiveAppBar from '../../components/appBar.js'

export default function Home() {
  return (
    <div className='home'>
      <ResponsiveAppBar> {ResponsiveAppBar}</ResponsiveAppBar>
      <h1>Lisa Haiyi Jiang</h1>
      <div className="flexContainer">
        <div className="txtContainer">
          <h1>
            HELLO!
          </h1>
          <body>
            I am a second year Honors Northeastern student with a major in Computer Science and concentration 
            in Artificial Intelligence. I am eager to pursue anything related to software development, machine learning, or artificial intelligence. 
            <br></br><br></br>
            As a software engineering working for multiple on-campus organizations, I have lots of experience with full-stack web development as well as
            machine learning and artifical intellience.
            <br></br><br></br>
            See my work under Projects.
          </body>
        </div>
        <div className="middlePanel">
          <div className="imgContainer">
            <img src="headshot.jpg" alt="" />
          </div>
        </div>
        <div className="linksContainer">
          HI
        </div>
      </div>
    </div>

  )
}
