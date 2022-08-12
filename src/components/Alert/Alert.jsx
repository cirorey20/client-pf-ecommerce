import React, {Fragment, useState, useEffect} from "react";


const Alert = ({alert, textAlert}) => {

    const [isHidden, setIsHidden] = useState("hidden")
    useEffect(()=> {
        if(alert) {
            setIsHidden(null)
        } else {
            setIsHidden("hidden")
        }
        // console.log(alertC)
    })
    // console.log(textAlert)

    return (
        <Fragment>
            <div className="fixed z-10 m-4 right-40 ">
                <div className= {`${isHidden} bg-blue-500 border-t border-b border-blue-500 text-white-700 px-4 py-3`} role="alert" >
                    <p className="font-bold">{textAlert}</p>
                    <p className="text-sm">added to cart.</p>
                </div>

            </div>
        </Fragment>
    )
}

export default Alert;