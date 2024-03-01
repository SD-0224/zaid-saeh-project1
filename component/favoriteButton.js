const favButton = document.querySelector(".favorit-button");
const favoritss = document.querySelector(".favoritss"); 
import { openFavoriteContainer } from "../services/middleware/favoritsContainer.js";

export const clickFavoriteButton = async() =>{
    favButton.addEventListener('click', ()=>{
        favoritss.classList.toggle('active');  
        openFavoriteContainer();
    });
}