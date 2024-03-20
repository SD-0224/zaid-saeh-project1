import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Favorite } from "../components/Favorits";
import { FavoriteProvider } from "../useContext/FavoriteContext";

export default function RootLayout() {

    return (
        <FavoriteProvider>
            <Header />
            <Footer />
            <Favorite />
        </FavoriteProvider>
    )

}