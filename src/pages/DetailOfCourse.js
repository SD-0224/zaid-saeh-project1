import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import URLs from "../config/Urls";
import { Box } from "../components/Box";
import { CardDetails } from "../components/CardDetails";
import * as DetailsStyles from "../components/stylesOfComponent/DetailsPage.styles";
import { Table } from "../components/Table";
import { useFavoriteContext } from "../useContext/FavoriteContext";

export default function DetailOfCourse() {
    const params = useParams();
    const id = params.topic;
    const [getCourse, setGetCourse] = useState();
    const { favoriteArray, setFavoriteArray, setFavoriteAppear} = useFavoriteContext(); 
    const getCourseInfo = async () => {
        try {
            const response = await fetch(URLs.URL_Course + id);
            const data = await response.json();
            setGetCourse(data);

        } catch (error) {
            console.log("Error in getting course Info " + error);
        }
    }

    useEffect(() => {
        getCourseInfo();
    }, []); 

 
    const addToFavorites = () =>{
        const updateFavorites = [...favoriteArray, getCourse]; 
        if(!favoriteArray.some((ele) => ele.id ===  getCourse.id)){
            setFavoriteArray(()=>updateFavorites); 
            localStorage.setItem('favorites', JSON.stringify(updateFavorites));
            setFavoriteAppear(true); 
        }else {
            const removeFavorite = favoriteArray.filter((ele) => ele.id !== getCourse.id); 
            setFavoriteArray(removeFavorite); 
            localStorage.setItem('favorites', JSON.stringify(removeFavorite));
            setFavoriteAppear(()=> true? true : true); 
        }      
    }

    return (
        <>
            <DetailsStyles.Section className="details-of-course" style={DetailsStyles.detailOfCourse}>
                <div className="container">
                    <DetailsStyles.DivCardContainer className="card-container card-container-detail-page" style={DetailsStyles.cardContainer}>
                        <Box getCourse={getCourse} id={id} />
                        <DetailsStyles.Div className="card-details" style={{ width: "25%", }}>
                            <CardDetails getCourse={getCourse}  addToFavorites ={addToFavorites} />
                        </DetailsStyles.Div>
                    </DetailsStyles.DivCardContainer>
                </div>
            </DetailsStyles.Section>
            <Table getCourse={getCourse} />
        </>
    )
}
