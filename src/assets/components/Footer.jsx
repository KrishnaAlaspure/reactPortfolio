import React from 'react'
import { Link } from 'react-router-dom'
import AboutMe from './AboutMe'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import ContactMe from './ContactMe'

function Footer() {
  return (
    <footer className=''>
      <div className='flex flex-col mt-10 justify-around items-center '>
      <div className="flex flex-row justify-around items-center ">
      <ul className="flex flex-row gap-8 ml-14 text-2xl border-b border-neutral-400">
            <li className="hover:text-neutral-400 cursor-pointer "><a href="#about">About</a></li>
            <li className="hover:text-neutral-400 cursor-pointer"><Link to={Experience}>Experience</Link></li>
            <li className="hover:text-neutral-400 cursor-pointer"><Link to={Projects}>Projects</Link></li>
            <li className="hover:text-neutral-400 cursor-pointer"><Link to={Skills}>Skills</Link></li>
            <li className="hover:text-neutral-400 cursor-pointer"><Link to={ContactMe}>Contact</Link></li>
          </ul>
          
      </div>
      <p className='text-center'>Copyright &#169; May 2024 Krishna Alaspure. All Rights Reserved </p>
      </div>
    </footer>
  )
}

export default Footer
