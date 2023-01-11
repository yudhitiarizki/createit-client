import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    APPLY_SELLER,
    SET_MESSAGE,
} from './types';

import { toast } from 'react-toastify';

import AuthService from '../../services/auth';

export const register = (firstName, lastName, email, username, password, repassword, phoneNumber) => dispatch => {
    return AuthService.register(firstName, lastName, email, username, password, repassword, phoneNumber).then(
        response => {
            dispatch({
                type: REGISTER_SUCCESS,
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

            dispatch({
                type: REGISTER_FAIL,
            });

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

            toast.success('ok', {
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
            dispatch({
                type: LOGIN_FAIL,
            });

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

export const logout = () => dispatch => {
    return AuthService.logout().then(
        response => {
            dispatch({
                type: LOGOUT
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

export const ApplySeller = (photoProfile, description, noRekening, bankName, cardHolder) => async dispatch => {
    return AuthService.ApplySeller(photoProfile, description, noRekening, bankName, cardHolder).then(
        response => {
            dispatch({
                type: APPLY_SELLER,
                payload: response.data.data
            })

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
        }, error => {
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
        },
    )
}
