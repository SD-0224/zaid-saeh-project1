import styled, { css } from "styled-components";

export const circularLoader = { 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
}

export const loader = {
    width: "300px",
    height: "300px",
    border: "8px solid green",
    borderTop: "8px solid #f3f3f3",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
}

export const loaderParagraph = { 
    color:"green", 
    fontSize: "30px",
    marginTop: "20px",
}


export const Spin = styled.div`
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`;

