import Api from '../Api';

const getReview = (serviceId) => {
    return Api.get(`/review/${serviceId}`);
};

const getReviewBySlug = (slug) => {
    return Api.get(`/review/slug/${slug}`);
};

const createReview = (orderId, review, rating) => {
    return Api.post('/review', {orderId, review, rating});
}

const ReviewService = {
    getReview, getReviewBySlug, createReview
}

export default ReviewService;