import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getOrders, getStates, setState } from "../../../redux/actions/orders";
import NavAdmin from "../NavAdmin";
import NavBar from "../../NavBar/NavBar";
import Paginate from "../../Paginate/Paginate";
import ClientData from "./ClientData";

const initialFilters = {
  state: "BY STATE",
};

const initialDate = {
  dateFrom: "",
  dateTo: "",
};

export function Orders() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filters, setFilters] = useState(initialFilters);
  const { search } = useLocation();
  const [save, setSave] = useState([]);
  const [date, setDate] = useState(initialDate);
  const [isClientData, setIsClientData] = useState(false)
  const { orders: allOrders, states } = useSelector(
    (state) => state.ordersReducer
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
    const dateFrom = urlSearchParams.get("dateFrom");
    const dateTo = urlSearchParams.get("dateTo");
    if(dateFrom || dateTo) setDate({dateFrom: dateFrom || '', dateTo: dateTo || ''});
    if (state) setFilters({state});

  }, []);

  useEffect(() => {
    dispatch(getOrders(search));
    dispatch(getStates());
  }, [search]);

  useEffect(() => {
    const newOrders = ordersOfNow.map((o) => ({ ...o, isChange: false }));
    setSave([...newOrders]);
  }, [allOrders, currentPage]);

  function onChangeSelect(e) {
    let url = search[0] === "?" ? search.slice(1) : search;
    let chunckUrl = url.split("&");

    chunckUrl = chunckUrl.filter((v) => !v.includes("state"));

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

  function onChangeDate(e) {
    setDate({ ...date, [e.target.name]: e.target.value });
  }

  function onClickFilter() {
    let url = search[0] === "?" ? search.slice(1) : search;
    let chunckUrl = url.split("&");

    chunckUrl = chunckUrl.filter(
      (v) => !(v.includes("dateFrom") || v.includes("dateTo"))
    );

    if (date.dateFrom !== "" && date.dateTo !== "") {
      chunckUrl.push(`dateFrom=${date.dateFrom}`);
      chunckUrl.push(`dateTo=${date.dateTo}`);
    } else {
      setDate({ ...initialDate });
    }
    url = chunckUrl.join("&");
    url = url[0] === "&" ? `?${url.slice(1)}` : `?${url}`;
    if (url === search) return dispatch(getOrders(search));
    navigate(url, { replace: false });
  }

  function onClickFilterReset() {
    let url = search[0] === "?" ? search.slice(1) : search;
    let chunckUrl = url.split("&");

    chunckUrl = chunckUrl.filter(
      (v) => !(v.includes("dateFrom") || v.includes("dateTo"))
    );

    setDate({ ...initialDate });
    url = chunckUrl.join("&");
    url = url[0] === "&" ? `?${url.slice(1)}` : `?${url}`;
    if (url === search) return dispatch(getOrders(search));
    navigate(url, { replace: false });
  }

  function onChangeState(e, idOrder) {
    const newOrders = ordersOfNow.map((o) => {
      o = { ...o };
      if (o.id === idOrder) {
        if (o.state !== e.target.value) {
          o.state = e.target.value;
          o.isChange = true;
        } else {
          o.state = e.target.value;
          o.isChange = false;
        }
      }
      return o;
    });

    setSave([...newOrders]);
  }

  async function onClickSave(idOrder, email, name, last_name) {
    const { id, state } = save.find((o) => o.id === idOrder);
    //console.log(email);
    await dispatch(setState(id, state, email, name, last_name));
    setSave([]);
    dispatch(getOrders(search));
  }

  function onSearch(e) {
    // if (e.key === "Enter") {
      if (e.target.value.trim() === "") {
        navigate("");
      } else {
        navigate(
          `?order=${e.target.value.trim()}`
        );
      }
    // }
  }


  const clientData = () => {
    setIsClientData(!isClientData);
  }


  return (
    <>



      <div>
        {localStorage.getItem("rol") === "user" ? <NavBar /> : <NavAdmin />}
        <h1 
      className="rounded-full text-white placeholder:text-gray-300 bg-[#644b9c] border-none focus:ring-transparent mr-32 ml-32 text-7xl">
        ORDERS
        </h1>
        <br/>
        <div className="overflow-x-auto grid grid-cols-5">
          <div className="col-start-5 col-end-6 row-start-1 row-end-2 py-4 place-self-center ">
            <input
              type="search"
              placeholder="Search #order,email here..."
             onChange={onSearch}
              className="rounded-full text-white placeholder:text-gray-300 bg-[#644b9c] border-none focus:ring-transparent"
            />
          </div>
          <div className="col-start-2 col-end-5 row-start-1 row-end-2 py-4 place-self-center">
            <div className="home_pagination">
              <Paginate
                productsPage={ordersPage}
                allProducts={allOrders.length}
                paged={paged}
                currentPage={currentPage}
              />
            </div>
          </div>

          <div className="col-start-1 col-end-2 flex flex-col p-10 gap-y-4 row-start-2">
            <select
              name="state"
              onChange={onChangeSelect}
              className="rounded-full text-center block text-white bg-[#644b9c] border-none focus:ring-transparent p-3"
              value={filters.state}
            >
              <option value={initialFilters.state}>
                {initialFilters.state}
              </option>
              {states.map((state) => (
                <option value={state}>{state.toUpperCase()}</option>
              ))}
            </select>
            <div className="rounded text-center block text-white bg-[#644b9c] border-none focus:ring-transparent p-3">
              <div className="flex items-center justify-center">
                <div
                  className="datepicker relative form-floating mb-3 xl:w-96"
                  data-mdb-toggle-button="false"
                >
                  <label htmlFor="floatingInput" className="text-white">
                    From
                  </label>
                  <input
                    type="date"
                    onChange={onChangeDate}
                    value={date.dateFrom}
                    name="dateFrom"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Select a date"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div
                  className="datepicker relative form-floating mb-3 xl:w-96"
                  data-mdb-toggle-button="false"
                >
                  <label htmlFor="floatingInput" className="text-white">
                    To
                  </label>
                  <input
                    type="date"
                    onChange={onChangeDate}
                    name="dateTo"
                    value={date.dateTo}
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Select a date"
                    data-mdb-toggle="datepicker"
                  />
                </div>
              </div>
              <button
                onClick={onClickFilter}
                className="px-3 bg-green-600 rounded-full"
              >
                Flter
              </button>
              <button
                onClick={onClickFilterReset}
                className="px-3 bg-green-600 rounded-full"
              >
                Reset
              </button>
            </div>
          </div>

          <table className="col-start-2 col-end-6 m-auto text-sm text-left text-center border-separate border-spacing-y-1.5">
            <thead className="text-xs text-gray-900 uppercase">
              <tr>
                <th scope="col" className="p-3">
                  Order ID
                </th>
                <th scope="col" className="p-3">
                  State
                </th>
                <th scope="col" className="p-3">
                  Email
                </th>
                <th scope="col" className="p-3">
                  Date
                </th>
                <th scope="col" className="p-3">
                  Total
                </th>
                <th scope="col" className="p-3"></th>
                <th scope="col" className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              {(save?.length === 0) ? (<tr className="bg-[#f1eff0]"><td className="text-black rounded-full pl-6 py-6" colSpan="7">No orders</td></tr>) : save?.map((o) => (
                <>
                <tr>
                <td>
                  
                  {
                    isClientData && <ClientData addressOrder={o.address_order} user={o.User} setIsClientData={setIsClientData} />
                  }
                </td>
                </tr>
                  <tr key={o.id} className="bg-[#f1eff0]">
                    <td className="text-black rounded-l-full pl-6 py-6">
                      {o.id}
                    </td>

                    <td className="py-6 px-6">
                      <select
                        value={o.state}
                        onChange={(e) => onChangeState(e, o.id)}
                        className="block text-white bg-[#644b9c]  px-6 rounded-full  border-none focus:ring-transparent"
                      >
                        {states.map((state) => (
                          <option value={state}>{state.toUpperCase()}</option>
                        ))}
                      </select>

                      {save?.find((s) => s.id === o.id)?.isChange && (
                        <button
                          onClick={() =>
                            onClickSave(
                              o.id,
                              o.User.email,
                              o.User.name,
                              o.User.last_name
                            )
                          }
                          className="rounded bg-green-500 p-1 mt-0.5"
                        >
                          SAVE
                        </button>
                      )}
                    </td>

                    <td className="py-6 px-6 text-black">{o.User.email}</td>

                    <td className="py-6 px-6 text-black">
                      {`${new Date(o.date).getDate()}-${new Date(o.date).getMonth() + 1
                        }-${new Date(o.date).getFullYear()} ${new Date(
                          o.date
                        ).getHours()}:${new Date(o.date).getMinutes()}`}
                    </td>
                    <td className="py-6 px-6 text-black">
                      {"USD "}
                      {o.ProductOrders?.reduce(
                        (prev, curr) => prev + curr.quantity * curr.price,
                        0
                      )}
                    </td>
                    <td className="py-4 px-6">
                      <Link
                        className="text-white rounded-full bg-[#007d34] px-2 py-1"
                        to={`/orders/${o.id}`}
                      >
                        PDF
                      </Link>
                    </td>
                    <td className="rounded-r-full pr-6">
                      <button
                        className="text-white rounded-full bg-[#fe914e] px-2 py-1"
                        onClick={clientData}>
                        CLIENT DATA
                      </button>

                    </td>
                  </tr>
                </>
              )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
