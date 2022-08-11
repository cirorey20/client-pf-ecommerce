import React, {Fragment, useEffect} from "react";
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { detailProduct } from '../../redux/actions/products';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer.jsx";
import {Link} from "react-router-dom";


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
           <div className="flex justify-center italic">
             <div className="relative w-96 border-x-2">
                <h1 className="text-6xl">{details.name}</h1>
              </div>
           </div>
           <br />

             <div className=" max-w-4xl h-100 mx-auto m-8 sm:px-6 bg-white border-x-4 border-gray ">
                 <div className=" grid lg:grid-cols-3"> 
                   <div className="mt-8 h-80 bg-white w-80 border-r-2">
                         <div className=" mb-8 ml-4">
                             <img
                                src={details.image}
                                alt="NOT_FOUND"
                                className="lg:w-70 lg:h-80"
                             />
                         </div>
                    </div>
                    <div className="pl-8 pr-8 h-80 m-8 px-4 w-96 border-gray w-96">
                           <div className="bg-white relative m-5 group h-69">
                               <div>
                                   <h3 className="mx-16 my-8 justify-self-end text-2xl text-gray-700 italic w-full ">
                                       <a href="#">
                                           <span aria-hidden="true"/>
                                           { details.name}
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
                                <h3 className="mx-16 justify-self-end text-2xl text-gray-700 italic w-full">
                                  <span aria-hidden="true" className="bg-white mx-16 justify-self-end text-2xl text-gray-700 italic"/>
                                  <p> $ { details.price}</p>
                                </h3>
                            </div>
                            <div className="">
                                <Link to={"/product/carrito"}>
                                    <button
                                        className="absolute mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold w-32 py-2 rounded"
                                    >
                                          Carrito 
                                    </button>
                                </Link>
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