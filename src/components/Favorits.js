import React from "react";
import * as FavoriteStyles from "./stylesOfComponent/Favorite.styles";
import { useFavoriteContext } from "../useContext/FavoriteContext";
import { FavoriteCard } from "./FavoriteCard";

export const Favorite = () => {
    const { favoriteAppear, favoriteArray } = useFavoriteContext();
    const favoriteMap = favoriteArray && favoriteArray.map((ele =>
        <FavoriteCard
            key={ele.id}
            id={ele.id}
            hRef={`/detailOfCourse/${ele.id}`}
            imageSrc={require(`../assets/images/${ele.image}`)}
            imageAlt={ele.topic}
            topicText={ele.topic}
            rating={ele.rating}
        />
    ));

    return (
        <div className="favoritss" style={favoriteAppear ? FavoriteStyles.favoriteActive : FavoriteStyles.favorite} >
            <div className="container">
                <h2 style={FavoriteStyles.favoriteHeaderTwo} >My Favorite Topics</h2>
                <div className="favorit-card-container" style={FavoriteStyles.CardContainer}>
                    {favoriteMap}
                </div>
            </div>
        </div>
    )
}
