import React, { useState, useEffect } from 'react';
import { Container, Section, BoxUtilitario } from "./ui/components"
import { sectionsListagem, sectionsTitulos } from "./sections"


function App() {
  const [sectionsLocalizadas, setSectionsLocalizadas] = useState([])

  const lidarLocalizadorSections = sections => {
    setSectionsLocalizadas(sections)
  }

  // console.log(sectionsTitulos);

  return (
    <>
      <Container>
      {sectionsListagem.map(section => {
        return (
          <Section 
            id={section.id} 
            fundo={section.fundo}
            titulo={section.titulo}
            texto={section.texto}
            posicaoJustify={section.posicaoJustify}
            posicaoAlign={section.posicaoAlign}
            lidarLocalizadorSections={lidarLocalizadorSections} 
            sectionsLocalizadas={sectionsLocalizadas}
          />
        )
      })}
      </Container>
      <BoxUtilitario 
        sectionsLocalizadas={sectionsLocalizadas}
        sectionsTitulos={sectionsTitulos} 
      />
    </>
  )
}

export default App;
