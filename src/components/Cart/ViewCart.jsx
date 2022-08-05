import React, {Fragment} from "react";
import { useSelector, useDispatch } from 'react-redux';


const ViewCart = () => {
    const stateCart = useSelector((state) => state.cartReducer.cart)
    console.log(stateCart)
    return (
        <Fragment>
            <div className="mt-5 text-2xl">Index Carrito</div>
            <br /><br />
            <div className="sm:container md:mx-auto bg-[#e2e8f0]">
                <div className="flex justify-center">

                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-40">
                        <tr >
                            <th scope="col" class="py-3 px-6">Product</th>
                            <th scope="col" class="py-3 px-6">Price</th>
                            <th scope="col" class="py-3 px-6">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr> */}

                            {
                                stateCart.map((item,i)=>{
                                    return (
                                        <tr key={i} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td class="py-4 px-6">{item.name}</td>
                                            <td class="py-4 px-6">$ {item.price}.00</td>
                                            <td class="py-4 px-6">{item.quantity}</td>
                                        </tr>
                                    )
                                })
                            }
                        {/* </tr> */}
                    </tbody>
                </table>
                </div>
            </div>
        </Fragment>
    )
}

export default ViewCart;