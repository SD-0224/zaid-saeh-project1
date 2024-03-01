export const generateStars = (rating) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;

  let starsHTML = '<div class="star-rating">';
  
  for (let i = 0; i < 5; i++) {
      if (i < filledStars) {
          starsHTML += '<span><ion-icon name="star"></ion-icon></span>';
      } else if (i === filledStars && hasHalfStar) {
          starsHTML += '<span><ion-icon name="star-half"></ion-icon></span>';
      } else {
          starsHTML += '<span><ion-icon name="star-outline"></ion-icon></span>';
      }
  }
  
  starsHTML += '</div>';
  
  return starsHTML;
};
