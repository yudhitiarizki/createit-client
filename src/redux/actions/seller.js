import {
    SET_MESSAGE,
} from './types';

import SellerService from '../../services/seller';

export const getSeller = () => async dispatch => {
    return SellerService.getCategory().then(
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
