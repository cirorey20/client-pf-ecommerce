import React, { Fragment, useEffect, useState } from "react";
import Plot from 'react-plotly.js';
// import Moment from 'react-moment';
import moment from 'moment'
import {useDispatch, useSelector} from 'react-redux';
import {getOrders} from '../../../redux/actions/orders';

const Earning = () => {
    const dispatch = useDispatch();
    const { orders: allOrders } = useSelector(
        (state) => state.ordersReducer
      );
    const timeNow = moment().format();
    const mesCurrent = moment().format("MMM YYYY"); 

    const [or, setOr] = useState([]);

    var xArray = [mesCurrent];
    var yArray = [or.length];

    useEffect(()=>{
        dispatch(getOrders());
    }, [dispatch])

    useEffect(()=>{
        let mes = allOrders.filter((item) =>{
            return item.time.slice(0,7) === timeNow.slice(0,7)
        })
        let totalMesCurrent = mes.map(item=> item.ProductOrders?.reduce(
            (prev, curr) => prev + curr.quantity * curr.price,
            0
          ));
        setOr(totalMesCurrent);
    },[allOrders])
    return (
        <Fragment>
            {/* <Moment>{start}</Moment> */}
            <div className="flex flex-row m-40">
                <Plot
                    data={[
                        {
                            x: xArray,
                            y: yArray,
                            type: "bar",
                        }
                    ]}
                    layout={{ width: 520, height: 540, title: "Number Shopping" }}
                    
                />
                <div className="mt-40 ml-20">
                    GANANCIAS DEL MES: ${
                        or.reduce(
                            (prev, curr) => prev+curr,
                            0
                        )
                    }
                </div>
            </div>
        </Fragment>
    )
}


export default Earning;