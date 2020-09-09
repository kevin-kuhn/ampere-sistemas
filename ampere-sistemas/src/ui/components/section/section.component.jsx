import React from "react"
import "./styles.css"

export const Section = ({ children, background, id }) => {
    return(
        <div id={id} className="container section" style={{ background: background }}>
            <div className="section-interna">
                {children}
            </div>
        </div>
    )
}