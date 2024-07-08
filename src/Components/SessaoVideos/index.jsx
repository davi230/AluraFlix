import Titulo from "../Titulo";
import listaVideos from "../../Assets";
import CardVideo from "../CardVideo";
import styled from "styled-components";

const listaCategorias = [
    {
        id: 1,
        time: "Front End",
        cor: "var(--azul)",
    },
    {
        id: 2,
        time: "Back End",
        cor: "var(--verde)",
    },
    {
        id: 3,
        time: "Mobile",
        cor: "var(--amarelo)",
    },
];

const ListaEstilizada = styled.div`
    display: flex;
    justify-content: space-between;
`
const UlLouca = styled.ul`
    margin: 40px;
`

const SessaoVideos = () => {
    return (
        <UlLouca>
            {listaCategorias.map((categoria) => (
                <li key={categoria.id}>
                    <Titulo cor={categoria.cor}>
                        {categoria.time}
                    </Titulo>
                    <ListaEstilizada>
                    {listaVideos
                        .filter((video) => video.categoria === categoria.time)
                        .map((video, index) => (
                            <CardVideo key={index} cor={categoria.cor} {...video} caminho={video.path}/>
                        ))
                    }
                    </ListaEstilizada>
                </li>
            ))}
        </UlLouca>
    );
}

export default SessaoVideos;
