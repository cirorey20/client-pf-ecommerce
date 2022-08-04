import React, { Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/products';
import { useEffect } from "react";

const Home = () => {

    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.productReducer.products)

    useEffect(() => {
        dispatch(getProducts());
        console.log(allProducts);
    }, [dispatch])


    return (
        <Fragment>
            <h1 className="text-6xl">Universal Music</h1>
            <br />
            <br />

            <div className="md:container md:mx-auto bg-[#e2e8f0]">
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                    {

                        allProducts.length <= 0 ?
                            <div>NO HAY PRODUCTOS...</div>
                            :
                            allProducts.map((e, i) => {
                                if (e.enable === true) {
                                    return (
                                        <div key={i} className="  ">
                                            <div className="relative m-5 group ">

                                                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                                    <img
                                                        src={e.image}
                                                        alt="NOT_FOUND"
                                                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                                    />
                                                </div>
        
                                                <div className="mt-4 flex justify-between">
                                                    <div>
                                                        <h3 className="text-sm text-gray-700">
                                                            <a href="#">
                                                                <span aria-hidden="true" className="absolute inset-0" />
                                                                {e.name } 
                                                            </a>
                                                            
                                                        </h3>
                                                        <p className="mt-1 text-sm text-gray-500">Stock {e.stock}</p>
                                                    </div>
                                                    <p className="text-sm font-medium text-gray-900">${e.price}</p>
                                                    
                                                </div>
                                            </div>
                                            <button class="mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                Add Cart
                                            </button>
                                        </div>
                                    )
                                } 
                                
                            })
                        }

                </div>
            </div>
        </Fragment>
    )
}

export default Home;

/*
    allProducts.map((e, i) => {
        return(
            <div key={i} className="group relative m-5">

                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                    src={e.image}
                    alt="NOT_FOUND"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                </div>

                <div className="mt-4 flex justify-between">
                    <div>
                    <h3 className="text-sm text-gray-700">
                        <a href="#">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {e.name}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Stock</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">${e.price}</p>
                </div>
            </div>
        )
    })

*/