import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation.js";
import HeaderTitle from "./HeaderTitle.js";

export default function Header() {
    return (
        <>
            <header style={{ backgroundColor: "var(--bg_default)" }}>
                <div className="container">
                    <Navigation />
                </div>
                <HeaderTitle />
            </header>
            <Outlet />
        </>
    )
}