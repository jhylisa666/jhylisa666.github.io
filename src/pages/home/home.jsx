import React from 'react'
import './home.scss'
import ResponsiveAppBar from '../../components/appBar.js'
import Button from '@mui/material/Button';

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
            <br></br><br></br>
            Email: jiang.hai@northeastern.edu
          </body>
        </div>
        <div className="middlePanel">
          <div className="imgContainer">
            <img src={require("./headshot.jpg")} alt="" />
          </div>
        </div>
        <div className="linksContainer">
          <img src={require("./GitHubLogo.png")} alt="" />
          <div className="LinkedInLogo">
            <img src={require("./linkedinLogo.png")} alt="" />
          </div>
          <div className="buttons">
          <Button size = "small" color = "secondary" variant="contained">resume</Button>
          </div>
        </div>
      </div>
    </div>

  )
}
