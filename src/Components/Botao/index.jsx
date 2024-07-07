import styled from "styled-components";

const Botao = styled.button`
    width: 180px;
    height: 54px;
    background-color: transparent;
    font-family: var(--Sans3);
    font-size: 24px;
    font-weight: 900;
    color: var(--branco);
    border-radius: 16px;
    border: 3px solid var(--branco);
    transition: all 0.3s ease;

    &:hover{
        background-color: var(--preto);
        color: var(--azul);
        border-color: var(--azul);
        box-shadow: inset 0px 0px 16px var(--azul);
    }
`

export default Botao;