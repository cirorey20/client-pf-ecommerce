import React, {Fragment, useState} from "react";
import { Link } from "react-router-dom";
// import { addProductToCart } from "../../redux/actions/cart";



const Cart = ({stateCart}) => {
    // console.log(countCart)
    return (
        <Fragment>
            <div className="md:container md:mx-auto">
                <Link to={'/cart'}>
                    <div className="float-right">
                        {stateCart.length} Carrito
                    </div>
                </Link>
            </div>
        </Fragment>
    )
}

export default Cart;