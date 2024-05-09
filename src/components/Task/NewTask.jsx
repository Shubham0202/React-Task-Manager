import React, { useRef, useState } from 'react'
import axios from 'axios';
import SencondaryNav from '../SencondaryNav'
import { CgChevronLeft } from 'react-icons/cg'
import { BiSearch } from 'react-icons/bi'

export const NewTask = () => {
    const categories =['marketing','dev','HTML','project','homework'];

    const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(''); // For managing selected category
  const [errorMessage, setErrorMessage] = useState(''); // For handling errors

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title || !date || !startTime || !endTime || !selectedCategory) {
        setErrorMessage('Please fill in all required fields.');
        return;
      }
  
      try {
        const response = await axios.post('http://127.0.0.1:5000/add_task', {
          title,
          date,
          startTime,
          endTime,
          description,
          selectedCategory,
        });
  
        if (response.status === 201) {
          // Task added successfully, clear form and display success message (optional)
          setTitle('');
          setDate('');
          setStartTime('');
          setEndTime('');
          setDescription('');
          setSelectedCategory('');
          console.log('Task added successfully!');
        } else {
          throw new Error('Unexpected response status code');
        }
      } catch (error) {
        setErrorMessage(error.message); // Display error message to user
      }
    };

    // 
    const handleCategoryClick = (e,category) => {
        
        const catBg = 'bg-red-100';
        const catClr = 'text-red-400'
           if(e.target.getAttribute('isselected') == 'true')
           {
            setSelectedCategory(category);
               e.target.classList.remove(catBg,catClr);
               e.target.setAttribute('isselected',false);
            }
            else
            {
                setSelectedCategory('');
                e.target.classList.add(catBg,catClr);
                e.target.setAttribute('isselected',true);
            }
      };
  return (
    <div className='h-[calc(100vh-150px)] sm:h-[calc(100vh-80px)] overflow-scroll'>
   
    <SencondaryNav first={<CgChevronLeft className='text-4xl'/>} second={<BiSearch className='text-4xl'/>}/>
    <h2 className="text-3xl font-bold capitalize my-4">New task</h2>
     
    <form onSubmit={handleSubmit}>
      <label htmlFor="title" className="my-4 block">
        <span className="text-lg capitalize text-gray-700 block">Title</span>
        <input
          id="title"
          type="text"
          className="block mt-1 w-full font-semibold capitalize border-b-2 outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label htmlFor="date" className="my-4 block">
        <span className="text-lg capitalize text-gray-700 block">Date</span>
        <input
          id="date"
          type="date"
          className="block mt-1 w-full font-semibold capitalize border-b-2 outline-none"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      {/* Start and End Time */}
      <div className="grid grid-cols-2 gap-4">
        <label htmlFor="stime" className="my-4 block">
          <span className="text-lg capitalize text-gray-700 block">Start Time</span>
          <input
            id="stime"
            type="time"
            className="block mt-1 w-full font-semibold capitalize border-b-2 outline-none"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
        </label>
        <label htmlFor="time" className="my-4 block">
          <span className="text-lg capitalize text-gray-700 block">End Time</span>
          <input
            id="time"
            type="time"
            className="block mt-1 w-full font-semibold capitalize border-b-2 outline-none"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
        </label>
      </div>
      {/* Description */}
      <label htmlFor="desc" className="my-4 block">
        <span className="text-lg capitalize text-gray-700 block">Description</span>
        <textarea
          id="desc"
          type="text"
          className="block mt-1 w-full font-semibold border-b-2 outline-none resize-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

        {/* category */}
        <div className="my-4">
            <span className='text-lg mb-2 capitalize text-gray-700 block'>category</span>
            <div className="cat-list flex items-center gap-4 flex-wrap">

            {
                categories.map((item)=>{
                    return  <p key={item} 
                    onClick={(e)=>handleCategoryClick(e,item)}
                    isselected='false'
                     className="cursor-default sm:cursor-pointer capitalize font-semibold px-6 py-2 rounded-xl shadow bg-slate-200 w-fit">{item}</p>
                })
            }
            </div>
        </div>
            <div className="text-center my-3">
            <button className='px-8 py-3 rounded-xl shadow shadow-blue-500 bg-blue-700 capitalize text-white font-bold max-w-full w-96'>create new task</button>
            </div>
     </form>
    </div>
  )
}
