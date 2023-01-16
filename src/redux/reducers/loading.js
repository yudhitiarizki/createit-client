import {
    SET_TO_LOADING,
    SET_TO_NOT_LOADING,
    SOMETHING_WENT_WRONG
} from '../actions/types';

const initialState = {
    isLoading: false,
    isError: false
};

const setLoading = (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case SET_TO_LOADING:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case SET_TO_NOT_LOADING:
            return {
                ...state,
                isLoading: false,
                isError: false
            }
        case SOMETHING_WENT_WRONG:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state
    }
};

export default setLoading;