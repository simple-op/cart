import React from 'react';
import CartItem from './CartItem';
import Navbar from "./nav"

 const Cart=(props)=> {
  
  
    const  products  = props.product;
    // console.log(this.stat.products.length)
    return (
      <div> 
       
      <div className="cart">
       
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={props.onIncreaseQuantity}
              delete={props.delete}
              onDecreaseQuantity={props.onDecreaseQuantity}
             

            />
          )
        })}
      </div>
      </div>
    );
  
}

export default Cart;