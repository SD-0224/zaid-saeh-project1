import styled, { css } from "styled-components";

export const ButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: "5px",
    borderRadius: "5px",
    padding: "5px",
    textTransform: 'capitalize',
    cursor: "pointer",
    border: "1px solid var(--lines-color)",
    backgroundColor: 'var(--bg_default)',
    color: 'var(--body-text)',
};




export const Span = styled.span`
@media (max-width: 767px) {
    display: none;
}
`;

