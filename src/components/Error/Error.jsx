import React from "react";
import NavBar from '../NavBar/NavBar'

const Error = () => {
    return (
        <div>
        <NavBar/>
        <div className="flex justify-center mt-40 ">
            <div className="flex items-center">
                <span className="mt-10">
                    <img src="https://mikaylabinar.com/wp-content/uploads/2020/03/401-e1584190064398.png" alt="NOT FOUND" />
                </span>
            </div>
        </div>
        </div>
    )
}

export default Error;