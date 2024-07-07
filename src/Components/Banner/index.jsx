import styled from "styled-components";
import ContainerTexto from "./ContainerTexto";

const SessaoBanner = styled.section`
    background-color: var(--azulOpacidade);
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 100px 20px 20px 20px;
`

const FigureEstilizada = styled.figure`
    background-image: url("https://img.youtube.com/vi/c8mVlakBESE/maxresdefault.jpg");
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    background-size: cover;
    margin: 0;
`

const Thumb = () => {
    const ThumbEstilizada = styled.iframe`
        width: 600px;
        height: 333px;
        border: none;
    `

    return (
        <ThumbEstilizada src="https://www.youtube.com/embed/c8mVlakBESE"/>
    )
}

const Banner = () => {
    return (
        <FigureEstilizada>
                <SessaoBanner>
                    <ContainerTexto />
                    <Thumb/>
                </SessaoBanner>
        </FigureEstilizada>
    )
}

export default Banner;