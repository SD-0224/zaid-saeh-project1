import { generateStars } from "./generateRating.js";
const myFavorites = document.querySelector('.favorit-card-container');

export const openFavoriteContainer = () => {
    myFavorites.innerHTML = ''; 
    const favorites = JSON.parse(localStorage.getItem('favoritesArray')) || [];
    favorites.forEach((favorite) => {
        const a = document.createElement('a');
        a.classList.add('card');
        a.setAttribute('href', `cardName.html?id=${favorite.id}`);
        a.innerHTML = `
            <img src="${favorite.image}" alt="${favorite.topic}" />
            <div class="card-body">
                <p class="card-title"><b>${favorite.topic}</b></p>
                <div class="star-rating">
                    ${generateStars(favorite.rating)}
                </div>
            </div>
        `;
        myFavorites.appendChild(a);
    });
};
