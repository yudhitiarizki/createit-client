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
};

const getServiceBySlug = (slug) => {
    return Api.get(`/service/slug/${slug}`);
}

const ServiceServices = {
    getServiceByCategory,
    getService,
    getDetailService,
    getTopService,
    getServiceBySlug
};

export default ServiceServices;

