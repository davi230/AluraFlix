import styled from "styled-components";
import PaginaPadrao from "../../Components/PaginaPadrao";
import Campo from "../../Components/Campo";
import CampoSelect from "../../Components/Campo/CampoSelect";
import CampoText from "../../Components/Campo/CampoText";
import useVideos from '../../Hooks/useVideos'

const CabecalhoForm = styled.div`
    text-align: center;
    h1{
        font-family: var(--Roboto);
        font-size: 60px;
        color: var(--branco);
    }
    p{
        font-family: var(--Roboto);
        font-size: 20px;
        color: var(--branco); 
    }
`

const FormEstilizado = styled.form`
    margin:20px 94px;
    hr{
        border: 1px solid rgba(255, 255, 255, 50%);
    }
    h2{
        font-size: 36px;
        font-family: var(--Sans3);
        font-weight: 400;
        color: var(--branco);
    }
    .mobitest{
        display: flex;
        gap: 24px;
        padding: 10px 0;
    }
`

const BotoesEstilizados = styled.div`
    display: flex;
    gap: 24px;
    .btn{
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
    .btn:hover{
        color: var(--azul);
        border-color: var(--azul);
    }
`





const NovoVideo = () => {
    const { adicionarVideo } = useVideos();

    const handleSubmit = (event) => {
        event.preventDefault();
        const novoVideo = {
            id: Date.now(),
            titulo: event.target.titulo.value,
            path: event.target.path.value,
            imagem: event.target.imagem.value,
            descricao: event.target.descricao.value,
            categoria: event.target.categoria.value,
        };
        adicionarVideo(novoVideo);
    };
    

    return (
        <PaginaPadrao>
            <CabecalhoForm>
                <h1>Novo Vídeo</h1>
                <p>Complete o Formulário para criar um Novo Card de Vídeo</p>
            </CabecalhoForm>
            <FormEstilizado onSubmit={handleSubmit}>
                <hr/>
                <h2>Criar Card</h2>
                <hr/>
                <div className="mobitest">
                    <Campo 
                        mPlaceholder={"Insira o título"}
                        mLabel={"Título"}
                        campo={"titulo"}
                    />
                    <CampoSelect 
                        mLabel={"Categoria"}
                        campo={"categoria"}
                    />
                </div>
                <div className="mobitest">
                    <Campo 
                            mPlaceholder={"Digite o link da imagem"}
                            mLabel={"Imagem"}
                            campo={"imagem"}
                        />
                    <Campo 
                            mPlaceholder={"Digite o link do vídeo"}
                            mLabel={"Vídeo"}
                            campo={"path"}
                        />
                </div>
                <CampoText 
                    mPlaceholder={"Sobre o que é o vídeo"}
                    mLabel={"Descrição"}
                    campo={"descricao"}
                />
                <BotoesEstilizados>
                    <input className="btn" type="submit" value="Enviar" />
                    <input className="btn" type="reset" value="Limpar" />
                </BotoesEstilizados>
            </FormEstilizado>
        </PaginaPadrao>
    )
}

export default NovoVideo;