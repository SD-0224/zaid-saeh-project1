export const generateStars = (rating) => {
    if (rating < 0.4) {
      return `
          <div class="star-rating">
            <span><ion-icon name="star-outline"></ion-icon></span>
            <span><ion-icon name="star-outline"></ion-icon></span>
            <span><ion-icon name="star-outline"></ion-icon></span>
            <span><ion-icon name="star-outline"></ion-icon></span>
            <span><ion-icon name="star-outline"></ion-icon></span>
          </div>`;
    } else if (rating >= 0.5 && rating < 1) {
      return `
          <div class="star-rating">
            <span><ion-icon name="star-half"></ion-icon></span>
            <span><ion-icon name="star-outline"></ion-icon></span>
            <span><ion-icon name="star-outline"></ion-icon></span>
            <span><ion-icon name="star-outline"></ion-icon></span>
            <span><ion-icon name="star-outline"></ion-icon></span>
          </div>`;
    } else if (rating >= 1 && rating < 1.5) {
      return `
          <div class="star-rating">
            <span><ion-icon name="star"></ion-icon></span>
            <span><ion-icon name="star-outline"></ion-icon></span>
            <span><ion-icon name="star-outline"></ion-icon></span>
            <span><ion-icon name="star-outline"></ion-icon></span>
            <span><ion-icon name="star-outline"></ion-icon></span>
          </div>`;
    } else if (rating >= 1.5 && rating < 2) {
      return `
          <div class="star-rating">
            <span><ion-icon name="star"></ion-icon></span>
            <span><ion-icon name="star-half"></ion-icon></span>
            <span><ion-icon name="star-outline"></ion-icon></span>
            <span><ion-icon name="star-outline"></ion-icon></span>
            <span><ion-icon name="star-outline"></ion-icon></span>
          </div>`;
    } else if (rating >= 2 && rating < 2.5) {
      return `
          <div class="star-rating">
            <span><ion-icon name="star"></ion-icon></span>
            <span><ion-icon name="star"></ion-icon></span>
            <span><ion-icon name="star-outline"></ion-icon></span>
            <span><ion-icon name="star-outline"></ion-icon></span>
            <span><ion-icon name="star-outline"></ion-icon></span>
          </div>`;
    } else if (rating >= 2.5 && rating < 3) {
      return `
          <div class="star-rating">
            <span><ion-icon name="star"></ion-icon></span>
            <span><ion-icon name="star"></ion-icon></span>
            <span><ion-icon name="star-half"></ion-icon></span>
            <span><ion-icon name="star-outline"></ion-icon></span>
            <span><ion-icon name="star-outline"></ion-icon></span>
          </div>`;
    } else if (rating >= 3 && rating < 3.5) {
      return `
          <div class="star-rating">
            <span><ion-icon name="star"></ion-icon></span>
            <span><ion-icon name="star"></ion-icon></span>
            <span><ion-icon name="star"></ion-icon></span>
            <span><ion-icon name="star-outline"></ion-icon></span>
            <span><ion-icon name="star-outline"></ion-icon></span>
          </div>`;
    } else if (rating >= 3.5 && rating < 4) {
      return `
          <div class="star-rating">
            <span><ion-icon name="star"></ion-icon></span>
            <span><ion-icon name="star"></ion-icon></span>
            <span><ion-icon name="star"></ion-icon></span>
            <span><ion-icon name="star-half"></ion-icon></span>
            <span><ion-icon name="star-outline"></ion-icon></span>
          </div>`;
    } else if (rating >= 4 && rating < 4.5) {
      return `
          <div class="star-rating">
            <span><ion-icon name="star"></ion-icon></span>
            <span><ion-icon name="star"></ion-icon></span>
            <span><ion-icon name="star"></ion-icon></span>
            <span><ion-icon name="star"></ion-icon></span>
            <span><ion-icon name="star-outline"></ion-icon></span>
          </div>`;
    } else {
      return `
            <div class="star-rating">
              <span><ion-icon name="star"></ion-icon></span>
              <span><ion-icon name="star"></ion-icon></span>
              <span><ion-icon name="star"></ion-icon></span>
              <span><ion-icon name="star"></ion-icon></span>
              <span><ion-icon name="star"></ion-icon></span>
              
            </div>`;
    }
  }