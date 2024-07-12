import styled from "styled-components";

const ContainerCampo = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    label{
        font-family: var(--Sans3);
        font-size: 24px;
        color: var(--branco);
        padding-bottom: 10px;
    }
    input{
        font-family: var(--Sans3);
        font-size: 20px;
        color: lightgray;
        padding: 10px 5px;
        background-color: transparent;
        border: 2px solid rgba(80, 80, 80, 100%);
        border-radius: 16px;
    }
    input::placeholder{
        font-family: var(--Sans3);
        font-size: 20px;
        color: gray;
        font-weight: 500;
    }

`


const Campo = ({ mPlaceholder, mLabel, campo}) => {
    return (
        <ContainerCampo >
            <label htmlFor={campo}>{mLabel}</label>
            <input required name={campo} type="text" id={campo} placeholder={mPlaceholder}></input>
        </ContainerCampo >
    )
}

export default Campo;