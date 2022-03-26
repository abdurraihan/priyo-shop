import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart , choseAgain} = props;

    const [cartData , setCartData] = useState({})

    const chose = () =>
    {
      
    const choseRandom = Math.floor( Math.random() * cart.length ) ;
   
    setCartData( cart[choseRandom])

    }
   
    let name = [];
    for(const product of cart){
        name =[...name ,product.name]
    }

  
        
    

    return (
        <div>
            <h1 >selected product:</h1>
           
            {
                cart.map(ct => <h3> {ct.name} </h3>)
          
            }

            
             <h2> { cartData.name}</h2>  
            
               

          <button onClick={chose}  className='btn-card'> chose 1 for me</button>

          <button onClick={choseAgain} className='chose-again'>
              chose again
          </button>

             
        </div>
    );
};

export default Cart;