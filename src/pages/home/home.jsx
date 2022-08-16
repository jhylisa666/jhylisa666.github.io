import React from 'react'
import './home.scss'
import NavBar from '../../components/navBar.js'
import SimpleContainer from '../../components/container.js'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Home() {
  return (
    <div className='home'>
      <NavBar> {NavBar}</NavBar>
      <h1>Lisa Haiyi Jiang</h1>
      <div className="boxContainer">
        <SimpleContainer>
          <div className="flexContainer">
            <div className="txtContainer">
              <h1>
                Hello!
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
              <div className='icons'>
                <div className='icon'>
                  <GitHubIcon fontSize='large' sx={{ color: '#355070' }}/>
                </div>
                <div className='icon'>
                  <LinkedInIcon fontSize='large' sx={{ color: '#355070' }}/>
                </div>
              </div>
            </div>
            <div className="middlePanel">
              <div className="imgContainer">
                <img src={require("./headshot.jpg")} alt="" />
              </div>

            </div>
          </div>
        </SimpleContainer>
      </div>

    </div >

  )
}
