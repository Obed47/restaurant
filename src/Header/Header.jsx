import './Header.css'
import { Link } from 'react-router-dom'
export default function Header()
{
    return(
        <div className="mainHeader">
             <Link to="/">
            <div className="title">Apeti<span style={{color:'red'}}>Max</span> <span id='bug' className='fa fa-cutlery'></span></div>
            </Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}