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
        <a href = "https://github.com/jhylisa666">
          <div className="GitLogo">
          <img src={require("./GitHubLogo.png")} alt="" />
          </div>
          </a>
          <div className="LinkedInLogo">
            <a href="https://linkedin.com/in/haiyijiang">
            <img src={require("./linkedinLogo.png")} alt="" />
            </a>
          </div>
          <div className="buttons">
          <a href="resume.pdf" download="resume.pdf">
          <Button size = "small" variant="outlined">resume</Button>
          </a>
          </div>
        </div>
      </div>
    </div>

  )
}
