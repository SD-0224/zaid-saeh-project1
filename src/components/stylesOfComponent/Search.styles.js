import styled, { css } from "styled-components"

export const styleOfSearchContainer = {
    position: 'relative',
    width: '70%'
}

export const searchIconStyle = {
    position: "absolute",
    left: "10px",
    top: "16px",
    color: "var(--body-text)",
}

export const searchInputStyle = {
    width: "100%",
    padding: "14px 10px 15px 35px",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    backgroundColor: "var(--bg_default)",
    border: "1px solid var(--lines-color)",
    boxShadow: "0px 0px 5px var(--lines-color)",
}


export const SectionSearch = styled.section
`
@media (max-width: 767px){
    flex-direction: column !important;
}
`;

export const DivSearch = styled.div`
@media (max-width: 767px){
    width: 100% !important;
}

`;

export const InputSearch = styled.input`
@media (max-width: 767px){
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
}
`;


