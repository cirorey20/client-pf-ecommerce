import React, {Fragment, useEffect} from "react";
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { detailProduct } from '../../redux/actions/products';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer.jsx";

const Details = () => {

    const dispatch = useDispatch();
    const details = useSelector((state)=> state.productReducer.productDetail)
    let {id} = useParams()
    console.log(details)
    useEffect(()=>{
        dispatch(detailProduct(id));
    }, [dispatch, id])

//lg:h-80
    return (
        <Fragment>
            <NavBar />
            <br />
            <br />

            <h1 className="text-6xl">{details.name}</h1>
            <br />

            <div className=" max-w-3xl h-96 mx-auto px-4 sm:px-6 bg-[#e2e8f0]">
                <div className=" grid lg:grid-cols-3"> 
                    <div className="mt-8 h-80 m-5 bg-white pr-30 border-2 w-54">
                        <div className="lg:h-40 m-10">
                            <img
                                src={details.image}
                                alt="NOT_FOUND"
                                className="lg:w-full lg:h-full"
                            />
                        </div>
                    </div>
                    <div className="pl-8 pr-8 h-80 m-8 px-4 bg-[#f1f5f9] w-96  border-gray border-2">
                            <div className="bg-white relative m-5 group h-69">
                                <div>
                                    <h3 className="mx-16 my-8 justify-self-end text-2xl text-gray-700 italic w-full ">
                                        <a href="#">
                                            <span aria-hidden="true"/>
                                            {  details.name}
                                        </a>

                                    </h3>
                                </div>
                                <div>
                                    <h3 className="mx-16 justify-self-end text-2xl text-gray-700 italic w-full ">
                                        <p>
                                        <a href="#">
                                            <span aria-hidden="true" className=" grid justify-items-end absolute inset-0 pr-1" />
                                            {details.description }
                                        </a>
                                        </p>
                                    </h3>
                                </div>
                                <div>
                                    <h3  className="mx-16 justify-self-end text-2xl text-gray-700 italic w-full">
                                        <span aria-hidden="true" className="bg-white mx-16 justify-self-end text-2xl text-gray-700 italic"/>
                                        <p> $ { details.price}</p>
                                    </h3>
                                </div>
                                <div className="pb-3 text-gray-700 italic w-full mb-2 ml-16">
                                    <button  className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold w-32 py-2 px-4 rounded">
                                         Buy
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Details;

//sm:grid-cols-2 // cuando la pantalla esta a la mitad se achica
// return ( xl:gap-x-8 para el ancho
//     <Fragment>
//         <NavBar />
//         <h1 className="text-6xl">{details.name}</h1>
//         <br />
//         <br />

//         <div className="md:container md:mx-auto bg-[#e2e8f0]">
//             <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//                 <div className="relative m-5 group ">

//                     <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
//                         <img
//                             src={details.image}
//                             alt="NOT_FOUND"
//                             className="w-full h-full object-center object-cover lg:w-full lg:h-full"
//                         />
//                     </div>

//                     <div className="mt-4 flex justify-between">
//                         <div>
//                             <h3 className="text-sm text-gray-700">
//                                 <a href="#">
//                                     <span aria-hidden="true" className="absolute inset-0" />
//                                     {details.name}
//                                 </a>

//                             </h3>
//                         </div>

//                     </div>

//                 </div>
//                 <div className=" relative m-5 group ">
//                     <div className="mt-4 flex justify-between">
//                         <div>
//                             <h3 className="text-sm text-gray-700">
//                                 <a href="#">
//                                     <span aria-hidden="true" className="absolute inset-0" />
//                                     {details.description}
//                                 </a>

//                             </h3>
                            
//                         </div>
//                         <p className="text-sm font-medium text-gray-900">$ {details.price}</p>

//                     </div>
//                     <button  className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                         Buy
//                     </button>
//                 </div>
//             </div>
//         </div>
//         <Footer />
//     </Fragment>
// )