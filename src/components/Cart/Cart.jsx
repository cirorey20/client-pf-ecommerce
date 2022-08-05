import React, {Fragment} from "react";
import { Link } from "react-router-dom";

const Cart = ({productsActuales}) => {
    console.log(productsActuales)
    return (
        <Fragment>
            <div className="md:container md:mx-auto">
                <Link to={'/cart'}>
                    <div className="float-right">Carrito</div>
                </Link>
            </div>
        </Fragment>
    )
}

export default Cart;