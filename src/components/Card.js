import React from "react";
import { generateStars } from "./GlobalFunction/GenerateStars";
export const Card = ({
    CardId,
    hRef,
    cardStyle,
    imageSrc,
    imageAlt,
    imgStyle,
    cardBodyStyle,
    classNameOfCardBody,
    classNameOfCardTitle,
    cardTitleStyle,
    titleText,
    topicText,
    classNameOfCardTopic,
    classNameOfCardFooter,
    footerText,
    footerTextClassName,
    classNameOfFunction,
    cardTopicStyle,
    functionStyle,
    spanStyle,
    footerTextStyle,
    footerCardStyle,
    rating,
    A,
    Img,


}) => {

    
    return (

        <A id={CardId} href={hRef} style={cardStyle}>
            <img src={imageSrc} alt={imageAlt}  style={imgStyle} />
            <div className={classNameOfCardBody} style={cardBodyStyle} >
                <p className={classNameOfCardTitle} style={cardTitleStyle} >{titleText} </p>
                <p className={classNameOfCardTopic} style={cardTopicStyle}>{topicText}</p>
                {generateStars({rating, spanStyle, functionStyle,classNameOfFunction} )}
            </div>
            <div className={classNameOfCardFooter} style={footerCardStyle}>
                <p className={footerTextClassName} style={footerTextStyle}>{footerText} </p>
            </div>
        </A>
    )
}