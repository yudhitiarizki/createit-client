import {  
    FETCH_USER,
    FETCH_SELLER,
    APPROVE_SELLER,
    REJECT_SELLER
} from  './types';

import UserServices from '../../services/user';

import { sendMessage } from './message';

export const getUser = () => async dispatch => {
    return UserServices.getUser().then(
        response => {
            dispatch({
                type: FETCH_USER,
                payload: {
                    user: response.data.data
                }
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

export const getSeller = () => async dispatch => {
    return UserServices.getSeller().then(
        response => {
            dispatch({
                type: FETCH_SELLER,
                payload: response.data.data
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

export const sellerApprove = (userId) => async dispatch => {
    return UserServices.sellerApprove(userId).then(
        response => {
            dispatch({
                type: APPROVE_SELLER
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

export const sellerReject = (userId) => async dispatch => {
    return UserServices.sellerReject(userId).then(
        response => {
            dispatch({
                type: REJECT_SELLER
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