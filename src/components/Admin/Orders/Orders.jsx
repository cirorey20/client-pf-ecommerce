import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getOrders } from "../../../redux/actions/orders";
import NavAdmin from "../NavAdmin";
import Paginate from "../../Paginate/Paginate";

const initialFilters = {
    state: 'BY STATE',
    dateFrom: '',
    dateTo: ''
}

export function Orders() {
    const navigate = useNavigate();
    const [filters, setFilters] = useState(initialFilters);
    const { search } = useLocation();
    const allOrders = useSelector(
        (state) => state.ordersReducer.orders
      );

      //paginado
    const [currentPage, setCurrentPage] = useState(1);
    const [ordersPage] = useState(4);
    const lastPage = currentPage * ordersPage;
    const firstPage = lastPage - ordersPage;
    const ordersOfNow = allOrders.slice(firstPage, lastPage);

    const paged = (numPag) => {
        setCurrentPage(numPag);
    };

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(search);
        const state = urlSearchParams.get("state");
        console.log("orders",allOrders)
        if (state) setFilters(state);
    }, []);

    function onChangeSelect(e) {
        let url = search[0] === "?" ? search.slice(1) : search;
        let chunckUrl = url.split("&");

        chunckUrl = chunckUrl.filter(
            (v) => !v.includes("state")
        );

        if (e.target.value !== initialFilters.state) {
            if (e.target.name === "state") {
                setFilters({ ...filters, state: e.target.value });
                chunckUrl.push(`state=${e.target.value}`);
            }

        } else {
            setFilters({ ...filters, state: initialFilters.state });
        }
        url = chunckUrl.join("&");
        url = url[0] === "&" ? `?${url.slice(1)}` : `?${url}`;
        navigate(url, { replace: false });
    }

    const dispatch = useDispatch()
    const { orders } = useSelector(state => state.ordersReducer);

    useEffect(() => {
        dispatch(getOrders(search));
    }, [search]);

    return (
        <>
            <div>
                <NavAdmin/>
                <div className="overflow-x-auto grid grid-cols-5">


                    <div className="col-start-5 col-end-6 row-start-1 row-end-2 py-4 place-self-center ">
                        <input type="search" placeholder="Search here ..." className="rounded-full text-white placeholder:text-gray-300 bg-[#644b9c] border-none focus:ring-transparent" />
                    </div>
                    <div className="col-start-2 col-end-5 row-start-1 row-end-2 py-4 place-self-center">
                        <div className="home_pagination">
                            <Paginate
                            ordersPage={ordersPage}
                            allOrders={allOrders.length}
                            paged={paged}
                            currentPage={currentPage}
                            />
                        </div>

                    </div>

                    <div className="col-start-1 col-end-2 flex flex-col p-10 gap-y-4 row-start-2">
                        <select name="state" onChange={onChangeSelect} className="rounded-full text-center block text-white bg-[#644b9c] border-none focus:ring-transparent p-3">
                            <option value={initialFilters.state} >{initialFilters.state}</option>
                            {
                                orders.reduce((prev, curr) => {
                                    if (prev.includes(curr.state)) return prev;
                                    return [...prev, (
                                        <option
                                            value={curr.state}
                                        >{curr.state}</option>

                                    )]
                                }, [])
                            }
                        </select>
                        <div className="rounded text-center block text-white bg-[#644b9c] border-none focus:ring-transparent p-3">
                            <div className="flex items-center justify-center">
                                <div className="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
                                    <label for="floatingInput" className="text-white">From</label>
                                    <input type="date" required
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Select a date" data-mdb-toggle="datepicker" />
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
                                    <label for="floatingInput" className="text-white">To</label>
                                    <input type="date" required
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Select a date" data-mdb-toggle="datepicker" />
                                </div>
                            </div>
                        </div>

                    </div>

                    <table className="col-start-2 col-end-6 m-auto text-sm text-left text-center border-separate border-spacing-y-1.5">
                        <thead className="text-xs text-gray-900 uppercase">
                            <tr>
                                <th scope="col" className="p-3">Order ID</th>
                                <th scope="col" className="p-3">State</th>
                                <th scope="col" className="p-3">Date</th>
                                <th scope="col" className="p-3">Total</th>
                                <th scope="col" className="p-3"></th>
                                <th scope="col" className="p-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ordersOfNow.map(o => (
                                    <tr key={o.id} className="bg-[#f1eff0]">
                                        <td className="text-black rounded-l-full pl-6 py-6">{o.id}</td>

                                        <td className="py-6 px-6">
                                            <select className="block text-white bg-[#644b9c]  px-6 rounded-full  border-none focus:ring-transparent">
                                                <option className="" value="">{o.state.toUpperCase()}</option>
                                            </select>
                                        </td>
                                        <td className="py-6 px-6 text-black">{o.date}</td>
                                        <td className="py-6 px-6 text-black">{'USD '}
                                            {
                                                o.ProductOrders.reduce((prev, curr) => prev + (curr.quantity * curr.Product.price), 0)
                                            }
                                        </td>
                                        <td className="py-4 px-6"><Link className="text-white rounded-full bg-[#007d34] px-2 py-1" to={`/orders/${o.id}`}>PDF</Link></td>
                                        <td className="rounded-r-full pr-6"><Link className="text-white rounded-full bg-[#fe914e] px-2 py-1" to={`/orders/${o.id}`}>CLIENT DATA</Link></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div >
            </div>
        </>
    );
}