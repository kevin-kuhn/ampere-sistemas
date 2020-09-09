import React from "react"
import { Header, Footer } from "../index.js"
import "./styles.css"

export const Container = ({ children }) => {
    return (
        <div className="container-geral">
            <Header />
            {children}
            <Footer />
        </div>
    )
}