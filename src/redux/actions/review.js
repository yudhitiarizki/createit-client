import {
    FETCH_REVIEW,
    FETCH_REVIEW_BYSLUG,
    CREATE_REVIEW,
} from './types';

import ReviewService from '../../services/review';

import { sendMessage } from './message';

export const getReview = (serviceId) => async dispatch => {
    return ReviewService.getReview(serviceId).then(
        response => {

            dispatch({
                type: FETCH_REVIEW,
                payload: {
                    review: response.data.data
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

export const getReviewBySlug = (slug) => async dispatch => {
    return ReviewService.getReviewBySlug(slug).then(
        response => {
            dispatch({
                type: FETCH_REVIEW_BYSLUG,
                payload: {
                    review: response.data.data
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

export const createReview = (orderId, review, rating) => async dispatch => {
    return ReviewService.createReview(orderId, review, rating).then(
        response => {
            dispatch({
                type: CREATE_REVIEW
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
