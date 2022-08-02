import React from 'react'
import {Link} from 'react-router-dom'
import style from "./LandingPage.module.css";

export default function LandingPage(){
    return (
        <div className={style.body}>
            <div className={style.frame}>
                <h1 className={style.neons}> UNIVERSAL MUSIC </h1>
                    <Link  to="/Home">
                        <button className={style.button}> Go to Play </button>    
                    </Link>
            </div>
        </div>
    )
}