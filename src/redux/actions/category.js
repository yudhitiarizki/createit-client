import {
    FETCH_CATEGORY,
    SET_MESSAGE,
} from './types';

import CategoryService from '../../services/category';

export const getCategory = () => async dispatch => {
    return CategoryService.getCategory().then(
        response => {
            dispatch({
                type: FETCH_CATEGORY,
                payload: {
                    category: response.data.data
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
