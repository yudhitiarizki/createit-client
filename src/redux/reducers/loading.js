import {
    SET_TO_LOADING,
    SET_TO_NOT_LOADING
} from '../actions/types';

const initialState = {
    isLoading: true
};

const setLoading = (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case SET_TO_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case SET_TO_NOT_LOADING:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
};

export default setLoading;