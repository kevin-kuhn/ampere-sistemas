import React, { useState } from 'react'
import { ReactComponent as Whats } from "../../assets/svg/whatsapp.svg"
import "./styles.css"

export const BoxUtilitario = ({ sectionsLocalizadas, sectionsTitulos }) => {
    const objSectionsLocalizadas = sectionsLocalizadas.reduce((obj, item) => (obj[item.id] = item.titulo, obj), {})

    const handleOnClick = () => {
        fetch("https://api.whatsapp.com/send?text=text&phone=5551999333116")
    }

    return (
        <div className="container-utilitario">
            <div className={`localizador-servicos`}>
                <ul className="list-box">
                    {sectionsTitulos.map(section => {
                        const isLocalizada = !!objSectionsLocalizadas[section.id]
                        return <li className={`item-box `}>
                            <a className={`texto item-box-link ${isLocalizada ? 'aumentar' : ''}`} href={`#${section.id}`}> {section.titulo}</a>
                        </li>
                    })}
                </ul>
                <a href="https://api.whatsapp.com/send?text=&phone=5551999333116" target="_blank">
                    <Whats className="logo-whats" />
                </a>

            </div>
        </div>
    )
}
