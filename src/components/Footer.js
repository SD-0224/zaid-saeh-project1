import React from "react";

export default function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "var(--bg_body)",
                display: 'flex',
                justifyContent: 'center',
                height: '80px',
                alignItems: 'center'
            }}>
            <div className="container">
                <p
                    style=
                    {{
                        color: 'var(--body-text)',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '5px'
                    }}
                >Develop with <ion-icon name="heart" style={{ color: 'var(--heart-color)', fontSize: '20px' }} ></ion-icon> &#169; 2024 </p>
            </div>
        </footer>
    )
}


