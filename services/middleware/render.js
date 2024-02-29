let cardContainer = document.querySelector('.card-container-main-page');
let counter = document.querySelector(".counter");
import { generateStars } from "../middleware/generateRating.js";

export const render = (data) => {
    let count = 0;
    cardContainer.innerHTML = ''; 
    data.forEach(element => {
      count++;
      const card = document.createElement('a');
      card.href = `cardName.html?id=${element.id}`;
      card.id = element.id;
      card.classList.add('card');
      card.innerHTML =
        `
            <img src="./assets/images/${element.image}" alt="${data.topic}" width="100" height="100"  loading="lazy"  />
            <div class="card-body">
                <p class="card-title">${element.category} </p>
                <p class="card-topic">${element.topic}</p>
                <div class="star-rating">
                    ${generateStars(element.rating)}
                </div>
            </div>
            <div class="card-footer">
                <p class="auther" aria-label="Author" >Author ${element.name}</p>
            </div>
        `;
      cardContainer.appendChild(card);
    });
    counter.innerHTML = `${count}`;
  };


  