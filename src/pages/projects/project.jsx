import React from 'react'
import './project.scss'
import './../home/home.scss'
import ProjectCard from '../../components/ProjectCard'
// note: use static site generator to do diff pages?


export default function Projects() {
  return (
    <div className='projects'>
      <h1>Projects</h1>
      <ProjectCard></ProjectCard>
    </div>
    
  )
}

