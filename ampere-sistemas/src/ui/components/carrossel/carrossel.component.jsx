import React, { useState, useEffect } from 'react'
import "./styles.css"

export const Carrossel = ({ arrayImagem, trocarImagem, id, children }) => {
    const [imagem, setImagem] = useState(arrayImagem[0])
    const [contador, setContador] = useState(0)

    useEffect(() => {
        contador < arrayImagem.length - 1 ? setContador(contador => contador + 1) : setContador(0)
        setImagem(arrayImagem[contador])
    }, [trocarImagem])

    return (
        <>
            {!!imagem &&
                <div id={id} className="container section" style={{ backgroundImage: `url(${imagem})` }}>
                    <div className="box-opaco" />
                    {children}
                </div>
            }
        </>
    )
}
