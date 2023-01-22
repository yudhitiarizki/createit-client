import {
    SET_CHAT,
    GET_ROOM_USER,
    SEND_CHAT
} from './types';

import ChatService from '../../services/chat';

import { sendMessage } from './message';

export const setChat = (payload) => {
    return {
        type: SET_CHAT,
        payload
    }
};


export const getRoomUser = () => async dispatch => {
    return ChatService.getRoomUser().then(
        response => {
            dispatch({
                type: GET_ROOM_USER,
                payload: response.data.data
            });

            return Promise.resolve();
        }, error => {
            const message = error.response;

            sendMessage('error', message.data.message);

            return Promise.reject();
        }
    )
}

export const getRoomSeller = () => async dispatch => {
    return ChatService.getRoomSeller().then(
        response => {
            dispatch({
                type: GET_ROOM_USER,
                payload: response.data.data
            });

            return Promise.resolve();
        }, error => {
            const message = error.response;

            sendMessage('error', message.data.message);

            return Promise.reject();
        }
    )
}

export const sendChat = (roomId, message) => async dispatch => {
    return ChatService.sendChat(roomId, message).then(
        response => {
            dispatch({
                type: SEND_CHAT
            });

            console.log(response.data.message);

            return Promise.resolve();
        }, error => {
            const message = error.response;

            sendMessage('error', message.data.message);

            return Promise.reject();
        }
    )
}

