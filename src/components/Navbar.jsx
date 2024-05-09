import React from 'react'
import { BiBell, BiSearch } from 'react-icons/bi'
import { FiHome } from 'react-icons/fi'
import { HiOutlineCalendar } from 'react-icons/hi'
import { Link } from 'react-router-dom'

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
    <nav className='bg-white flex items-center justify-between border sm:border-0 py-2 px-4 fixed left-0 sm:left-auto bottom-0 w-full max-w-96 sm:max-w-[470px]'>
        {
            nav.map(item=>
                // <Link key={item.title} to='/'>{item.title}</Link>
                <Link className={`flex flex-col items-center justify-center capitalize`}  key={item.title} to={item.link}>
                    {item.icon}
                    <span>{item.title}</span>
                    </Link>
            )
        }
        
    </nav>
  )
}

export default Navbar