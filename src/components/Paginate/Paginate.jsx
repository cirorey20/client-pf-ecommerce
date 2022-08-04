import React, {Fragment} from "react";

const Paginate = ({productsDePagina, allProducts, paged}) => {

    const pageNumbers = [];
    for(let i=1; i<=Math.ceil(allProducts/productsDePagina); i++){
        
        pageNumbers.push(i);
    }


    return (
        <Fragment>
            <h1>PAGINATE</h1>
            <ul>
                {
                    pageNumbers?
                    pageNumbers.map((num, index) => (
                        <li key={index}>
                            <a href={'#'+num} onClick={()=>paged(num)}>{num}</a>
                        </li>
                    ))
                    :
                    <span></span>
                }
            </ul>
        </Fragment>
    )
}

export default Paginate;