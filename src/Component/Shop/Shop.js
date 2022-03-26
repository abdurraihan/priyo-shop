import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

const [products , setProduct] = useState([]);
const [cart , setCart] = useState([]);

useEffect( 
    () =>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data =>  setProduct(data));
    }
     ,[])

    const handleAddToCart = (product) =>{

        const newCart = [...cart, product]

        setCart(newCart);
    }

    return (
        <div className='shop-container'>

            <div className='product-section'>
          
          {
              products.map( product => <Product product={product} key={product.id}handleAddToCart={handleAddToCart}> </Product>)

          }


            </div>
            

        <div className='cart-section'>
         
         <Cart cart={cart} > </Cart>

        </div>



        </div>
    );
};

export default Shop;