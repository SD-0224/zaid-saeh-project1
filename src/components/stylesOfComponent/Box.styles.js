import styled, { css } from "styled-components";

export const functionStyle = {
    display: "flex",
    flexDirection: "row",
    color: "var(--star-color_dark)",
    flexWrap: "nowrap",
    marginBottom: "10px",
}

export const spanStyle = {
    marginTop: "10px",
    marginBottom: "10px",
}

export const card = {
    display: "flex",
    flexDirection: "column",
    width: "47%",
    position: "relative",
}

export const cardCategory = {
    color: "var(--brand-secondary)",
    textTransform: "capitalize",
    fontSize: "17px",
    fontWeight: 600,
}

export const cardCategoryBold = {
    color: "#ffffff",
    marginTop: "5px",
    fontSize: "24px",
}

export const cardDescription = {
    color: "#ffffff",
    fontSize: "18px",
}

export const DivBox = styled.div`
@media (max-width: 767px){
    width: 100% !important;
    
}
@media (min-width: 768px) and (max-width: 992px) {
    width: 50% !important;
}

`; 