import './contact.css'
import { Link } from 'react-router-dom'
export default function ContactPage()
{
    return(
        <div className="mainContact">
            <h1>Contact Us</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Sit minus qui illo nam eaque nobis placeat similique ratione,
                 accusamus sunt explicabo quam quisquam excepturi error.
                  Aut pariatur odit officiis quo.</p>
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