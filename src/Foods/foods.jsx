import './foods.css'
import Food from "./food"
import food1 from './pexels-karthik-reddy-397913.jpg'
import food2 from './bg.jpg'
const Foods=()=>
{
    return (
        <div className="foods">
            <Food image={food1} title={"Breakfast"}/>
            <Food image={food2} title={"Lunch"}/>
            <Food image={food1} title={"Bites"}/>
            <Food image={food1} title={"Drinks"}/>
            <Food image={food1} title={"Heavy"}/>
        </div>
    )
}
export default Foods;