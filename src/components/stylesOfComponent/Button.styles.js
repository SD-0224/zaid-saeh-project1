import styled from "styled-components";
export const buttonStyleNavigation = {
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