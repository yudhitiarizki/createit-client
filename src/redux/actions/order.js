import {
    FETCH_ORDER_USER,
    CREATE_ORDER,
    FETCH_SELLER_ORDER_NEW,
    PATCH_SELLER_ORDER_NEW,
    FETCH_ORDER_PROGRESS,
    ORDER_FILE_UPLOAD
} from './types';

import OrderService from '../../services/order';

import { sendMessage } from './message';

export const getOrderUser = () => async dispatch => {
    return OrderService.getOrderUser().then(
        response => {

            dispatch({
                type: FETCH_ORDER_USER,
                payload: {
                    order: response.data.data
                }
            });

            return Promise.resolve();
        },
        error => {
            const message = error.response;

            sendMessage('error', message.data.message);

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

            sendMessage('success', response.data.message);

            return Promise.resolve();
        },
        error => {
            const message = error.response;

            sendMessage('error', message.data.message);

            return Promise.reject();
        }
    )
}

export const getOrderNew = () => async dispatch => {
    return OrderService.getOrderNew().then(
        response => {
            dispatch({
                type: FETCH_SELLER_ORDER_NEW,
                payload: response.data.data
            });

            return Promise.resolve()
        }, error => {
            const message = error.response;

            sendMessage('error', message.data.message);

            return Promise.reject();
        }
    )
}

export const patchOrderWorking = (orderId) => async dispatch => {
    return OrderService.patchOrderWorking(orderId).then(
        response => {
            dispatch({
                type: PATCH_SELLER_ORDER_NEW
            });

            sendMessage('success', response.data.message);

            return Promise.resolve();
        }, error => {
            const message = error.response;

            sendMessage('error', message.data.message);

            return Promise.reject();
        }
    )
}

export const getOrderProgress = () => async dispatch => {
    return OrderService.getOrderProgress().then(
        response => {
            dispatch({
                type: FETCH_ORDER_PROGRESS,
                payload: response.data.data
            });

            return Promise.resolve()
        }, error => {
            const message = error.response;

            sendMessage('error', message.data.message);

            return Promise.reject();
        }
    )
}

export const OrderUploadFile = (orderId, upldFileType, file) => async dispatch => {
    return OrderService.uploadFile(orderId, upldFileType, file).then(
        response => {
            dispatch({
                type: ORDER_FILE_UPLOAD
            });

            sendMessage('success', response.data.message);

            return Promise.resolve();
        }, error => {
            const message = error.response;

            sendMessage('error', message.data.message);

            return Promise.reject();
        }
    )
}
