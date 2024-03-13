import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation.js";
import HeaderTitle from "./HeaderTitle.js"; 

export default function Header(props) {
    return (
        <>
            <header style={{backgroundColor: "var(--bg_default)"}}>
                <div className="container">
                    <Navigation  favoriteAppearFunction ={props.favoriteAppearFunction} />
                </div>
                <HeaderTitle />
            </header>
            <Outlet />
        </>
    )
}