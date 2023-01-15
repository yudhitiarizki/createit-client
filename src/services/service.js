import Api from '../Api';
import AuthHeader from './Auth-header';

const getServiceByCategory = (categoryId) => {
    return Api.get(`/category/${categoryId}`, {headers: AuthHeader()});
};

const getService = () => {
    return Api.get('/service', {headers: AuthHeader()});;
};

const getDetailService = (serviceId) => {
    return Api.get(`/service/${serviceId}`, {headers: AuthHeader()});
};

const getTopService = () => {
    return Api.get('/toprated', {headers: AuthHeader()});
};

const getServiceBySlug = (slug) => {
    return Api.get(`/service/slug/${slug}`, {headers: AuthHeader()});
}

const createService = (categoryId, title, description, image) => {
    return Api.post('/service', {categoryId, title, description, image}, {headers: AuthHeader()});
}

const getMyService = () => {
    return Api.get('/myservice', {headers: AuthHeader()});
}

const deleteService = (serviceId) => {
    return Api.delete(`/service/${serviceId}`, {headers: AuthHeader()})
}

const ServiceServices = {
    getServiceByCategory,
    getService,
    getDetailService,
    getTopService,
    getServiceBySlug,
    createService,
    getMyService,
    deleteService
};

export default ServiceServices;

