import {
    SET_TO_LOADING,
    SET_TO_NOT_LOADING,
    SOMETHING_WENT_WRONG
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

export const setWentWrong = () => {
    return {
        type: SOMETHING_WENT_WRONG
    }
}