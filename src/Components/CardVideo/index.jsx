import lixo from "../../Assets/Lixo.png";
import editar from "../../Assets/Editar.png";
import styled from "styled-components";

const CardContainer = styled.div`
    max-width: 432px;
    background-color: var(--preto);
    border: 5px solid ${(props) => props.cor};
    iframe {
        max-width: 100%;
    }
`;

const ContainerBotao = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const BotaoStyled = styled.button`
    display: flex;
    background-color: transparent;
    border: none;
    align-items: center;
    gap: 8px;
    padding: 5px 20px;
    border-radius: 20px;
    img {
        width: 25px;
    }
    p {
        font-family: var(--Roboto);
        font-weight: 400;
        font-size: 18px;
        color: var(--branco);
    }
    &:hover {
        box-shadow: inset 0 0 16px blue;
    }
`;

const CardVideo = ({ cor, caminho }) => {
    return (
        <CardContainer cor={cor}>
            <iframe src={caminho} title="Video Player" />
            <ContainerBotao>
                <BotaoStyled>
                    <img src={lixo} alt="apagar" />
                    <p>Apagar</p>
                </BotaoStyled>
                <BotaoStyled>
                    <img src={editar} alt="editar" />
                    <p>Editar</p>
                </BotaoStyled>
            </ContainerBotao>
        </CardContainer>
    );
};

export default CardVideo;
