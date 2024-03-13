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

export const styleOfSortSelectContainer = {
    width: "50%",
    position: "relative",
}

export const iconOfSelectStyle = {
    position: "absolute",
    zIndex: 1,
    top: "45%",
    right: "10px",
    cursor: "pointer",
    color: "var(--body-text)",
}

export const labelSelectStyle = {
    position: "absolute",
    fontSize: "10px",
    paddingLeft: "20px",
    paddingTop: "5px",
    color: "var(--body-text)",
    fontWeight: 700,
}

export const selectStyle = {
    padding: "19px 10px 10px 20px",
    width: "100%",
    backgroundColor: "var(--bg_default)",
    color: "var(--body-text)",
    border: "1px solid var(--lines-color)",
    appearance: "none",
    fontWeight: 800,
    boxShadow: "0px 0px 5px var(--lines-color)",
    zIndex: 2,
}



export const styleOfFilter = {
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
    padding: "19px 10px 10px 20px",
    width: "100%",
    backgroundColor: "var(--bg_default)",
    color: "var(--body-text)",
    border: "1px solid var(--lines-color)",
    appearance: "none",
    fontWeight: 800,
    boxShadow: "0px 0px 5px var(--lines-color)",
    zIndex: 2,
}


export const DivSelectContainer = styled.div`
@media (max-width: 767px) {
    width: 100% !important;
}
`;

export const SelectSort = styled.select`
@media (max-width: 767px) {
border-top-left-radius: 0px !important;
border-top-right-radius: 0px !important;
border-bottom-left-radius: 10px !important;
border-bottom-right-radius: 0px !important;
}

@media (min-width: 768px) and (max-width: 991px) {
    
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    
  }
`;


export const SelectFilter = styled.select`
@media (max-width: 767px) {
border-top-left-radius: 0px !important;
border-top-right-radius: 0px !important;
border-bottom-left-radius: 0px !important;
border-bottom-right-radius: 10px !important;
    }
    @media (min-width: 768px) and (max-width: 991px) {
        
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        
      }
`;




