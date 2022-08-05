import React, {Fragment} from "react";


const FilterCategory = ({allCategories}) => {
    /*<select defaultValue={'DEFAULT'} onChange={e => handleFilters(e)}>*/
    return (
        <Fragment>
            <div className='selectors'>
                <select defaultValue={'DEFAULT'} >
                    <optgroup label='Categories'>
                        <option value="All">All</option>
                        {
                            allCategories ?
                            (
                                allCategories.map((el, index)=>{
                                    return(

                                        <option key={index} value={el.name}>{el.name}</option>
                                    )
                                })
                            )
                            :
                            (
                                <span></span>
                            )
                         
                        }                
                    </optgroup>
                </select>
            </div>
        </Fragment>
    )
}


export default FilterCategory;