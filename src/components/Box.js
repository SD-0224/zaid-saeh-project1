import React from "react";
import { generateStars } from "./GlobalFunction/GenerateStars";
import * as BoxStyles from "./stylesOfComponent/Box.styles";

export const Box = ({ getCourse , id}) => {
    const rating = getCourse?.rating; 
    const functionStyle = BoxStyles.functionStyle; 

    return (
        <BoxStyles.DivBox className="card card-detail-page" id={id} style={BoxStyles.card}>
            <h2 className="card-category" style={BoxStyles.cardCategory}>
                {getCourse?.category}
                <br />
                <b className="card-topic" style={BoxStyles.cardCategoryBold}>{getCourse?.topic}</b>
            </h2>
            <div className="card-rating" id={getCourse?.rating}>
                {generateStars({rating, functionStyle})}
            </div>
            <p className="card-description" style={BoxStyles.cardDescription} >
                {getCourse?.description}
            </p>
        </BoxStyles.DivBox>
    )
}