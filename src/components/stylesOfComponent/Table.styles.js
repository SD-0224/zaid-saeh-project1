import styled, { css } from "styled-components";

export const tableOfTopics = {
    backgroundColor: "var(--bg_body)",
    paddingBottom: "20px",
    paddingTop: "30px",
}

export const subTopics = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    gap: "30px",

}

export const table = { 
    border: "1px solid var(--lines-color)",
    borderRadius: "5px",
    backgroundColor: "var(--bg_default)",
    width: "47%",
}

export const subTable = {
    borderBottom: "1px solid var(--lines-color)",
    display: "flex",
    flexDirection: "row",
    padding: "10px 10px 5px 20px",
    gap: "20px",
}

export const subTitleParagraph = {
    color: "var(--body-text)",
}

export const subTitleIcon = {
    color: "var(--brand-secondary)",
    fontSize: "20px",
}

export const tableTitle = {
    borderBottom: "1px solid var(--lines-color)",
    padding: "10px 10px 10px 20px",
}

export const tableTitleHeaderTwo = {
    fontWeight: "bold",
    fontSize: "22px",
    color: "var(--body-text)",
}

export const secondForWidth = {
    width: "25%",
    visibility: "hidden",
}


export const DivTable = styled.div`
@media (max-width: 767px){
    width: 100% !important;
}
@media (min-width: 768px) and (max-width: 992px){
    width: 50% !important;
}

`; 

export const DivSecond = styled.div`
@media (max-width: 767px){
    display: none !important;
}

@media (min-width: 768px) and (max-width: 992px){
    width: 42% !important;
}

@media (min-width: 992px) and (max-width: 1199px){
    width: 35% !important;
}

`; 