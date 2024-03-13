import styled, { css } from "styled-components";
export const card = {
    display: "flex",
    flexDirection: "column",
    width: "100% !important",
    backgroundColor: "#FFFFFF",
    position: "absolute",
}

export const img = { 
    width: "100%",
    objectFit: "cover",
    padding: "1px",
}
export const cardBody = {
    marginTop: "20px",
    paddingLeft: "10px",
}
export const cardFooter = {
    padding: "5px",
    border: "1px solid #dddddd",
    margin: "10px",
}

export const cardFooterParagraph = { 
    marginLeft: "16px",
}

export const cardFooterLastChild = { 
    color: "#dddddd",
    fontSize: "11px",
    textAlign: "center",
    textTransform: "capitalize",
}

export const button = { 
    backgroundColor: "var(--brand-secondary)",
    color:"#ffffff",
    width: "90%",
    height: "60px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "capitalize",
    border: "1px solid var(--brand-secondary)",
    gap: "20px",
    margin: "10px auto",
    fontSize: "20px",
}

export const styleIconButton = {
    fontSize: '22px',
}


export const DivCard = styled.div`
@media (max-width: 767px){
    position: relative !important;
    width: 100% !important;
}
@media (min-width: 768px) and (max-width: 991px){
    width: 40% !important;
}
`; 

export const DivCardFooterButton = styled.div`
@media (min-width: 768px) and (max-width: 992px){
    font-size: 14px !important;
}
@media (min-width: 992px) and (max-width: 1199px) {
    font-size: 14px !important;
}
@media (min-width: 1200px){
    font-size: 14px !important;
}
`;

export const ButtonIcon = styled.span`
@media (max-width: 767px){
    transform: translateY(4px) !important;
}
@media (min-width: 768px) and (max-width: 992px){
    transform: translateY(4px) !important;
}
@media (min-width: 992px) and (max-width: 1199px) {
    font-size: 35px !important;
}
@media (min-width: 1200px){
    font-size: 35px !important;
}
`;