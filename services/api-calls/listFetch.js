import URLs from "../urls.js";
import { filterOfData } from "../middleware/filtering.js";
import { sortingDataByNameORTopic } from "../middleware/sorting.js";
import { render } from "../middleware/render.js";

const sortSelect = document.getElementById('sort');
const filterSelect = document.getElementById('filter');

export const arrayOfData = [];
export const getList = async () => {
  try {
    const response = await fetch(URLs.URL_API);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    arrayOfData.push(data);

    sortingDataByNameORTopic(arrayOfData[0], render);
    filterOfData(arrayOfData[0], render);

    sortSelect.addEventListener('change', () => {
      filterSelect.value = 'default';
      sortingDataByNameORTopic(arrayOfData[0], render);
    });

    filterSelect.addEventListener('change', () => {
      sortSelect.value = 'default';
      filterOfData(arrayOfData[0], render);
    });

  } catch (error) {
    console.error('Error fetching data:', error);
    cardContainer.innerHTML = `<div>Something went wrong. Web topics failed to load.</div>`;
  }
};
