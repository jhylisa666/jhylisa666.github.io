import React from 'react'
import './home.scss'
import ResponsiveAppBar from '../../components/appBar.js'

export default function Home() {
  return (
    <div className='home'>
    <ResponsiveAppBar> {ResponsiveAppBar}</ResponsiveAppBar>
      <h1>Lisa Haiyi Jiang</h1>
      <div className="txtContainer">
        <body>
          
        </body>
      </div>
      <div className="imgContainer">
        <img src="assets/headshot.jpg" alt="" />
      </div>
    </div>
    
  )
}
