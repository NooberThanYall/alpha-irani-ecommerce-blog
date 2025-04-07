import React from 'react'

const Notification = ({children}) => {
  return (
    <div className='flex justify-center items-center w-80 h-24 bg-white absolute top-40 right-32 rounded-md border-t-green-500 border-4 animate-fadeInOut'>{children}</div>
  )
}

export default Notification