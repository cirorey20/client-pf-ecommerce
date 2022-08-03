import React from 'react'
import {Link} from 'react-router-dom'
import style from "./LandingPage.module.css";
import NavBar from "../NavBar/NavBar"

export default function LandingPage(){
    return (
        <div className={style.body}>
            <NavBar/>
        </div>
    )
}