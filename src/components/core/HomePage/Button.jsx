import React from 'react'
import { Link } from 'react-router-dom'


// Takes 3 Props as children,linkto and active as well
const Button = ({children,linkto,active}) => {
  return (
    <Link to={linkto}>
        <div className={`text-center  text-[13px] px-6 py-3 rounded font-bold
        ${active ? "bg-yellow-50 text-black" : "bg-richblack-800"}
        `}>
        {children}
        </div>
    </Link>
  )
}

export default Button