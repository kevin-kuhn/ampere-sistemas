export const sectionsListagem = [
    {
        id: 'home',
        fundo: 'seguranca',
        posicaoJustify: 'centro',
        posicaoAlign: 'centro',
        direcaoConteudo: 'column',
        titulo: 'Somos a Ampere',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    },
    {
        id: 2,
        fundo: 'padrao',
        posicaoJustify: 'centro',
        posicaoAlign: 'centro',
        direcaoConteudo: 'column',
        titulo: 'Somos a Ampere',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    },
    {
        id: 3,
        fundo: 'seguranca',
        posicaoJustify: 'centro',
        posicaoAlign: 'centro',
        direcaoConteudo: 'column',
        titulo: 'Somos a Ampere',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    },
    {
        id: 4,
        fundo: 'padrao',
        posicaoJustify: 'centro',
        posicaoAlign: 'centro',
        direcaoConteudo: 'column',
        titulo: 'Somos a Ampere',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    }
]

export const sectionsTitulos = sectionsListagem.map(section => {
    return {id: section.id, titulo: section.titulo}
})