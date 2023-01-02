import Api from '../Api';

const getPackage = (serviceId) => {
    return Api.get(`/packages/${serviceId}`);
}

const getPackageBySlug = (slug) => {
    return Api.get(`/packages/slug/${slug}`);
}

const PackagesService = {
    getPackage, getPackageBySlug
}

export default PackagesService;