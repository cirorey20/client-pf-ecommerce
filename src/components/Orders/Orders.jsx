import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getOrders } from "../../redux/actions/orders";

export function Orders() {

    const dispatch = useDispatch()
    const { orders } = useSelector(state => state.ordersReducer);

    useEffect(() => {
        dispatch(getOrders());
    }, []);

    return (
        <div className="overflow-x-auto relative">
            <table className="w-full rounded shadow-md text-sm text-left text-gray-500 text-center">
                <thead className="text-xs text-gray-900 uppercase border bg-gray-200">
                    <tr>
                        <th scope="col" className="p-3">Order ID</th>
                        <th scope="col" className="p-3">Products</th>
                        <th scope="col" className="p-3">Client</th>
                        <th scope="col" className="p-3">State</th>
                        <th scope="col" className="p-3">Date</th>
                        <th scope="col" className="p-3">Price</th>
                        <th scope="col" className="p-3">Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(o => (
                            <tr key={o.id} className="bg-white dark:bg-gray-800 border-t">
                                <td className="py-4 px-6">{o.id}</td>
                                <td className="py-4 px-6 flex gap-1 justify-center flex-wrap">
                                    {
                                        o.ProductOrders.map(p => (
                                            <span key={p.Product.id}>{p.Product.name}</span>
                                        ))
                                    }
                                </td>
                                <td className="py-4 px-6">{o.User.email}</td>
                                <td className="py-4 px-6">{o.state}</td>
                                <td className="py-4 px-6">{o.date}</td>
                                <td className="py-4 px-6">{'USD '} 
                                    {
                                        o.ProductOrders.reduce((prev,curr) => prev+(curr.quantity * curr.Product.price) ,0)
                                    }
                                </td>
                                <td className="py-4 px-6"><Link className="text-blue-600" to={`/orders/${o.id}`}>View</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {console.log(orders)}
            Esta es la pagina de ordenes
        </div >
    );
}