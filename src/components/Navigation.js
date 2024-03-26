import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { useFavoriteContext } from "../useContext/FavoriteContext";


export default function Navigation() {
    const [mode, setMode] = useState(
        localStorage.getItem("mode") === null
            ? "light"
            : localStorage.getItem("mode") === "light"
                ? "light"
                : "dark"
    );

    const { favoriteAppearFunction } = useFavoriteContext();


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
                    <Button icon={changeIconMode()} text={changeTextMode()}  click={toggleDarkMode}  variant={"navigation-button"} />
                </li>
                <li style={{ listStyle: 'none' }}>
                    <Button icon={"heart-outline"} text={"favorites"}  click= {favoriteAppearFunction}  variant={"navigation-button"}/>
                </li>
            </ul>
        </nav>
    );
}
