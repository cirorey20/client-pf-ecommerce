import React from "react";
import { Fragment } from "react";

const Details = () => {
    return (
        <Fragment>
            <h1 className="text-6xl">Detail Product</h1>
            <br />
            <br />

            <div className="md:container md:mx-auto bg-[#e2e8f0]">
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    <div className="relative m-5 group ">

                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img
                                src="https://www.el-atril.com/orquesta/Instrumentos/imagenes/guitarra.jpg"
                                alt="NOT_FOUND"
                                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                            />
                        </div>

                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                    <a href="#">
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        PRODUCT
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
                                        Description
                                    </a>

                                </h3>
                                
                            </div>
                            <p className="text-sm font-medium text-gray-900">$PRODUCT</p>

                        </div>
                        <button class="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Buy
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Details;