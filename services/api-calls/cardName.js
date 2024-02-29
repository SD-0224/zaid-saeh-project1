import URLs from '../urls.js';
import { clickFavoriteButton } from "../../component/favoriteButton.js";

import { generateStars } from '../middleware/generateRating.js';
const detialsPage = document.querySelector('.detials-page');

document.addEventListener("DOMContentLoaded", function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const cardId = urlParams.get('id');
    const cardTitle = document.querySelector('.title-of-page'); 
    

    const cardIdFetch = async () => {
        try {
            const response = await fetch(`${URLs.URL_ARTICLE}${cardId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            cardTitle.innerHTML = `Web Topics | ${data.topic}`;

            detialsPage.innerHTML =
                `
                <section class="details-of-course">
                    <div class="container">
                        <div class="card-container card-container-detail-page">
                            <div class="card card-detail-page" id="${data.id}">
                                <h2 class="card-category">
                                    ${data.category}
                                    <br />
                                    <b class="card-topic">${data.topic}</b>
                                </h2>
                                <div class="card-rating" id="${data.rating}">
                                    ${generateStars(data.rating)}
                                </div>
                                <p class="card-description">
                                    ${data.description}
                                </p>
                            </div>
                            <div class="card-details">
                                <div class="card">
                                    <img src="./assets/images/${data.image}" alt="html logo"  />
                                    
                                    <div class="card-body">
                                        <p class="card-auther"><b>${data.topic}</b> by <a href="#">${data.name}</a></p>
                                    </div>
                                    <div class="card-footer">
                                        <p>Interested about this topic?</p>
                                        <button class='add-to-favorites'>Add to favorites <ion-icon name="heart-outline"  ></ion-icon></button>
                                        <p>Unlimited Credits</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="table-of-topics">
                    <div class="container">
                        <div class="sub-topics">
                            <div class="table">
                                <div class="table-title">
                                    <h2>${data.topic} Sub Topics</h2>
                                </div>
                                ${data.subtopics.map((title) => {
                    return `
                                        <div class="sub-title">
                                            <span><ion-icon name="checkmark-circle-outline"></ion-icon></span>
                                            <p>${title}</p>
                                        </div>
                                    `;
                }).join('')
                }
                            </div>
                            <div class="second-for-width">
                            </div>
                        </div>
                    </div>
                </section>
                `;


                const cardDetailPage = document.querySelector('.card-detail-page');
                let favoritesArray = JSON.parse(localStorage.getItem('favoritesArray')) || [];
                
                const getCardInfo = () => {
                    const id = cardDetailPage.getAttribute('id');
                    const topic = cardDetailPage.querySelector('.card-topic').innerText;
                    const rating = cardDetailPage.querySelector('.card-rating').getAttribute('id');
                    const image = document.querySelector('.card-details img').getAttribute('src');
                
                    return { id, topic, rating, image };
                }
                
                const setInitialMode = () => {
                    const addToFavorites = document.querySelector('.add-to-favorites');
                    if (favoritesArray.some(ele => ele.id === getCardInfo().id)) {
                        addToFavorites.innerHTML = `Remove from favorites <ion-icon name="heart"></ion-icon>`;
                    } else {
                        addToFavorites.innerHTML = `Add to favorites <ion-icon name="heart-outline"></ion-icon>`;
                    }
                }
                
                const addToFavorites = document.querySelector('.add-to-favorites');
                
                
                const updateFavorites = () => {
                    localStorage.setItem('favoritesArray', JSON.stringify(favoritesArray));
                }
                
                setInitialMode();
                
                addToFavorites.addEventListener('click', () => {
                    addToFavorites.classList.toggle('active');
                    const cardInfo = getCardInfo();
                
                    if (addToFavorites.classList.contains('active')) {
                        const isAlreadyAdded = favoritesArray.some(card => card.id === cardInfo.id);
                        if (!isAlreadyAdded) {
                            favoritesArray.push(cardInfo);
                            updateFavorites();
                        }
                    } else {
                        const indexToRemove = favoritesArray.findIndex(card => card.id === cardInfo.id);
                        if (indexToRemove !== -1) {
                            favoritesArray.splice(indexToRemove, 1);
                            updateFavorites();
                        }
                    }
                    setInitialMode();
                });
                

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    cardIdFetch();



    clickFavoriteButton();
});






