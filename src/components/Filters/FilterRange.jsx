import React, {Fragment, useState, useEffect} from "react";
import {getByFilters} from "../../redux/actions/products"
import { useDispatch } from "react-redux";


const FilterRange = () => {
    const dispatch = useDispatch();
    // const allProducts = useSelector((state) => state.productReducer.products);
    const [input, setInput] = useState({
        min: null,
        max: null,
    })
    const [show, setShow] = useState('hidden')
    function handleChange (e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        
        console.log(input);
    }
    function handleSubmit(e) {
        e.preventDefault();
        if(Number(input.max) < 1 || Number(input.min) < 1) {
            return alert("Inserte numeros mayores a 0")
        }
        if(Number(input.max)  < Number(input.min) && Number(input.min) > Number(input.max)) {
            return alert("el maximo debe ser mayor al minimo")
        }

        console.log("clivk")
        dispatch(getByFilters(`?minrange=${input.min}&maxrange=${input.max}`))
    }
    useEffect (()=>{
        if (input.min > 0){
            setShow([])
        }
    },[input])
    return (
        <Fragment>
            <div className="border-solid border-2 border-sky-500 mb-6">

            <label htmlFor="">By range</label>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input onChange={handleChange} type="number" name="min" placeholder="min"/>
                <input onChange={handleChange} className={show} type="number" name="max" placeholder="max"/>
                <button type="submit">GET</button>
            </form>
            </div>
        </Fragment>
    )
}

export default FilterRange;