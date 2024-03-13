import React from "react";

export  const SearchInput = ({
    classNameOfContainer,
    styleOfContainer,
    typeOfInput,
    placeHolder,
    searchInputStyle, 
    iconName,
    styleOfIcon,
    Div,
    Input,
    change,
}) => {
    return (
        <Div className={classNameOfContainer} style={styleOfContainer} >
            <Input type={typeOfInput} placeholder={placeHolder} style = {searchInputStyle} onChange = {change} />
            <ion-icon name={iconName} style={styleOfIcon}></ion-icon>
        </Div>
    )
}