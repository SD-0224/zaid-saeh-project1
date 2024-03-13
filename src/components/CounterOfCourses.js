import React from "react";

export default function CounterOfCourses({ counter }) {
    return (
        <section className="searched-found" style={{
            marginTop: "20px",
            paddingBottom: "20px",
            color: " var(--body-text)"
        }}>
            <h2>"<span className="counter">{counter}</span>" Web Topics Found</h2>
        </section>
    )
}