import React from 'react'
import { Link } from 'react-router-dom'

const SencondaryNav = ({first,second}) => {
  return (
    <div className='flex items-center justify-between px-1'>
        {
            first
        }
        {
            second
        }
        
    </div>
  )
}

export default SencondaryNav