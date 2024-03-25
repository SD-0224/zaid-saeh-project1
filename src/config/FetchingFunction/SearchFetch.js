import { filterFunction } from "../../components/GlobalFunction/FilterFunction";

export const searchFetch = async ({ searchCoursesURL, search, setCounter, filterValue, selectValue, setFilteredCourses, getCourses }) => {
    try {
            const response = await fetch(`${searchCoursesURL}${search}`);
            const data = await response.json();
            filterFunction({ selectValue, filterValue, setFilteredCourses, getCourses: data, setCounter }); 
    } catch (error) {
        console.log('Error in Search API: ' + error);
    }
};

