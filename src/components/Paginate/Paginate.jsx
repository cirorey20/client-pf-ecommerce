import React, {Fragment} from "react";

const Paginate = ({productsDePagina, allProducts, paged}) => {

    const pageNumbers = [];
    for(let i=1; i<=Math.ceil(allProducts/productsDePagina); i++){
        
        pageNumbers.push(i);
    }


    return (
        <Fragment>

            <ul className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                        Prev 
                </a>
                          {
                    pageNumbers?
                    pageNumbers.map((num, index) =>  (
                        <li key={index}>
                            <a 
                                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50" 
                                href={'#'+num} 
                                onClick={()=>paged(num)}>{num}
                            </a>
                        </li>
                    ))
                    :
                    <span></span>
                }
                <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                    Next 
                </a>
            </ul>
        </Fragment>
    )
}

export default Paginate;
