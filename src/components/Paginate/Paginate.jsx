import React, {Fragment} from "react";

const Paginate = ({productsPage, allProducts, paged, currentPage}) => {

    const pageNumbers = [];
    for(let i=1; i<=Math.ceil(allProducts/productsPage); i++){
        
        pageNumbers.push(i);
    }


    return (
        <div className="">
        <nav>
          <ul className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            {currentPage > 1 ? (
              <li className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50" 
              onClick={() => paged(currentPage - 1)}>
                <button className="">Prev</button>
              </li>
            ) : null}
            <li className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50" 
                onClick={() => paged(currentPage)}>
                <button className="">{currentPage}</button>
            </li>
            {currentPage < allProducts / productsPage ? (
              <li className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50" 
              onClick={() => paged(currentPage + 1)}>
                <button className="">Next</button>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
    );  
}

export default Paginate;
