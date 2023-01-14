import {
    SET_TO_LOADING,
    SET_TO_NOT_LOADING
} from './types';

export const setToLoad = () => {
    return {
        type: SET_TO_LOADING
    }
};

export const setToNotLoad = () => {
    return {
        type: SET_TO_NOT_LOADING
    }
};