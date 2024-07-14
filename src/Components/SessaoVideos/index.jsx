import { useRef } from 'react';
import styled from 'styled-components';
import useVideos from '../../Hooks/useVideos.js';
import Titulo from '../Titulo';
import CardVideo from '../CardVideo';
import DialogEditar from '../DialogEditar';

const listaCategorias = [
    {
        id: 1,
        time: "Front End",
        cor: "var(--azulClaro)",
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
    gap: 24px;
`;

const UlLouca = styled.ul`
    margin: 40px;
`;

const SessaoVideos = () => {
    const { videos } = useVideos();
    const dialogRef = useRef(null);

    const abreDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
            console.log('cabra');
        }
    };

    return (
        <>
            <UlLouca>
                {listaCategorias.map((categoria) => (
                    <li key={categoria.id}>
                        <Titulo cor={categoria.cor}>
                            {categoria.time}
                        </Titulo>
                        <ListaEstilizada>
                            {videos
                                .filter((video) => video.categoria === categoria.time)
                                .map((video, index) => (
                                    <CardVideo aoEditar={abreDialog} key={index} cor={categoria.cor} {...video} caminho={video.path} />
                                ))}
                        </ListaEstilizada>
                    </li>
                ))}
            </UlLouca>
            <DialogEditar dialogRef={dialogRef} />
        </>
    );
};

export default SessaoVideos;
