import { createContext, useReducer } from 'react';
import videosReducer, { initialState } from '../Reduces/videosReducer.js';

const VideosContext = createContext();

const VideosProvider = ({ children }) => {
    const [state, dispatch] = useReducer(videosReducer, initialState);

    const addVideo = (video) => {
        dispatch({ type: 'ADD_VIDEO', payload: video });
    };

    const editVideo = (video) => {
        dispatch({ type: 'EDIT_VIDEO', payload: video });
    };

    const deleteVideo = (id) => {
        dispatch({ type: 'DELETE_VIDEO', payload: { id } });
    };

    return (
        <VideosContext.Provider value={{ videos: state, addVideo, editVideo, deleteVideo }}>
            {children}
        </VideosContext.Provider>
    );
};

export { VideosContext, VideosProvider };
