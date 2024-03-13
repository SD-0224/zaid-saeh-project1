import styled, { css } from "styled-components";
export const detailOfCourse = {
    backgroundColor: "#333333",
    height: "fit-content",
    paddingBottom: "30px",
    paddingTop: "20px",
}

export const cardContainer = {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
}

export const Div = styled.div`
@media (max-width: 767px) {
    display: flex !important;
    width: 100% !important;
}
@media (min-width: 768px) and (max-width: 991px){
    width: 42% !important;
    
}
@media (min-width: 992px) and (max-width: 1199px){
    width: 35% !important;
}

`;
export const DivCardContainer = styled.div`
@media (max-width: 767px) {
    flex-direction: column !important;
}

`;


export const Section = styled.section`
@media (max-width: 767px) {
    height: fit-content;
}

`;