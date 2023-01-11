import {
    FETCH_CATEGORY,
    CREATE_CATEGORY
} from './types';

import CategoryService from '../../services/category';

import { sendMessage } from './message';

export const getCategory = () => async dispatch => {
    return CategoryService.getCategory().then(
        response => {
            dispatch({
                type: FETCH_CATEGORY,
                payload: {
                    category: response.data.data
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

export const createCategory = (category, description, image) => async dispatch => {
    return CategoryService.createCategory(category, description, image).then(
        response => {
            dispatch({
                type: CREATE_CATEGORY
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
