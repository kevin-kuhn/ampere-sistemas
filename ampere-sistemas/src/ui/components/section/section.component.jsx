import React from "react"
import useInView from "react-cool-inview";
import produce from "immer"
import "./styles.css"

export const Section = ({
    texto,
    titulo,
    direcaoConteudo = 'column',
    id,
    fundo = "padrao",
    posicaoJustify = "centro",
    posicaoAlign = "centro",
    sectionsLocalizadas,
    lidarLocalizadorSections = () => { },
}) => {
    const { ref } = useInView(
        {
            threshold: 0.67,
            onEnter: () => {
                lidarLocalizadorSections(produce(sectionsLocalizadas, draft => { draft.push({ id: id, titulo: titulo }) }))
            },
            onLeave: () => {
                lidarLocalizadorSections(sectionsLocalizadas.filter(section => section.id !== id))
            }
        }
    )

    return (
        <div ref={ref} id={id} className={`container section ${fundo}`}>
            <div className="box-opaco" />
            <div className={`section-interna 
                ${posicaoJustify && posicaoJustify + '-justify'}
                ${posicaoAlign && posicaoAlign + '-align'}`
            }>
                <div className={`divisao-section-${direcaoConteudo}`}>
                    <h1 className="titulo auxiliar-banner">{titulo}</h1>
                    <p className="texto auxiliar-banner">{texto}</p>
                </div>
            </div>
        </div>
    )
}