import './food.css'
export default function Food({image,title})
{
    return(
    <div className="Food">
        <img src={image} alt="failed" />
        <h2>{title}</h2>
    </div>
    );
}