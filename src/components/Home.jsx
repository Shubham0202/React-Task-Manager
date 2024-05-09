import React, { useEffect, useState } from 'react'
import SencondaryNav from './SencondaryNav' 
import { RiEqualizer2Fill, RiMenu4Fill } from 'react-icons/ri'
import { BiSearch, BiUserCircle } from 'react-icons/bi'
import ProjectCard from './ProjectCard'
import useFetchData from '../Hooks/useFetchData'
import Process from './HomeComponents/Process'

const Home = () => {
  const { tasks, isLoading, error } = useFetchData();
  return (
    <div className='h-[calc(100vh-150px)] sm:h-[calc(100vh-80px)] overflow-scroll'>
    <SencondaryNav first={<RiMenu4Fill className='text-5xl bg-slate-100 rounded-full p-2'/>} second={<BiUserCircle className='text-3xl'/>}/>
    <div className="content my-6">
      <h2 className="text-2xl font-bold capitalize">hello, shubh!</h2>
      <p className="text-lg text-gray-500">Have a nice day!</p>
    </div>

    {/* search bar */}
    <div className="my-6 flex items-center justify-center sm:justify-normal gap-4 grid-cols-2">
    
    <div className="flex items-center justify-center bg-slate-200 px-3 py-2 rounded-full w-fit">
      <input type="text" placeholder='Search'  className='bg-transparent outline-none'/>
      <BiSearch className='text-3xl'/>
    </div>
    <div className="filter-button p-2 rounded-full bg-slate-200">
        <RiEqualizer2Fill className='text-3xl'/>
    </div>

    </div>
    {/* task box */}
    <div className="task-container flex items-center gap-4 my-4">
      <button className='capitalize px-4 py-1.5 shadow rounded-full'>my task</button>
      <button className='capitalize px-4 py-1.5 shadow rounded-full bg-slate-200'>projects</button>
      <button className='capitalize px-4 py-1.5 shadow rounded-full bg-slate-200'>notes</button>
    </div>

    {/* project card */}
    <div className="flex items-center gap-4 overflow-x-scroll">
    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
    </div>
    {/* process */}
    <div className="my-4">
      <h2 className="font-bold text-xl">Process</h2>
      <Process/>
      <Process/>
      {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
    </div>

    </div>
  )
}

export default Home