import React from "react";
import * as HeaderTitleStyles from "./stylesOfComponent/HeaderTitle.styles";
export default function HeaderTitle() {

    return (
        <HeaderTitleStyles.Section className="header-title" style={HeaderTitleStyles.HeaderTitleStyle}>
            <div className="container">
                <div className="description-of-header" style={{ color: "var(--body-text)", marginTop: "40px" }}>
                    <h2 style={{ color: " var(--brand-secondary)" }}>Welcome to our website!</h2>
                    <p>We have a new design thats fresh, modern and easy to use</p>
                </div>
            </div>
            <HeaderTitleStyles.After className="after" style={HeaderTitleStyles.afterStyle}></HeaderTitleStyles.After>
            <HeaderTitleStyles.Before className='before' style={HeaderTitleStyles.beforeStyle}></HeaderTitleStyles.Before>
        </HeaderTitleStyles.Section>
    )
}