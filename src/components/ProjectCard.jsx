import React, { useEffect, useRef, useState } from 'react'
import { BiUser } from 'react-icons/bi'

const ProjectCard = ({title,date,tag}) => {
    const randomColors = ['bg-pink-600','bg-blue-600','bg-orange-600','bg-green-600','bg-black'];
    const cardRef = useRef();
    const [randomColor,setRandomColor] = useState('blue');
    useEffect(()=>{
        const getColor = randomColors[Math.floor(Math.random()* randomColors.length)]; 
        setRandomColor(getColor);
        const setColor = `bg-green-600`;
        cardRef.current.classList.add(getColor);
        console.log(setColor);
    },[]);
  return (
    <div ref={cardRef} className={`relative flex-shrink-0 rounded-3xl w-44 p-2 my-6`}>
        <Circle className={'absolute bottom-24 left-28 w-20 h-20'} size={'20'}/>
        <Circle className={'absolute top-2 left-24 w-3 h-3'} size={'3'}/>
        <Circle className={'absolute bottom-20 left-24 w-6 h-6'} size={'6'}/>
        <div className="flex items-center gap-3">
            <BiUser className='text-4xl bg-secondary-white rounded-full p-2'/>
            <h3 className="text-lg font-semibold line-clamp-1 capitalize text-white">project b</h3>
        </div>
        <h2 className="title my-4 capitalize font-bold line-clamp-3 text-white">front end development</h2>
        <div className="date text-slate-300 my-3">september 2024</div>
    </div>
  )
}
const Circle=({size,className})=>{
    return (
        <div className={`${className} rounded-full bg-secondary-white ${(size)? "w-"+size+" "+"h-"+size :""}`}>
        </div>
    )
}

export default ProjectCard