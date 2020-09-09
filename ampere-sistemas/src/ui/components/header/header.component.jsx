import React from "react"
import "./styles.css"

export const Header = () => {
    return (
        <header>
            <div className="container-header">
                <ul className='menu'>
                    <li className="menu-item">
                        <a className="texto-header" href="#home">Home</a>
                    </li>
                    <li className="menu-item">
                        <a className="texto-header" href="#sobre">Sobre</a>
                    </li>
                    <li className="menu-item">
                        <a className="texto-header" href="#servicos">Serviços</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}