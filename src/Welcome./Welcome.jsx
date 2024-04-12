import './Welcome.css'
import { Link } from 'react-router-dom';
 function Welcome()
{
    return(
        <div className="mainWelcome">
            <div className="texts">
            <h1 className="title">Welcome To Hella's Restaurant</h1>
            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Suscipit obcaecati, modi, at odio recusandae omnis quo vero amet 
             totam numquam repudiandae sed quasi quos blanditiis!
            Culpa dolore optio itaque voluptates?</p>
            <Link to='/foods'>
            <button>Hungry?</button>
            </Link>
            </div>
        </div>
    )
}
export default Welcome;