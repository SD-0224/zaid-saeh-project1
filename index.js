let cardContainer = document.querySelector('.card-container-main-page');



const generateStars = (rating) => {
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
    } else{
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



fetch('data.json')
    .then(response => response.json())
    .then(data => {
        data.map(element => {
            const card = document.createElement('a'); 
            card.href = "cardName.html";
            card.id = element.id
            card.classList.add('card');
            card.innerHTML =
                `
                    <img src="./images/${element.image}" alt="html logo" />
                    <div class="card-body">
                        <p class="card-title">${element.category} </p>
                        <p class="card-topic">${element.topic}</p>
                        <div class="star-rating">
                        ${generateStars(element.rating)}
                        </div>
                    </div>
                    <div class="card-footer">
                        <p class="auther" aria-label="Author" >Auther ${element.name}</p>
                    </div>
                `
                cardContainer.appendChild(card); 
        });

    })
    .catch(error => console.error('Error fetching JSON:', error));



//  favorit 
const favButton = document.querySelector(".favorit-button");
const favoritss = document.querySelector(".favoritss"); 

favButton.addEventListener('click', ()=>{
    favoritss.classList.toggle('active');   
})


