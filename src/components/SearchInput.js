import React from "react";
import * as SearchStyles from '../components/stylesOfComponent/Search.styles';

export  const SearchInput = ({
    typeOfInput,
    placeHolder,
    iconName,
    change,
}) => {
    return (
        <SearchStyles.DivSearch  style={SearchStyles.styleOfSearchContainer} >
            <SearchStyles.InputSearch type={typeOfInput} placeholder={placeHolder} style = {SearchStyles.searchInputStyle} onChange = {change} />
            <ion-icon name={iconName} style={SearchStyles.searchIconStyle}></ion-icon>
        </SearchStyles.DivSearch>
    )
}