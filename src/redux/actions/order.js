import {
    FETCH_ORDER_USER,
    SET_MESSAGE,
} from './types';

import OrderService from '../../services/order';

export const getOrderUser = () => async dispatch => {
    return OrderService.getOrderUser().then(
        response => {

            dispatch({
                type: FETCH_ORDER_USER,
                payload: {
                    order: response.data.data
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
