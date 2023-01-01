import {
    FETCH_PACKAGES,
    SET_MESSAGE,
} from './types';

import PackagesService from '../../services/packages';

export const getPackage = (serviceId) => async dispatch => {
    return PackagesService.getPackage(serviceId).then(
        response => {
            dispatch({
                type: FETCH_PACKAGES,
                payload: {
                    packages: response.data.data
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
