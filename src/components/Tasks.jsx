import React, { useEffect, useState } from 'react'
import SencondaryNav from './SencondaryNav'
import { BiPlus, BiSearch } from 'react-icons/bi'
import { CgChevronLeft } from 'react-icons/cg'
import { Calender } from './Calender'
import Process from './HomeComponents/Process'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Tasks = () => {
    const [tasks,setTasks] = useState([]);
    async function fetchData() {
        try {
          const response = await axios.get('http://127.0.0.1:5000/data');
      
          if (response.status === 200) {
            // Assuming the response is a string, attempt to parse it as JSON
            let tasks;
              tasks = response.data;
            setTasks(tasks);
            console.log('Tasks:', tasks);
      
          } else {
            console.error('Error fetching data:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    useEffect(()=>{
        fetchData();
        },[])
  return (
    <div className='h-[calc(100vh-150px)] sm:h-[calc(100vh-80px)] overflow-scroll'>
        <SencondaryNav first={<CgChevronLeft className='text-4xl'/>} second={<BiSearch className='text-4xl'/>}/>
        <h2 className="text-3xl font-bold capitalize my-4">march 2024</h2>
        <Calender/>

        <div className="tasks my-4">
        <h2 className="font-bold text-xl">Process</h2>
        {
        /* show all tasks */
        tasks.map(
            (task)=> <Process taskName={task.title} description={task.description} />
        )
        }
        
        </div>

        {/* add task button  */}
        <Link to='../newTask' className="button shadow shadow-slate-400 rounded-full fixed bottom-28 left-1/2 translate-x-[-50%] translate-y-1/2">
            <BiPlus className='text-6xl text-blue-700'/>
        </Link>
    </div>
  )
}
