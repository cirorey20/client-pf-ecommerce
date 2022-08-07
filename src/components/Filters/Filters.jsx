import React from "react";

export default function Filters({handlerFilters}) {

    function handlerChange(e) {
        if ( e.target.name === "selectPriceSort" ) {
         
            handlerFilters(`?price=${e.target.value}`);
        } else {
         
            handlerFilters(`?name=${e.target.value}`);
        }
    }

    return (
        <div>
            
            <select name="selectPriceSort" value={'CHOOSE A OPTION'} onChange={e => handlerChange(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option >CHOOSE A OPTION</option>
                <option value="asc">Price desc</option>
                <option value="desc">Price asc</option>
            </select>

            <select form="filter" name="selectNameSort" value={'CHOOSE A OPTION'} onChange={e => handlerChange(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option >CHOOSE A OPTION</option>
                <option value="A-Z">Product A-Z</option>
                <option value="Z-A">Product Z-A</option>
            </select>
        </div>
    );
}