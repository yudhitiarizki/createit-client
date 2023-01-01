import {
    FETCH_NOTIF,
    SET_MESSAGE,
} from './types';

import NotificationService from '../../services/notification';

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
