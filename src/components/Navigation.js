import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import * as NavigationStyle from "./stylesOfComponent/Navigation.styles"; 


export default function Navigation(props) {
    const [mode, setMode] = useState(
        localStorage.getItem("mode") === null
            ? "light"
            : localStorage.getItem("mode") === "light"
                ? "light"
                : "dark"
    );


    useEffect(() => {
        document.body.classList.toggle('dark-mode', mode === 'dark');
        localStorage.setItem('mode', mode);
    }, [mode]);

    const toggleDarkMode = () => {
        setMode(()=>mode === "light" ? "dark" : "light");
    };

    const changeIconMode = () => {
        return mode === 'dark' ?  'sunny' : 'moon-outline';
    }
    const changeTextMode = () => {
        return mode === 'dark' ?  'Light Mode' : 'Dark mode';
    }



    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0px' }}>
            <div className="logo-title">
                <h2 style={{ textTransform: 'capitalize', fontWeight: 500, color: "var(--brand-primary)", fontSize: "17px", }}>web topics</h2>
            </div>
            <ul style={{ display: 'flex', justifyContent: 'space-between', gap: '5px', alignItems: 'center' }}>
                <li style={{ listStyle: 'none' }}>
                    <Button className={"dark-mode-click"} icon={changeIconMode()} text={changeTextMode()} style={NavigationStyle.ButtonStyle} click={toggleDarkMode} Span = {NavigationStyle.Span} />
                </li>
                <li style={{ listStyle: 'none' }}>
                    <Button className={"favorite-button"} icon={"heart-outline"} text={"favorites"} style={NavigationStyle.ButtonStyle}  Span = {NavigationStyle.Span}  click= {props.favoriteAppearFunction} />
                </li>
            </ul>
        </nav>
    );
}
