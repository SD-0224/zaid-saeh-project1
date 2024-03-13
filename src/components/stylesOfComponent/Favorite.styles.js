import styled, { css } from "styled-components"

export const favorite = {
    paddingTop: "20px",
    paddingBottom: "20px",
    width: "100%",
    height: "fit-content",
    backgroundColor: "var(--bg_default)",
    position: "fixed",
    opacity: 0,
    bottom: "-100%",
    transition: "opacity 0.6s ease, bottom 0.6s ease",
}

export const favoriteHeaderTwo = {
    color: "var(--body-text)",
}


export const favoriteActive = {
    paddingTop: "20px",
    paddingBottom: "20px",
    width: "100%",
    height: "fit-content",
    backgroundColor: "var(--bg_default)",
    position: "fixed",
    opacity: 1,
    bottom: "0",
    transition: "opacity 0.6s ease, bottom 0.6s ease",
    zIndex: 1,
}


export const CardContainer = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: "20px",
}


export const ACard = styled.a`
    height: 110px;
    width: 100px;
    text-decoration: none;
    margin-top: 10px;
    margin-bottom: 10px;
    box-shadow: 0px 0px 11px 8px var(--bg_body);
    border-radius: 10px;

`

export const cardBody = {
    paddingLeft: "5px",
}

export const cardTopic = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: "var(--body-text)",
}


export const CardImg = styled.image`
    object-fit: cover;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;


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

export const imageStyle = {
    objectFit: "cover",
    width: "100%",
    borderTopLeftRadius: "10px",
    borderRopRightRadius: "10px",
}