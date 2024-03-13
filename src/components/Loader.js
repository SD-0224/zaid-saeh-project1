import React from "react";
import * as LoaderStyles from "./stylesOfComponent/Loader.styles";


export const Loader = () => {
    return (
        <div className="circular-loader" style={LoaderStyles.circularLoader}>
            <LoaderStyles.Spin className="loader" style={LoaderStyles.loader}></LoaderStyles.Spin>
            <span className="p" style={LoaderStyles.loaderParagraph}>Please wait while articles are being loaded.</span>
        </div>
    )
}