import styled from "styled-components";

const TituloEstilizado = styled.h3`
    background-color: ${(props) => props.cor};
    width: 300px;
    font-family: var(--Roboto);
    font-size: 32px;
    font-weight: 700;
    color: var(--branco);
    text-align: center;
    padding: 10px 0;
    margin-left: 40px;
    border-radius: 16px;
`

const Titulo = ({ cor, children }) => {
    return (
        <TituloEstilizado cor={cor}>{children}</TituloEstilizado>
    )
}

export default Titulo;