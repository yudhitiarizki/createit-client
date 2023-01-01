import Api from '../Api';

const getServiceByCategory = (categoryId) => {
    return Api.get(`/category/${categoryId}`);
};

const getService = () => {
    return Api.get('/service');;
};

const getDetailService = (serviceId) => {
    return Api.get(`/service/${serviceId}`);
};

const getTopService = () => {
    return Api.get('/toprated');
}

const ServiceServices = {
    getServiceByCategory,
    getService,
    getDetailService,
    getTopService
};

export default ServiceServices;

