import { generateStars } from "./generateRating.js";
const myFavorites = document.querySelector('.favorit-card-container');


const favorites = JSON.parse(localStorage.getItem('favoritesArray')) || [];


export const openFavoriteContainer = () => {
    favorites.map((ele)=>{
        const a = document.createElement('a');
        a.classList.add('card');
        a.setAttribute('href', `cardName.html?id=${ele.id}`);
        myFavorites.appendChild(a);
        a.innerHTML =
    
          `
        <img src="${ele.image}" alt="${ele.topic}" />
        <div class="card-body">
            <p class="card-title"><b>${ele.topic}</b></p>
            <div class="star-rating">
                ${generateStars(ele.rating)}
            </div>
        </div>
        `
    })

}


