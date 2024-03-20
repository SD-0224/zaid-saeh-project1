import styled from "styled-components";
export const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "10px",
    border: "1px solid var(--bg_default)",
    backgroundColor: "var(--bg_default)",
    overflow: "hidden",
    textDecoration: "none",
    height: "fit-content",
    color: "var(--body-text)",
    width:'100%',
    height:'100%', 

}

export const imgCardStyle = {
    width: "100%",
    objectFit: "cover",
    height: "145px",
}

export const cardBodyStyle = {
    paddingLeft: "10px",
    width: "100%",
    paddingRight: "10px",
}

export const cardTitleStyle = {
    marginTop: "10px",
    color: "var(--body-text)",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "15px",
    fontWeight: 300,
}

export const cardTopicStyle = {
    fontWeight: "bold",
    color: "var(--body-text)",
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    height: "45px",
}

export const functionStyle = {
    display: "flex",
    flexDirection: "row",
    color: "var(--star-color_dark)",
}

export const spanStyle = {
    marginTop: "10px",
    marginBottom: "10px",
}

export const footerCardStyle = {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    padding: "0px 10px 20px",
}

export const footerTextStyle = {
    color: "var(--body-text)",
    fontWeight: 100,
    fontSize: "14px",
}

export const ImgCard = styled.img`
@media (max-width: 767px) {
    height: fit-content !important;
}
`;

