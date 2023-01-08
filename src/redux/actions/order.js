import {
    FETCH_ORDER_USER,
    CREATE_ORDER,
    SET_MESSAGE,
} from './types';

import OrderService from '../../services/order';

import { toast } from 'react-toastify';

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

export const createOrder = (packageId, note, paymentMethod, bankName) => async dispatch => {
    return OrderService.createOrder(packageId, note, paymentMethod, bankName).then(
        response => {

            dispatch({
                type: CREATE_ORDER,
                payload: response.data.data
            });

            toast.success(response.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            return Promise.resolve();
        },
        error => {
            const message = error.response;

            toast.error(message.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            return Promise.reject();
        }
    )
}
