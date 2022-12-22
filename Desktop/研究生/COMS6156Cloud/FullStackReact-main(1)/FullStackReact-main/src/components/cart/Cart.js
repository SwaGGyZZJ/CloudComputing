import React from 'react';
import CartDetails from "./cartDetails";

const Cart = (props) => {



    return (
        <form className='navbar'>
            {props.Result.map(item=><CartDetails item={item} key={item[0]}/>)}
        </form>
    );
};

export default Cart;