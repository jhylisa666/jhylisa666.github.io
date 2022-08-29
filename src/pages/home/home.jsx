import React from 'react'
import './home.scss'
import NavBar from '../../components/navBar.js'
import SimpleContainer from '../../components/container.js'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@material-ui/core/Link';

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
                  <Link href='https://github.com/jhylisa666' color='#6d597a'><GitHubIcon fontSize='large' /></Link>
                </div>
                <div className='icon'>
                  <Link href='https://www.linkedin.com/in/haiyijiang/' color='#6d597a'><LinkedInIcon fontSize='large' /></Link>
                </div>
                <Link className='resume' href='https://drive.google.com/file/d/1X5tJUIhxoEfyBCGrQOc5csqHJR-6hjVV/view?usp=sharing'>
                  Resume
                </Link>
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
