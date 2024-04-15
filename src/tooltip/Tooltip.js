import React from 'react'

export const Tooltip = ({children, text}) => {
  return (
    <div className='relative group'>
        {children}
        <div className='hidden text-sm cursor-pointer absolute left-[0%] group-hover:block text-white bg-blue-700 rounded-md p-1 whitespace-nowrap'>
            {text || "Not set"}
        </div>
    </div>
  )
}
