import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
export default function Footer() {
  return (
    <div className='mainFooter'>
        <div className="titles">
        <h3>Thanks for the Visit</h3>
        <h4>Visit Our Sicial Media Plaforms</h4>
        </div>
        <div className="links">
                <Link to={'/contact'} className='fa fa-facebook'></Link>
                <Link to={'/contact'} className='fa fa-whatsapp'></Link>
                <Link to={'/contact'} className='fa fa-instagram'></Link>
                <Link to={'/contact'} className='fa fa-github'></Link>
                <Link to={'/contact'} className='fa fa-twitter'></Link>
                
            </div>
    </div>
  )
}
