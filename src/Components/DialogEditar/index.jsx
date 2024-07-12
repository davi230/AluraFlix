import styled from "styled-components";

const DialogEstilizado = styled.dialog`
    background-color: #03122f;
    border: 5px solid var(--azulClaro);
    max-width: 600px;
    padding: 80px;
`

const TituloEstilizado = styled.h1`
    font-family: var(--Roboto);
    font-size: 48px;
    font-weight: 500;
    color: var(--azul);
`

const LabelEstilizada = styled.label`
    box-sizing: border-box;
    width: 100%;

    font-family: var(--Sans3);
    font-size: 18px;
    font-weight: 500;
    color: var(--branco);
`

const InputEstilizado = styled.input`
    box-sizing: border-box;
    width: 100%;
    background-color: transparent;
    border: 2px solid gray;
    border-radius: 16px;
    padding: 10px;
    margin: 6px 0 20px 0;

    font-family: var(--Sans3);
    font-size: 18px;
    font-weight: 500;
    color: lightgray; 

    &::placeholder{
        color: gray;
    }  
`
const SelectEstilizado = styled.select`
    box-sizing: border-box;
    width: 100%;
    background-color: transparent;
    border: 2px solid gray;
    border-radius: 16px;
    padding: 10px;
    margin: 6px 0 20px 0;

    font-family: var(--Sans3);
    font-size: 18px;
    font-weight: 500;
    color: lightgray;   
`

const TextAreaEstilizado = styled.textarea`
    box-sizing: border-box;
    width: 100%;
    background-color: transparent;
    border: 2px solid gray;
    border-radius: 16px;
    padding: 10px;
    margin: 6px 0 20px 0;

    font-family: var(--Sans3);
    font-size: 18px;
    font-weight: 500;
    color: lightgray;  
    &::placeholder{
        color: gray;
    }  
    `
    const OptEstilizado = styled.option`
        background-color: #03122f;
        color: var(--branco);
        &:disabled{
            background-color: #031280;
            color: gray;
        }
    `
const ContainerBotoes = styled.div`
    display: flex;
    justify-content: space-between;
    .btnForm{
    font-size: 20px;
    font-family: var(--Sans3);
    font-weight: 600;
    color: var(--branco);
    background-color: transparent;
    border: 3px solid gray;
    border-radius: 16px;
    padding:5px 30px;
    cursor: pointer;
}
.btnForm:hover{
    color: var(--azul);
    border-color: var(--azul);
}

`


const CampoDialog = ({ mPlaceholder, mLabel, campo }) => {
    return (
        <>
            <LabelEstilizada htmlFor={campo}>{mLabel}</LabelEstilizada>
            <InputEstilizado type="text" id={campo} name={campo} placeholder={mPlaceholder} />
        </>
    )
}


const SelectDialog = ({ mLabel, campo }) => {
    return (
        <>
            <LabelEstilizada htmlFor={campo}>{mLabel}</LabelEstilizada>
            <SelectEstilizado id={campo} name={campo}>
                <OptEstilizado value="none" selected disabled defaultValue>Selecione uma categoria</OptEstilizado>
                <OptEstilizado value="Front-End">Front-End</OptEstilizado>
                <OptEstilizado value="Back-End">Back-End</OptEstilizado>
                <OptEstilizado value="Mobile">Mobile</OptEstilizado>
            </SelectEstilizado>
        </>
    )
}


const TextAreaDialog = ({ mPlaceholder, mLabel, campo }) => {
    return (
        <>
            <LabelEstilizada htmlFor={campo}>{mLabel}</LabelEstilizada>
            <TextAreaEstilizado id={campo} name={campo} placeholder={mPlaceholder} />
        </>
    )
}





const DialogEditar = ({ dialogRef }) => {
    return (
        <DialogEstilizado ref={dialogRef}>
            <TituloEstilizado>Editar Card:</TituloEstilizado>
            <form action="">

                <CampoDialog
                    mPlaceholder={"Insira o título"}
                    mLabel={"Título"}
                    campo={"titulo"}
                />

                <SelectDialog 
                    mLabel={"Categoria"}
                    campo={"categoria"}
                />

                <CampoDialog
                    mPlaceholder={"Digite o link da imagem"}
                    mLabel={"Imagem"}
                    campo={"imagem"}
                />

                <CampoDialog
                    mPlaceholder={"Digite o link do vídeo"}
                    mLabel={"Vídeo"}
                    campo={"video"}
                />

                <TextAreaDialog
                    mPlaceholder={"Insira a descrição"}
                    mLabel={"Descrição"}
                    campo={"descricao"}
                />

                <ContainerBotoes>
                    <input className="btnForm" type="submit" value="Guardar" />
                    <input className="btnForm" type="reset" value="Limpar" />
                </ContainerBotoes>

            </form>
        </DialogEstilizado>
    )
}

export default DialogEditar;