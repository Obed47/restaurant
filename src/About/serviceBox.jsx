import React from 'react'
import './serviceBox.css'
export default function ServiceBox({servce}) {
  return (
    <div className='serviceBox'> 
        <h3>{servce}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dolorum.</p>
    </div>
  )
}
