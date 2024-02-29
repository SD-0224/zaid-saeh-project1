import URLs from "../urls.js";
import { render } from "../middleware/render.js";
import { sortingDataByNameORTopic } from "../middleware/sorting.js";
import { filterOfData } from "../middleware/filtering.js";

export const searchInput = document.querySelector('[type="search"]');

export const searchFetch = async () => {
    try {
        const searchTopic = searchInput.value;
        const response = await fetch(`${URLs.URL_SEARCH}${searchTopic}`);
        const data = await response.json();

        render(data); 
        
        sortingDataByNameORTopic(data,render); 

        filterOfData(data, render); 

    } catch (error) {
        console.log('error in search fetch ' + error);
    }
}

 searchInput.addEventListener('input', searchFetch);
