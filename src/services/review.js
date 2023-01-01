import Api from '../Api';

const getReview = (serviceId) => {
    return Api.get(`/review/${serviceId}`);
};

const ReviewService = {
    getReview
}

export default ReviewService;