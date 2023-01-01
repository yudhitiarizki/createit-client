import {
    FETCH_SERVICEBYCATEGORY,
    FETCH_SERVICE,
    FETCH_DETAILSERVICE,
    SET_MESSAGE,
    FETCH_TOPSERVICE,
} from './types';

import Service from '../../services/service';

export const getServiceByCategory = (categoryId) => async dispatch => {
    return Service.getServiceByCategory(categoryId).then(
        response => {

            dispatch({
                type: FETCH_SERVICEBYCATEGORY,
                payload: {
                    service: response.data.data
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

export const getService = () => async dispatch => {
    return Service.getService().then(
        response => {

            dispatch({
                type: FETCH_SERVICE,
                payload: {
                    service: response.data.data
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
}

export const getDetailService = (serviceId) => async dispatch => {
    return Service.getDetailService(serviceId).then(
        response => {

            dispatch({
                type: FETCH_DETAILSERVICE,
                payload: response.data.data
            });

            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: response.data.message,
                    status: response.status
                },
            });

            return Promise.resolve();
        }, error => {
            const message = error.response;

            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: message.data.message,
                    status: message.status
                },
            });

            return Promise.reject();
        }
    )
};

export const getTopService = () => async dispatch => {
    return Service.getTopService().then(
        response => {
            dispatch({
                type: FETCH_TOPSERVICE,
                payload: {
                    service: response.data.data
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
        }, error => {
            const message = error.response;

            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: message.data.message,
                    status: message.status
                },
            });

            return Promise.reject();
        }
    )
}
