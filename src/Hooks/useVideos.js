import { useState } from 'react';
import listaVideos from '../Assets/index.js';

const useVideos = () => {
    const [videos, setVideos] = useState(listaVideos);

    const adicionarVideo = (novoVideo) => {
        setVideos((prevVideos) => [...prevVideos, novoVideo]);
    };

    return { videos, adicionarVideo };
};

export default useVideos;
