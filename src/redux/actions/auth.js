import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    APPLY_SELLER,
    SET_MESSAGE,
    SWITCH_TO_SELLER,
    SWITCH_TO_BUYER,
    VERIFY_EMAIL
} from './types';

import { sendMessage } from './message';

import AuthService from '../../services/auth';

export const register = (firstName, lastName, email, username, password, repassword, phoneNumber) => dispatch => {
    return AuthService.register(firstName, lastName, email, username, password, repassword, phoneNumber).then(
        response => {
            dispatch({
                type: REGISTER_SUCCESS,
            });

            sendMessage('success', response.data.message);

            return Promise.resolve();
        },
        error => {
            const message = error.response;

            dispatch({
                type: REGISTER_FAIL,
            });

            sendMessage('error', message.data.message);

            return Promise.reject();
        },
    );
};

export const login = (username, password) => dispatch => {
    return AuthService.login(username, password).then(
        data => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });

            sendMessage('success', 'Login successfully');

            return Promise.resolve();
        },
        error => {
            dispatch({
                type: LOGIN_FAIL,
            });

            const message = error.response;

            sendMessage('error', message.data.message);
            

            return Promise.reject();
        },
    );
};

export const logout = () => dispatch => {
    return AuthService.logout().then(
        response => {
            dispatch({
                type: LOGOUT
            });

            sendMessage('success', response.data.message);

            return Promise.resolve();
        },
        error => {
            const message = error.response;

            sendMessage('error', message.data.message);

            return Promise.reject();
        },
    );
};

export const ApplySeller = (photoProfile, description, noRekening, bankName, cardHolder) => async dispatch => {
    return AuthService.ApplySeller(photoProfile, description, noRekening, bankName, cardHolder).then(
        response => {
            dispatch({
                type: APPLY_SELLER,
                payload: response.data.data
            })

            sendMessage('success', response.data.message);

            return Promise.resolve();
        }, error => {
            const message = error.response;

            sendMessage('error', message.data.message);

            return Promise.reject();
        },
    )
}

export const switchtoSeller = () => {
    return {
        type: SWITCH_TO_SELLER
    }
}

export const switchtoBuyer = () => {
    return {
        type: SWITCH_TO_BUYER
    }
}

export const VerifEmail = (token) => async dispatch => {
    return AuthService.VerifEmail(token).then(
        response => {
            dispatch({
                type: VERIFY_EMAIL
            });

            sendMessage('success', response.data.message);

            return Promise.resolve();
        }, error => {
            const message = error.response;

            sendMessage('error', message.data.message);

            return Promise.reject();
        },
    )
}