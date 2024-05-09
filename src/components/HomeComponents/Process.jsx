import React from 'react'
import { FaRegFileAlt } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
const Process = ({taskName,description}) => {
  return (
    <div className="p-4 rounded-2xl my-4 bg-slate-200">
      <FaRegFileAlt/>
      <div className="file-container flex items-center justify-between">
        <div className="file-info mt-2">
          <h3 className="font-semibold line-clamp-1 capitalize">{taskName}</h3>
          <p className='text-gray-600 line-clamp-2'>{description}</p>
          <p className="text-zinc-600">2 days ago</p>
        </div>
        <BsThreeDotsVertical className='text-5xl p-3 rounded-full hover:bg-slate-100'/>
      </div>
    </div>
  )
}

export default Process