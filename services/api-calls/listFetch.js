import URLs from "../urls.js";
import { filterOfData } from "../middleware/filtering.js";
import { sortingDataByNameORTopic } from "../middleware/sorting.js";
import { render } from "../middleware/render.js"; 


export const getList = async () => {
  try {
    const response = await fetch(URLs.URL_API);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    render(data);

    sortingDataByNameORTopic(data,render); 

    filterOfData(data, render);

  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
 