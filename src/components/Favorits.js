import React from "react";
import { Card } from "./Card";
import * as FavoriteStyles from "./stylesOfComponent/Favorite.styles";

export const Favorite = ({ favoriteAppear, favoriteArray }) => {

    const favoriteMap = favoriteArray.map((ele =>
        <Card
            key={ele.id}
            A={FavoriteStyles.ACard}
            Img={FavoriteStyles.CardImg} 
            id={ele.id}
            hRef={`/detailOfCourse/${ele.id}`}
            imageSrc={require(`../assets/images/${ele.image}`)}
            imageAlt={ele.topic}
            cardBodyStyle={FavoriteStyles.cardBody}
            cardTopicStyle={FavoriteStyles.cardTopic}
            topicText={ele.topic}
            rating={ele.rating}
            functionStyle={FavoriteStyles.functionStyle}
            imgStyle= {FavoriteStyles.imageStyle}
        />
    ))

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
