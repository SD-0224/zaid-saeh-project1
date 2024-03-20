import React from "react";
import { generateStars } from "./GlobalFunction/GenerateStars";
import * as FavoriteCardStyles from "./stylesOfComponent/FavoriteCard.styles";
import { Link } from 'react-router-dom';
export const FavoriteCard = ({
    CardId,
    hRef,
    imageSrc,
    imageAlt,
    topicText,
    rating,
}) => {

    const spanStyle = FavoriteCardStyles.spanStyle;
    const functionStyle = FavoriteCardStyles.functionStyle;

    return (
        <Link id={CardId} to={hRef} style={FavoriteCardStyles.LinkStyle} >
            <img src={imageSrc} alt={imageAlt} style={FavoriteCardStyles.imageStyle} />
            <div style={FavoriteCardStyles.cardBody} >
                <p style={FavoriteCardStyles.cardTopic}>{topicText}</p>
                {generateStars({ rating, spanStyle, functionStyle })}
            </div>
        </Link>
    )
}