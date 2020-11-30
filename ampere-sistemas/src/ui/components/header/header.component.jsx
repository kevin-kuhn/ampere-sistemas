import React, { useState } from "react"
import { AlertaClickExterno } from "../index"
import "./styles.css"

export const Header = () => {
    const [classeBoxHome, setClasseBoxHome] = useState("box-esconder")
    const [classeBoxServicos, setClasseBoxServicos] = useState("box-esconder")
    const [classeBoxSobre, setClasseBoxSobre] = useState("box-esconder")
    const [menuAberto, setMenuAberto] = useState(false)

    const lidarBoxHomeOver = () => {
        setClasseBoxHome("box-aparecer")
        setMenuAberto(true)
    }

    const lidarBoxServicosOver = () => {
        setClasseBoxServicos("box-aparecer")
        setMenuAberto(true)
    }

    const lidarBoxSobreOver = () => {
        setClasseBoxSobre("box-aparecer")
        setMenuAberto(true)
    }

    const lidarBoxHomeLeave = () => {
        setClasseBoxHome("box-esconder")
        setMenuAberto(false)
    }

    const lidarBoxServicosLeave = () => {
        setClasseBoxServicos("box-esconder")
        setMenuAberto(false)
    }

    const lidarBoxSobreLeave = () => {
        setClasseBoxSobre("box-esconder")
        setMenuAberto(false)
    }

    const lidarBoxLeave = () => {
        setClasseBoxHome("box-esconder")
        setClasseBoxServicos("box-esconder")
        setClasseBoxSobre("box-esconder")
    }

    return (
        <AlertaClickExterno esconderMenu={lidarBoxLeave} isMenuAberto={menuAberto}>
            <header>
                <div className="container-header">
                    <div className="divisao-header-inicial">
                        <ul className='menu'>
                            <li className="menu-item"
                                onMouseOver={lidarBoxHomeOver}
                                onMouseLeave={lidarBoxHomeLeave}
                                onClick={lidarBoxHomeOver}
                            >
                                <p className="texto-header">Início</p>
                            </li>
                            <li className="menu-item"
                                onMouseOver={lidarBoxServicosOver}
                                onMouseLeave={lidarBoxServicosLeave}
                                onClick={lidarBoxServicosOver}
                            >
                                <p className="texto-header">Serviços</p>
                            </li>
                            <li className="menu-item"
                                onMouseOver={lidarBoxSobreOver}
                                onMouseLeave={lidarBoxSobreLeave}
                                onClick={lidarBoxSobreOver}
                            >
                                <p className="texto-header">A Empresa</p>
                            </li>
                        </ul>
                    </div>
                    <div className={classeBoxHome}
                        onMouseOver={lidarBoxHomeOver}
                        onMouseLeave={lidarBoxHomeLeave}
                    >
                        <a className="texto-header item-servicos" href="#home" onClick={lidarBoxHomeLeave}>
                            Clique aqui para ir ao início
                        </a>
                    </div>
                    <div className={classeBoxServicos}
                        onMouseOver={lidarBoxServicosOver}
                        onMouseLeave={lidarBoxServicosLeave}
                    >
                        <ul className="lista-servicos">
                            <li className="item-servicos">
                                <a className="texto-header" href="#servicos-seguranca" onClick={lidarBoxServicosLeave}>
                                    Instalação de câmeras
                        </a>
                            </li>
                            <li className="item-servicos">
                                <a className="texto-header" href="#servicos-seguranca" onClick={lidarBoxServicosLeave}>
                                    Instalação de sistemas de incêndio
                        </a>
                            </li>
                            <li className="item-servicos">
                                <a className="texto-header" href="#servicos-seguranca" onClick={lidarBoxServicosLeave}>
                                    Instalação de portões elétricos
                        </a>
                            </li>
                        </ul>
                    </div>
                    <div className={classeBoxSobre}
                        onMouseOver={lidarBoxSobreOver}
                        onMouseLeave={lidarBoxSobreLeave}
                    >
                        <a className="texto-header item-servicos" href="#sobre" onClick={lidarBoxSobreLeave}>
                            Clique aqui para saber mais sobre a AMPERE
                        </a>
                    </div>
                </div>
            </header>
        </AlertaClickExterno>
    )
}