import './order.css'

const Order=()=>{
    return(

        <div className="mainOrder">
            <h3 className='title'>Order Form</h3>
            <div className="fields">
                <div className="names">
                <input type="text" placeholder='Name' required/>
                <input type="text" placeholder='Surname' required/>
                </div>
                
                <input type="email" maxLength={'5'} placeholder='Email:' required/>
                <select name="" id="">
                    <option value="">Eru & fufu</option>
                    <option value="">Cookies</option>
                    <option value="">Chicken and Chips</option>
                    <option value="">Bites</option>
                    <option value="">Roasted Fish</option>
                    <option value="">Poulet Pane</option>
                </select>
                <input type="text" placeholder='Number of plates' required/>
                <input type="text" placeholder='Adress' required/>
                <label htmlFor="delivery"></label>
                <select name="delivery" placeholder='desired delivery?'>
                    <option value="">yes</option>
                    <option value="">no</option>
                </select>
            </div>
        </div>
 )}
 export default Order;