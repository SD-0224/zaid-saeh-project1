export const fetchCourses = async({coursesURL, setGetCourses,setCircularLoader, setCounter, setFilteredCourses}) =>{
    try{
        setCircularLoader(true);
        const response = await fetch(coursesURL);
        const data = await response.json();
        setGetCourses(()=> data);
        setFilteredCourses(()=> data); 
        setCircularLoader(false);
        setCounter(()=> data.length); 

    }catch(error){
        console.log("Error Happens while Fetching Data " + error);
    }
}