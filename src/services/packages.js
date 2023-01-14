import Api from '../Api';
import AuthHeader from './Auth-header';

const getPackage = (serviceId) => {
    return Api.get(`/packages/${serviceId}`, {headers: AuthHeader()});
}

const getPackageBySlug = (slug) => {
    return Api.get(`/packages/slug/${slug}`, {headers: AuthHeader()});
}

const createPackage = (serviceId, type, delivery, revision, noOfConcept, noOfPages, maxDuration, price) => {
    return Api.post('/packages', {
        serviceId, type, delivery, revision, noOfConcept, noOfPages, maxDuration, price
    }, {headers: AuthHeader()})
}

const deletePackage = (packageId) => {
    return Api.delete(`/packages/${packageId}`, {headers: AuthHeader()});
}

const editPackage = (packageId, serviceId, type, delivery, revision, noOfConcept, noOfPages, maxDuration, price) => {
    return Api.put(`/packages/${packageId}`, {
        serviceId, type, delivery, revision, noOfConcept, noOfPages, maxDuration, price
    }, {headers: AuthHeader()})
}

const PackagesService = {
    getPackage, getPackageBySlug, createPackage, deletePackage, editPackage
}

export default PackagesService;