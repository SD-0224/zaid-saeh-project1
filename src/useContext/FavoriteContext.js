import React, { createContext, useContext, useState, useEffect } from "react";

const FavoriteContext = createContext();

export const useFavoriteContext = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
    const [favoriteArray, setFavoriteArray] = useState([]);
    const [favoriteAppear, setFavoriteAppear] = useState(false);


    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavoriteArray(storedFavorites);
        
    }, []);

    const favoriteAppearFunction = () => {
        setFavoriteAppear(prevState => !prevState);
    }


    return (
        <FavoriteContext.Provider  value={{ favoriteArray, setFavoriteArray, favoriteAppear, setFavoriteAppear , favoriteAppearFunction }}>
            {children}
        </FavoriteContext.Provider>
    )
}




