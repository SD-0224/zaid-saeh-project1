import styled, { css } from "styled-components";

export const HeaderTitleStyle = {
    backgroundColor: "var(--bg_default)",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "fit-content",
    overflow: "hidden",
    height: "120px",
};

export const beforeStyle = {
    content: '""',
    clipPath: "polygon(0 0, 100% 100%, 100% 0)",
    backgroundColor: "var(--brand-secondary)",
    width: "100%",
    height: "60%",
    position: "absolute",
    top: 0,
    left: 0,
}

export const afterStyle = {
    content: '""',
    clipPath: "polygon(0 100%, 100% 0, 0 0)",
    background: "linear-gradient(to right, var(--brand-primary), var(--brand-secondary))",
    width: "100%",
    height: "60%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
};



export const Section = styled.section
    `
@media (max-width: 767px){
    display: block;
    height: fit-content !important;
    padding-bottom: 10px !important;
}

`;

export const After = styled.div 
`
@media (max-width: 767px){
    height: 25% !important;
}
`;
export const Before = styled.div 
`
@media (max-width: 767px){
    height: 25% !important;
}
`;



