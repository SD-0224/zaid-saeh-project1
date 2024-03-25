import React from "react";
import * as SelectStyles from "../components/stylesOfComponent/Select.styles";
export const Select = ({ 
    selectName, 
    options,
    change, 

}) => {

    const optionsArray = ()=>{
            return options.map((option) => <option  key={option.value} value={option.value} >{option.text}</option>)
    }

    const selectType = {
        "sort" : {
            labelId : 'sort-label', 
            labelFor: "sort", 
            labelText: 'Sort by:', 
            selectId: 'sort',
            style: SelectStyles.SelectSort,
            styleSelect: SelectStyles.selectStyle,
        }, 
        "filter": { 
            labelId : 'filter-label', 
            labelFor: "filter", 
            labelText: 'Filter by:', 
            selectId: 'filter',
            style: SelectStyles.SelectFilter, 
            styleSelect: SelectStyles.styleOfFilter,
        }
    }
    
    const currentSelectType = selectType[selectName];
    const Select = currentSelectType.style;
    const selectStyle =currentSelectType.styleSelect;

    return (
        <div style={SelectStyles.styleOfSortSelectContainer} >
            <label id={currentSelectType.labelId} htmlFor={currentSelectType.labelFor} style={SelectStyles.labelSelectStyle}>{currentSelectType.labelText}</label>
            <Select name={selectName} id={currentSelectType.selectId} style={selectStyle} onChange = {change}>
                {optionsArray()}
            </Select>
            <ion-icon name="chevron-down-outline" style={SelectStyles.iconOfSelectStyle}></ion-icon>
        </div>
    )
}
