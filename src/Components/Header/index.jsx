import styled from "styled-components";
import logo from "../../Assets/Logo.png"
import Botao from "../Botao";
import { Link } from "react-router-dom";

const HeaderEstilizado = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 42px 51px;
    border-bottom: 4px solid var(--azul);
    box-shadow:0px 0px 24px var(--azul)
`
const ContainerBotao = styled.div`
    display: flex;
    gap: 20px;
`


const Header = () => {
    return (
        <HeaderEstilizado>
            <img src={logo} alt="Alura Flix" />
            <ContainerBotao>
            <Link to="/">
                <Botao>Home</Botao>
            </Link>
            <Link to="/NovoVideo">
                <Botao>Novo Vídeo</Botao>
            </Link>
            </ContainerBotao>
        </HeaderEstilizado>
    )
}

export default Header;