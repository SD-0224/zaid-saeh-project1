export const sortingDataByNameORTopic = (data, render) => {
  const sortSelect = document.getElementById('sort');
  const filterSelect = document.getElementById('filter');

  const sortSelectChangeHandler = (event) => {
    const sortBy = event.target.value;
    let sortedData;


    if (filterSelect.value === 'default') {
      if (sortBy === 'default') {
        render(data);
        localStorage.setItem('sort-prefer', JSON.stringify({ sort: 'default' }));
      } else if (sortBy === 'topic') {
        sortedData = data.slice().sort((a, b) => a.topic.localeCompare(b.topic));
        localStorage.setItem('sort-prefer', JSON.stringify({ sort: sortBy }));
        render(sortedData);
      } else if (sortBy === 'author') {
        sortedData = data.slice().sort((a, b) => a.name.localeCompare(b.name)); 
        localStorage.setItem('sort-prefer', JSON.stringify({ sort: sortBy }));
        render(sortedData);
      }

      
    } 
    
  };

  sortSelect.addEventListener('change', sortSelectChangeHandler);
  sortSelectChangeHandler({ target: { value: sortSelect.value } });
};
