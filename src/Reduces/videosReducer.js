const ADD_VIDEO = 'ADD_VIDEO';
const EDIT_VIDEO = 'EDIT_VIDEO';
const DELETE_VIDEO = 'DELETE_VIDEO';

const initialState = [];

const videosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_VIDEO:
            return [...state, action.payload];
        case EDIT_VIDEO:
            return state.map(video => video.id === action.payload.id ? action.payload : video);
        case DELETE_VIDEO:
            return state.filter(video => video.id !== action.payload.id);
        default:
            return state;
    }
};

export { initialState, ADD_VIDEO, EDIT_VIDEO, DELETE_VIDEO };
export default videosReducer;
