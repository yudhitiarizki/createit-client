import {
    FETCH_REVIEW,
    FETCH_REVIEW_BYSLUG,
    SET_MESSAGE,
} from './types';

import ReviewService from '../../services/review';

export const getReview = (serviceId) => async dispatch => {
    return ReviewService.getReview(serviceId).then(
        response => {

            dispatch({
                type: FETCH_REVIEW,
                payload: {
                    review: response.data.data
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

export const getReviewBySlug = (slug) => async dispatch => {
    return ReviewService.getReviewBySlug(slug).then(
        response => {
            dispatch({
                type: FETCH_REVIEW_BYSLUG,
                payload: {
                    review: response.data.data
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
