import { Link } from 'react-router-dom'
import './about.css'
import Footer from '../Footer/Footer'
import image from './image.jpg'
import ServiceBox from './serviceBox'
export default function AboutPage()
{
    return(
        <div className="mainAbout">
            <div className="tit">
            <h1>About Us</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Cumque eum minima, iste sapiente molestiae omnis,
                  explicabo aspernatur et dolor tenetur repellat impedit
                   tempora minus incidunt amet! Alias consequatur mollitia laborum.</p>
                   <div className="logo">
                    <Link className='fa fa-bug'></Link>
                   </div>
                   <Link to={'/foods'}>Back To Home</Link>
                   </div>
                   <img src={image} alt=",," />
                   <h2>Services</h2>
                   <div className="services">
                        <ServiceBox servce={"Clean"}/>
                        <ServiceBox servce={"Tranquil"}/>
                        <ServiceBox servce={"Quiet"}/>
                        <ServiceBox servce={"Sweet"}/>


                   </div>
                   <Footer/>
        </div>
    )
}