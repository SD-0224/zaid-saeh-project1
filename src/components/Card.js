import React from "react";
import { generateStars } from "./GlobalFunction/GenerateStars";
import * as CardStyle from "./stylesOfComponent/Card.styles"; 
import { Link } from 'react-router-dom';
export const Card = ({
    CardId,
    hRef,
    imageSrc,
    imageAlt,
    titleText,
    topicText,
    footerText,
    rating,
}) => { 

    const spanStyle = CardStyle.spanStyle; 
    const functionStyle = CardStyle.functionStyle;

    return (
        <Link id={CardId} to={hRef} style={CardStyle.cardStyle}>
            <CardStyle.ImgCard src={imageSrc} alt={imageAlt}  style={CardStyle.imgCardStyle} />
            <div  style={CardStyle.cardBodyStyle} >
                <p  style={CardStyle.cardTitleStyle} >{titleText} </p>
                <p  style={CardStyle.cardTopicStyle}>{topicText}</p>
                {generateStars({rating, spanStyle, functionStyle} )}
            </div>
            <div  style={CardStyle.footerCardStyle}>
                <p style={CardStyle.footerTextStyle}>{footerText} </p>
            </div>
        </Link>
    )
}