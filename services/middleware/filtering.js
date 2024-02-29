const filterSelect = document.getElementById('filter'); 

export const filterOfData = (data, render) => {filterSelect.addEventListener('change',(event) =>{
  const filterBy = event.target.value; 
  let filterData; 

  if(filterBy === 'default' || filterBy === null || filterBy === ''){
    render(data); 
  } else{ 
    filterData = data.slice().sort((a,b) => a.category.localeCompare(b.category)); 
    render(filterData);
  }
})}