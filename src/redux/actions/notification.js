import {
    FETCH_NOTIF,
    READ_NOTIF,
    SET_MESSAGE,
} from './types';

import NotificationService from '../../services/notification';
import { sendMessage } from './message';

export const getNotification = () => async dispatch => {
    return NotificationService.getNotification().then(
        response => {

            dispatch({
                type: FETCH_NOTIF,
                payload: {
                    notification: response.data.data
                }
            });

            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: response.data.message,
                    status: response.status
                },
            });

            return Promise.resolve();
        },
        error => {
            const message = error.response;

            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: message.data.message,
                    status: message.status
                },
            });

            return Promise.reject();
        },
    );
};

export const patchReadNotif = (notifId) => async dispatch => {
    console.log(notifId)
    return NotificationService.patchNotification(notifId).then(
        response => {
            dispatch({
                type: READ_NOTIF,
            });

            return Promise.resolve();
        },
        error => {
            const message = error.response.data.message;

            sendMessage('error', message);

            return Promise.reject();
        }
    )
}; 