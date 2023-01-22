import {
    SET_CHAT
} from './types';

export const setChat = (payload) => {
    return {
        type: SET_CHAT,
        payload
    }
};

