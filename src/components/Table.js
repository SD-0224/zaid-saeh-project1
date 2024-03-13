import React from "react";
import * as tableStyle from "./stylesOfComponent/Table.styles";

export const Table = ({ getCourse }) => {


    return (
        <section className="table-of-topics" style={tableStyle.tableOfTopics}>
            <div className="container">
                <div className="sub-topics" style={tableStyle.subTopics}>
                    <tableStyle.DivTable className="table" style={tableStyle.table}>
                        <div className="table-title" style={tableStyle.tableTitle}>
                            <h2 style={tableStyle.tableTitleHeaderTwo}>{getCourse?.topic} Sub Topics</h2>
                        </div>
                        {getCourse?.subtopics ? getCourse.subtopics.map((title) =>
                            <div key={title} className="sub-title" style={tableStyle.subTable}>
                                <span><ion-icon name="checkmark-circle-outline" style={tableStyle.subTitleIcon}></ion-icon></span>
                                <p style={tableStyle.subTitleParagraph}>{title}</p>
                            </div>
                        ) : ''}

                    </tableStyle.DivTable>
                    <tableStyle.DivSecond className="second-for-width" style={tableStyle.secondForWidth}>
                    </tableStyle.DivSecond>
                </div>
            </div>
        </section>
    )
}