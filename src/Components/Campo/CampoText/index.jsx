import styled from "styled-components";

const ContainerCampo = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 50%;
    padding-bottom: 10px ;
    label{
        width: 100%;
        font-family: var(--Sans3);
        font-size: 24px;
        color: var(--branco);
        padding-bottom: 10px;
    }
    textarea{
        font-family: var(--Sans3);
        font-size: 20px;
        color: lightgray;
        padding: 10px 5px;
        background-color: transparent;
        border: 2px solid rgba(80, 80, 80, 100%);
        border-radius: 16px;
    }

`


const CampoText = ({mPlaceholder, mLabel, campo}) => {
    return (
        <ContainerCampo >
            <label htmlFor={campo}>{mLabel}</label>
            <textarea placeholder={mPlaceholder} id={campo} name={campo} rows="4" cols="50"></textarea>
        </ContainerCampo >
    )
}

export default CampoText;