import './foods.css'
import photo from './pexels-karthik-reddy-397913.jpg'
import { useState } from "react"
import { Link } from 'react-router-dom'
export function Food ({name,img,price})
{
    return(
        <div className="food">
            <img src={img} alt="failed" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <button>Order</button>
           
        </div>
    )
}

const Categories=()=>{
    const[cat,setCat]=useState('Breakfast')

    const handleCat=(C)=>
    {
        setCat(C)
    }
    const all=[
        {name:'Tea',
        category:'Supper',
        image:photo,
        price:200
        },
        {name:'Koki',
        category:'Lunch',
        image:'breakfast-image',
        price:200
        },
        {name:'Cookies',
        category:'Bites',
        image:'breakfast-image',
        price:200
        },
        {name:'COC',
        category:'Drinks',
        image:'breakfast-image',
        price:200
        },
        {name:'Tea',
        category:'Heavy',
        image:'breakfast-image',
        price:200
        },
        {name:'Tea',
        category:'Breakfast',
        image:'pexels-karthik-reddy-397913.jpg',
        price:200
        },
        {name:'Tea',
        category:'Breakfast',
        image:'breakfast-image',
        price:200
        },
        {name:'Tea',
        category:'Fries',
        image:'breakfast-image',
        price:200
        },
        {name:'Bite me',
        category:'Bites',
        image:'breakfast-image',
        price:200
        }
    ]
    let current=all.filter(food=>food.category===cat)
    
    return(
        <div className="mainCat">
            <div className="buttons">
            <button onClick={()=>{handleCat("Breakfast")}}>Breakfast</button>
            <button onClick={()=>{handleCat("Bites")}}>Bites</button>
            <button onClick={()=>{handleCat("Supper")}}>Supper</button>
            <button onClick={()=>{handleCat("Lunch")}}>Lunch</button>
            <button onClick={()=>{handleCat("Fries")}}>Fries</button>
            <button onClick={()=>{handleCat("Drinks")}}>Drinks</button>
            </div>
            <div className="main">
                <h2>Category: {cat}</h2>
                {current.length===0 && <h2>Empty Category</h2>}
                {current.map((F)=>{
                    
                    return(
                        <div className="aFood">
                        <div className="Sfood">
                          <Link to={'/'}><Food name={F.name} price={F.price} img={F.image}/></Link>
                        </div>
                        <div className="middle"></div>
                        <div className="right"></div>
                        </div>
                    )
                })}
             
            </div>

            
        </div>
    )
}
export default Categories