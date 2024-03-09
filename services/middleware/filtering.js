export const filterOfData = (data, render) => {
  const sortSelect = document.getElementById('sort');
  const filterSelect = document.getElementById('filter'); 

  const filterEventHandler = (event) => {
    const filterBy = event.target.value; 
    let filterData; 

    if (sortSelect.value === 'default') {
      if (filterBy === 'default' || filterBy === null || filterBy === '') {
        localStorage.setItem('filter-prefer', JSON.stringify({ filter: 'default' }));
        render(data); 
      } else { 
        filterData = data.slice().sort((a, b) => a.category.localeCompare(b.category)); 
        localStorage.setItem('filter-prefer', JSON.stringify({ filter: filterBy }));
        render(filterData);
      }

      
    } 
  };

  filterSelect.addEventListener('change', filterEventHandler);
  filterEventHandler({ target: { value: filterSelect.value } });
};