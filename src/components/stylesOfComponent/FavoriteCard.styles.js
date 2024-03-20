import styled from "styled-components";
export const ACard = styled.a`
    height: 110px;
    width: 100px;
    text-decoration: none;
    margin-top: 10px;
    margin-bottom: 10px;
    box-shadow: 0px 0px 11px 8px var(--bg_body);
    border-radius: 10px;

`

export const LinkStyle = {
    height: "110px",
    width: "100px",
    textDecoration: "none",
    marginTop: "10px",
    marginBottom: "10px",
    boxShadow: "0px 0px 11px 8px var(--bg_body)",
    borderRadius: "10px",
}


export const cardBody = {
    paddingLeft: "5px",
}

export const cardTopic = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: "var(--body-text)",
}


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
    height: "50px", 
}