import {
    FETCH_ORDER_USER,
    CREATE_ORDER,
    FETCH_SELLER_ORDER_NEW,
    PATCH_SELLER_ORDER_NEW,
    FETCH_ORDER_PROGRESS,
    ORDER_FILE_UPLOAD, 
    FETCH_ORDER_APPROVE,
    SET_DETAIL_ORDER,
    DELETE_DETAIL_ORDER,
    PATCH_ORDER_DONE,
    REVISING_ORDER, 
    APPROVE_ORDER
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

export const patchOrderDone = (orderId) => async dispatch => {
    return OrderService.patchOrderDone(orderId).then(
        response => {
            dispatch({
                type: PATCH_ORDER_DONE
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
export const getOrderApprove = () => async dispatch => {
    return OrderService.getOrderApprove().then(
        response => {
            dispatch({
                type: FETCH_ORDER_APPROVE,
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

export const setDetailOrder = (orderId, order) => ({
    type: SET_DETAIL_ORDER,
    payload: {
        orderId: orderId,
        order: order
    }
})

export const deleteDetailOrder = () => ({
    type: DELETE_DETAIL_ORDER,
    payload: {
        orderId: '',
        order: {}
    }
})

export const OrderUploadFile = (orderId, upldFileType, file, fileName) => async dispatch => {
    return OrderService.uploadFile(orderId, upldFileType, file, fileName).then(
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

export const orderRevising = (orderId, note) => async dispatch => {
    return OrderService.orderRevising(orderId, note).then(
        response => {
            dispatch({
                type: REVISING_ORDER
            })
            
            sendMessage('success', response.data.message);

            return Promise.resolve();
        }, error => {
            const message = error.response;

            sendMessage('error', message.data.message);

            return Promise.reject();
        }
    )
}

export const orderApprove = (orderId) => async dispatch => {
    return OrderService.orderApprove(orderId).then(
        response => {
            dispatch({
                type: APPROVE_ORDER
            })
            
            sendMessage('success', response.data.message);

            return Promise.resolve();
        }, error => {
            const message = error.response;

            sendMessage('error', message.data.message);

            return Promise.reject();
        }
    )
}

