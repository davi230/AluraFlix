import styled from "styled-components"

    const TextoEstilizado = styled.div`
        max-width: 50%;
    `

    const Titulo = styled.h1`
        font-size: 48px;
        font-family: var(--Sans3);
        font-weight: 700;
        color: var(--branco);
        background-color: var(--azulClaro);
        width: 300px;
        padding: 16px;
        text-align: center;
        border-radius: 16px;
    `

    const SubTitulo = styled.h2`
        font-size: 46px;
        font-family: var(--Roboto);
        font-weight: 400;
        color: var(--branco);
    `
    const Paragrafo = styled.p`
        font-size: 18px;
        font-family: var(--Roboto);
        font-weight: 200;
        color: var(--branco);
    `
const ContainerTexto = () => {
    return (
        <TextoEstilizado>
            <Titulo>FRONT END</Titulo>
            <SubTitulo>SEO com React</SubTitulo>
            <Paragrafo>Eu to aqui fora nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! </Paragrafo>
        </TextoEstilizado>
    )
}

export default ContainerTexto;