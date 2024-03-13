export const generateStars = ({rating, classNameOfFunction, functionStyle, spanStyle}) => {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating - filledStars >= 0.5;

    let stars = [];

    for (let i = 0; i < 5; i++) {
        if (i < filledStars) {
            stars.push(<ion-icon key={i} name="star" style={spanStyle}></ion-icon>);
        } else if (i === filledStars && hasHalfStar) {
            stars.push(<ion-icon key={i} name="star-half" style={spanStyle}></ion-icon>);
        } else {
            stars.push(<ion-icon key={i} name="star-outline" style={spanStyle}></ion-icon>);
        }
    }

    return <div className={classNameOfFunction} style={functionStyle} >{stars}</div>;
};