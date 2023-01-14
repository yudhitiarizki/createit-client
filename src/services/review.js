import Api from '../Api';
import AuthHeader from './Auth-header';

const getReview = (serviceId) => {
    return Api.get(`/review/${serviceId}`, {headers: AuthHeader()});
};

const getReviewBySlug = (slug) => {
    return Api.get(`/review/slug/${slug}`, {headers: AuthHeader()});
};

const createReview = (orderId, review, rating) => {
    return Api.post('/review', {orderId, review, rating}, {headers: AuthHeader()});
}

const ReviewService = {
    getReview, getReviewBySlug, createReview
}

export default ReviewService;