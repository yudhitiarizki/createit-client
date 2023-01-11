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

const createService = (categoryId, title, description, image) => {
    return Api.post('/service', {categoryId, title, description, image});
}

const getMyService = () => {
    return Api.get('/myservice');
}

const deleteService = (serviceId) => {
    console.log(serviceId, 'y')
    return Api.delete(`/service/${serviceId}`)
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

