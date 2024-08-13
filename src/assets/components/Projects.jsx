import React from 'react'
import Page from '../imgs/Page.jpg'

function Projects() {
  return (
    <div id='projects' className=''>
      <div className="flex flex-col justify-center items-center mt-40 ">
        <p className="text-lg text-neutral-400">Browse My Recent</p>
        <h1 className="text-5xl font-semibold ">Projects</h1>
      </div>
      <div className='flex flex-col md:flex-row justify-around'>
        <div className='flex flex-col m-10 border justify-around items-center border-neutral-400 rounded-xl w-1/4 '>
          <div className='h-50 w-50'>
            <img className=' p-4 rounded-xl' src={Page} alt="" />
          </div>
          <p className='text-2xl font-semibold'>Project</p>
          <div className='flex flex-row justify-around items-center'>
          <button className=' text-xl text-white bg-gradient-to-r  from-orange-400 to-orange-900 border rounded-2xl p-2 m-2'><a href="https://github.com/KrishnaAlaspure/DemoLandingPage/tree/main/DemoLandingPage" target='_blank'>Github</a></button>
            <button className=' text-xl text-white bg-gradient-to-r  from-orange-400 to-orange-900 border rounded-2xl p-2 m-2'><a href="https://demo-landing-page-beta.vercel.app/" target='_blank'>Live Demo</a></button>
          </div>
        </div>
        <div className='flex flex-col m-10 border justify-around items-center border-neutral-400 rounded-xl w-1/4 '>
          <div className='h-50 w-50'>
            <img className=' p-4 rounded-xl' src={Page} alt="" />
          </div>
          <p className='text-2xl font-semibold'>Project</p>
          <div className='flex flex-row justify-around items-center'>
            <button className=' text-xl text-white bg-gradient-to-r  from-orange-400 to-orange-900 border rounded-2xl p-2 m-2'><a href="https://github.com/KrishnaAlaspure/DemoLandingPage/tree/main/DemoLandingPage" target='_blank'>Github</a></button>
            <button className=' text-xl text-white bg-gradient-to-r  from-orange-400 to-orange-900 border rounded-2xl p-2 m-2'><a href="https://demo-landing-page-beta.vercel.app/" target='_blank'>Live Demo</a></button>
          </div>
        </div>
        <div className='flex flex-col m-10 border justify-around items-center border-neutral-400 rounded-xl w-1/4 '>
          <div className='h-50 w-50'>
            <img className=' p-4 rounded-xl' src={Page} alt="" />
          </div>
          <p className='text-2xl font-semibold'>Project</p>
          <div className='flex flex-row justify-around items-center'>
          <button className=' text-xl text-white bg-gradient-to-r  from-orange-400 to-orange-900 border rounded-2xl p-2 m-2'><a href="https://github.com/KrishnaAlaspure/DemoLandingPage/tree/main/DemoLandingPage" target='_blank'>Github</a></button>
            <button className=' text-xl text-white bg-gradient-to-r  from-orange-400 to-orange-900 border rounded-2xl p-2 m-2'><a href="https://demo-landing-page-beta.vercel.app/" target='_blank'>Live Demo</a></button>
          </div>
        </div>
        

      </div>
    </div>
  )
}

export default Projects
