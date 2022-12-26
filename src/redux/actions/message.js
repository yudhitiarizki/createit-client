import { SET_MESSAGE, CLEAR_MESSAGE } from './types';

export const setMessage = (message, status) => ({
    type: SET_MESSAGE,
    payload: {
        message: message,
        status: status
    },
});

export const clearMessage = () => ({
    type: CLEAR_MESSAGE,
});
