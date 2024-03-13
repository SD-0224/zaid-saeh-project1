import React from "react";
import * as cardStyles from "./stylesOfComponent/CardDetails.styles";
import { Button } from "./Button";

export const CardDetails = ({ getCourse, addToFavorites, favoriteArray }) => {

    const favoriteText = (text) => {
        if (!getCourse){
             return "";
        } else{
            const courses = JSON.parse(localStorage.getItem('favorites')) || [];
            const isExist =  courses.some((ele) => ele.id === getCourse.id);
            if(text === true){
                return isExist ? "Remove from favorites"  : "Add to favorites";
            } else{
                return isExist ? "heart"  : "heart-outline";
            }
        }  
        
    }


    return (
        <cardStyles.DivCard className="card" style={cardStyles.card}>
            <img src={getCourse?.image ? require(`../assets/images/${getCourse.image}`) : 'undefined'} alt="getCourse?.topic" style={cardStyles.img} />

            <div className="card-body" style={cardStyles.cardBody}>
                <p className="card-author"><b>{getCourse?.topic}</b> by <a href="#">{getCourse?.name}</a></p>
            </div>
            <div className="card-footer" style={cardStyles.cardFooter}>
                <p style={cardStyles.cardFooterParagraph}>Interested about this topic?</p>
                <Button
                    icon={favoriteText()}
                    text={favoriteText(true)}
                    className={"add-to-favorites"}
                    style={cardStyles.button}
                    styleIcon={cardStyles.styleIconButton}
                    flip={true}
                    Span={cardStyles.DivCardFooterButton}
                    ButtonIcon={cardStyles.ButtonIcon}
                    click={addToFavorites} />
                <p style={cardStyles.cardFooterLastChild}>Unlimited Credits</p>
            </div>
        </cardStyles.DivCard>
    )
}
