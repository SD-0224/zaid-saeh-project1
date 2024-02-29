const sortSelect = document.getElementById('sort');

export const sortingDataByNameORTopic = (data, render) => sortSelect.addEventListener('change', (event) => {
    const sortBy = event.target.value;
    let sortedData;

    if (sortBy === '' || sortBy === 'null' || sortBy === 'default') {
      render(data);
    } else if (sortBy === 'topic') {
      sortedData = data.slice().sort((a, b) => a.topic.localeCompare(b.topic)); 
      render(sortedData);
    } else if (sortBy === 'author') {
      sortedData = data.slice().sort((a, b) => a.name.localeCompare(b.name)); 
      render(sortedData);
    }
  }); 