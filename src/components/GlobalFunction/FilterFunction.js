export const filterFunction = ({selectValue, filterValue, setFilteredCourses, getCourses, setCounter, defaultCourses }) => {
    let dataToFilter = [];
    if (selectValue === 'topic') {
        dataToFilter = [...getCourses].sort((a, b) => a.topic.localeCompare(b.topic));

    } else if (selectValue === 'author') {
        dataToFilter = [...getCourses].sort((a, b) => a.name.localeCompare(b.name));

    } else {
        dataToFilter = [...getCourses];
    }

    let filteredData = filterValue === 'default' ? dataToFilter : dataToFilter.filter(ele => ele.category === filterValue);
    setCounter(() => filteredData.length);
    return setFilteredCourses(() => filteredData);
};