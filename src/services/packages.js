import Api from '../Api';

const getPackage = (serviceId) => {
    return Api.get(`/packages/${serviceId}`);
}

const getPackageBySlug = (slug) => {
    return Api.get(`/packages/slug/${slug}`);
}

const createPackage = (serviceId, type, delivery, revision, noOfConcept, noOfPages, maxDuration, price) => {
    return Api.post('/packages', {
        serviceId, type, delivery, revision, noOfConcept, noOfPages, maxDuration, price
    })
}

const deletePackage = (packageId) => {
    return Api.delete(`/packages/${packageId}`);
}

const editPackage = (packageId, serviceId, type, delivery, revision, noOfConcept, noOfPages, maxDuration, price) => {
    return Api.put(`/packages/${packageId}`, {
        serviceId, type, delivery, revision, noOfConcept, noOfPages, maxDuration, price
    })
}

const PackagesService = {
    getPackage, getPackageBySlug, createPackage, deletePackage, editPackage
}

export default PackagesService;