import React from "react";
import Main from "../components/Main";
import { Favorite } from "../components/Favorits";
import Header from "../components/Header";


export default function Home(props) {
    return (
        <>
            <Header favoriteAppearFunction ={props.favoriteAppearFunction} />
            <Main />
            <Favorite favoriteAppear= {props.favoriteAppear} favoriteArray={props.favoriteArray} />
        </>

    )
}