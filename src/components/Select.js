import React from "react";
export const Select = ({
    classNameOfSelectContainer, 
    styleOfSelectContainer, 
    iconNameOfSelect, 
    iconStyle, 
    labelStyle,
    labelFor,
    labelId,
    labelText,
    selectName, 
    selectId,
    selectStyle,  
    options,
    Select,
    change,   

}) => {

    const optionsArray = ()=>{
            return options.map((option) => <option  key={option.value} value={option.value} >{option.text}</option>)
    }

    return (
        <div className={classNameOfSelectContainer} style={styleOfSelectContainer} >
            <label id={labelId} htmlFor={labelFor} style={labelStyle}>{labelText}</label>
            <Select name={selectName} id={selectId} style={selectStyle} onChange = {change}>
                {optionsArray()}
            </Select>
            <ion-icon name={iconNameOfSelect} style={iconStyle}></ion-icon>
        </div>
    )
}
