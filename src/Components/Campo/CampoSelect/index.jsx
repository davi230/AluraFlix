import styled from "styled-components";

const ContainerCampo = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    label{
        width: 100%;
        font-family: var(--Sans3);
        font-size: 24px;
        color: var(--branco);
        padding-bottom: 10px;
    }
    select{
        font-family: var(--Sans3);
        font-size: 20px;
        color: lightgray;
        padding: 10px 5px;
        background-color: transparent;
        border: 2px solid rgba(80, 80, 80, 100%);
        border-radius: 16px;
    }
    option{
        font-family: var(--Sans3);
        font-size: 20px;
        color: gray;
        font-weight: 500;
    }

`


const CampoSelect = ({mLabel, campo}) => {
    return (
        <ContainerCampo >
            <label htmlFor={campo}>{mLabel}</label>
            <select name={campo} id={campo}>
                <option value="nenhuma categoria selecionada" defaultValue disabled>Selecione uma categoria</option>
                <option value="Front-End">Front-End</option>
                <option value="Back-End">Back-End</option>
                <option value="Mobile">Mobile</option>
            </select>
        </ContainerCampo >
    )
}

export default CampoSelect;