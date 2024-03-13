import React from "react";

export const Button = ({ style, text, click, className, icon, styleIcon, flip, Span, ButtonIcon }) => {
    return (
        <button className={className} style={style} onClick={click}>
            {flip ? (
                <>
                    <Span>{text}</Span>
                    <ButtonIcon><ion-icon aria-hidden="true" name={icon} style={styleIcon}></ion-icon></ButtonIcon>
                </>
            ) : (
                <>
                    <ion-icon aria-hidden="true" name={icon} style={styleIcon}></ion-icon>
                    <Span>{text}</Span>
                </>
            )}

        </button>
    );
}
