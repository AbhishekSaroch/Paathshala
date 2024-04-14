import React from 'react'
import HighlightText from '../HomePage/HighLight'
const Quote = () => {
  return (
    <div className='text-[36px]'>
        We are passionate about revolutionizing the way we learn. Our innovative platform
        <HighlightText text={"combines technology,"} />
        <span className='text-brown-300'>
            {" "}
            expertise
        </span>
        and community to create an
        <span className='text-brown-300'>
            {" "}
        unparalleled educational experience.
        </span>
    </div>
  )
}

export default Quote