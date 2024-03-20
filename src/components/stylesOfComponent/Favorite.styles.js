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
