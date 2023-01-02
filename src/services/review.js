import Api from '../Api';

const getReview = (serviceId) => {
    return Api.get(`/review/${serviceId}`);
};

const getReviewBySlug = (slug) => {
    return Api.get(`/review/slug/${slug}`);
};

const ReviewService = {
    getReview, getReviewBySlug
}

export default ReviewService;