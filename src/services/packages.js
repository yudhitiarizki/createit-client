import Api from '../Api';

const getPackage = (serviceId) => {
    return Api.get(`/packages/${serviceId}`);
}

const PackagesService = {
    getPackage
}

export default PackagesService;