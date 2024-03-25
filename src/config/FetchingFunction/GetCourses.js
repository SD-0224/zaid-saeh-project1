export const fetchCourses = async ({setGetCourses, setFilteredCourses, setCircularLoader, setCounter, coursesURL}) => {
    try {
        setCircularLoader(true);
        const response = await fetch(coursesURL);
        const data = await response.json();
        setCounter(() => data.length); 
        setFilteredCourses(() => data); 
        return setGetCourses(()=> data);
    } catch (error) {
        console.log("Error Happens while Fetching Data " + error);
    }finally{ 
        setCircularLoader(false);
    }
}