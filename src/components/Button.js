import React from "react";
import * as ButtonStyles from "./stylesOfComponent/Button.styles";

export const Button = ({ text, click, icon, variant }) => {
    const variantType = {
        "navigation-button": {
            buttonStyle: ButtonStyles.buttonStyleNavigation,
            content: (
                <>
                    <ion-icon aria-hidden="true" name={icon}></ion-icon>
                    <ButtonStyles.Span>{text}</ButtonStyles.Span>
                </>
            ),

        },
        "favorite-button": {
            buttonStyle: ButtonStyles.button,
            content: (
                <>
                    <ButtonStyles.DivCardFooterButton>{text}</ButtonStyles.DivCardFooterButton>
                    <ButtonStyles.ButtonIcon><ion-icon aria-hidden="true" name={icon} style={ButtonStyles.styleIconButton}></ion-icon></ButtonStyles.ButtonIcon>
                </>
            )
        }
    };

    const currentButtonType = variantType[variant];

    return (
        <button style={currentButtonType.buttonStyle} onClick={click}>
            {currentButtonType.content}
        </button>
    );
}
