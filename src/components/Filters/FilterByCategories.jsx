import React, { Fragment, useEffect, useState } from "react";

const FilterByCategories = ({allCategories, allProducts}) => {
    //cuando de click quiero poner el name dentro de un arreglo
    const [stateCategories, setStateCategories] = useState([])
    function handlerOnChange(e){
        let check = e.target.checked
        if(check){
            setStateCategories([...stateCategories ,e.target.name])
            // console.log("puse ", e.target.name)
            // console.log("category ",stateCategories)
        } 
        else if(!check) {
            let cate = stateCategories.filter(item => item !== e.target.name)
            // console.log(cate)
            setStateCategories(cate)
            // console.log("saque ", e.target.name)
            // console.log("category ",stateCategories);
        }
    }
    //una vez realizada la funcion debo crear mi type en reducer products
    //llamado PRODUCTS_FILTERS_BY_CATEGORY
    //y cuando se cumpla ese tipo de ejecutar mi funcion de action que va a estar en products
    //que devolveria un state con los productos filtrado que coicidan con estas 
    //categorias
    useEffect(()=>{
        // console.log(allCategories)
        // console.log(allProducts);
    }, [])
    return (
        <Fragment>
            {

                allCategories.map(category => {

                    return (
                        <div key={category.id}>
                            <input
                                type="checkbox"
                                id={`custom-checkbox-${category.id}`}
                                name={category.name}
                                value={category.id}
                                checked={category.checked}
                                onChange={e => handlerOnChange(e)}
                            />
                            <label htmlFor={`custom-checkbox-${category.id}`}>{category.name}</label>
                        </div>
                    );

                })
            }

            <button type="button"  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Filter</button>
            <button type="button"  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Reset</button>

        </Fragment>
    )
}

export default FilterByCategories;