import React from 'react';

const Cart = (props) => {
    const {cart} = props;
   
    let name = [];
    for(const product of cart){
        name =[...name ,product.name]
    }
    return (
        <div>
            <h1 >selected product:</h1>
            <p> hello </p>
            {
                name.map(name => <h3 > {name} </h3>)
          
            }


             
        </div>
    );
};

export default Cart;