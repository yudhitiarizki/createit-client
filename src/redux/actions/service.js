import {
    FETCH_SERVICEBYCATEGORY,
    FETCH_SERVICE,
    FETCH_DETAILSERVICE,
    FETCH_TOPSERVICE,
    FETCH_SERVICE_BYSLUG,
    CREATE_SERVICE,
    FETCH_MY_SERVICE, 
    DELETE_SERVICE
} from './types';

import { sendMessage } from './message';

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

export const getService = () => async dispatch => {
    return Service.getService().then(
        response => {

            dispatch({
                type: FETCH_SERVICE,
                payload: {
                    service: response.data.data
                }
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

export const getDetailService = (serviceId) => async dispatch => {
    return Service.getDetailService(serviceId).then(
        response => {

            dispatch({
                type: FETCH_DETAILSERVICE,
                payload: response.data.data
            });

            sendMessage('success', response.data.message);

            return Promise.resolve();
        }, error => {
            const message = error.response;

            sendMessage('error', message.data.message);

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

            sendMessage('success', response.data.message);

            return Promise.resolve();
        }, error => {
            const message = error.response;

            sendMessage('error', message.data.message);

            return Promise.reject();
        }
    )
}

export const getServiceBySlug = (slug) => async dispatch => {
    return Service.getServiceBySlug(slug).then(
        response => {

            dispatch({
                type: FETCH_SERVICE_BYSLUG,
                payload: {
                    service: response.data.data
                }
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

export const createService = (categoryId, title, description, image) => async dispatch => {
    return Service.createService(categoryId, title, description, image).then(
        response => {
            dispatch({
                type: CREATE_SERVICE
            });

            sendMessage('success', response.data.message);

            return Promise.resolve();
        },
        error => {
            const message = error.response;

            sendMessage('error', message.data.message);

            return Promise.reject();
        },
    )
}

export const getMyService = () => async dispatch => {
    return Service.getMyService().then(
        response => {

            dispatch({
                type: FETCH_MY_SERVICE,
                payload: {
                    service: response.data.data
                }
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

export const deleteService = (serviceId) => async dispatch => {
    return Service.deleteService(serviceId).then(
        response => {

            dispatch({
                type: DELETE_SERVICE,
                payload: {
                    service: response.data.data
                }
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