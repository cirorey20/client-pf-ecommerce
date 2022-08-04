import React, {Fragment, useEffect} from "react";
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { detailProduct } from '../../redux/actions/products';

const Details = () => {

    const dispatch = useDispatch();
    const details = useSelector((state)=> state.productReducer.productDetail)
    let {id} = useParams()
    
    useEffect(()=>{
        dispatch(detailProduct(id));
    }, [dispatch, id])


    return (
        <Fragment>
            <NavBar />
            <h1 className="text-6xl">{details.name}</h1>
            <br />
            <br />

            <div className="md:container md:mx-auto bg-[#e2e8f0]">
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    <div className="relative m-5 group ">

                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img
                                src={details.image}
                                alt="NOT_FOUND"
                                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                            />
                        </div>

                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                    <a href="#">
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {details.name}
                                    </a>

                                </h3>
                            </div>

                        </div>

                    </div>
                    <div className=" relative m-5 group ">
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                    <a href="#">
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {details.description}
                                    </a>

                                </h3>
                                
                            </div>
                            <p className="text-sm font-medium text-gray-900">$ {details.price}</p>

                        </div>
                        <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Buy
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Details;