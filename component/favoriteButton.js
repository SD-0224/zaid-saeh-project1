const favButton = document.querySelector(".favorit-button");
const favoritss = document.querySelector(".favoritss"); 

export const clickFavoriteButton = async() =>{
    favButton.addEventListener('click', ()=>{
        favoritss.classList.toggle('active');  
    });
}