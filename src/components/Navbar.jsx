import React from 'react'
import { BiBell, BiSearch } from 'react-icons/bi'
import { FiHome } from 'react-icons/fi'
import { HiOutlineCalendar } from 'react-icons/hi'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    const iconSize = '3xl';
    const nav = [
        {
            title:'home',
            icon: <FiHome className={`text-${iconSize}`}/>,
            link: '/'
        },
        {
            title:'Task',
            icon: <HiOutlineCalendar className={`text-${iconSize}`}/>,
            link: 'task'
        },
        {
            title:'Notifications',
            icon: <BiBell className={`text-${iconSize}`}/>,
            link:'notifications'
        },
        {
            title:'Search',
            icon: <BiSearch className={`text-${iconSize}`}/>,
            link: 'search'
        }
    ]
  return (
    <nav className='bg-white flex items-center justify-between border sm:border-0 py-2 px-4 rounded-lg w-full sticky bottom-0'>
        {
            nav.map(item=>
                <NavLink key={item.title} to={item.link} className={({isActive})=>`${(isActive)? 'text-blue-700':'text-black'} font-semibold flex flex-col items-center justify-center capitalize`}>
                    {item.icon}
                    <span>{item.title}</span>
                    </NavLink>
            )
        }
        
    </nav>
  )
}

export default Navbar