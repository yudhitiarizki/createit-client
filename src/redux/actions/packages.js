import {
    FETCH_PACKAGES,
    FETCH_PACKAGES_BYSLUG,
    CREATE_PACKAGES,
    DELETE_PACKAGES,
    EDIT_PACKAGES,
    SET_MESSAGE,
} from './types';

import PackagesService from '../../services/packages';

import { toast } from 'react-toastify';

export const getPackage = (serviceId) => async dispatch => {
    return PackagesService.getPackage(serviceId).then(
        response => {
            dispatch({
                type: FETCH_PACKAGES,
                payload: {
                    packages: response.data.data
                }
            });

            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: response.data.message,
                    status: response.status
                },
            });

            return Promise.resolve();
        },
        error => {
            const message = error.response;

            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: message.data.message,
                    status: message.status
                },
            });

            return Promise.reject();
        },
    );
};

export const getPackageBySlug = (slug) => async dispatch => {
    return PackagesService.getPackageBySlug(slug).then(
        response => {
            dispatch({
                type: FETCH_PACKAGES_BYSLUG,
                payload: {
                    packages: response.data.data
                }
            });

            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: response.data.message,
                    status: response.status
                },
            });

            return Promise.resolve();
        },
        error => {
            const message = error.response;

            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: message.data.message,
                    status: message.status
                },
            });

            return Promise.reject();
        },
    );
};

export const createPackage = (serviceId, type, delivery, revision, noOfConcept, noOfPages, maxDuration, price) => async dispatch => {
    return PackagesService.createPackage(serviceId, type, delivery, revision, noOfConcept, noOfPages, maxDuration, price).then(
        response => {
            dispatch({
                type: CREATE_PACKAGES,
            });

            toast.success(response.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            return Promise.resolve();
        }, 
        error => {
            const message = error.response;

            toast.error(message.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            return Promise.reject();
        }
    )
}

export const deletePackage = (packageId) => async dispatch => {
    return PackagesService.deletePackage(packageId).then(
        response => {
            dispatch({
                type: DELETE_PACKAGES,
            });

            toast.success(response.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            return Promise.resolve();
        }, 
        error => {
            const message = error.response;

            toast.error(message.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            return Promise.reject();
        }
    )
}

export const editPackage = (packageId, serviceId, type, delivery, revision, noOfConcept, noOfPages, maxDuration, price) => async dispatch => {
    PackagesService.editPackage(packageId, serviceId, type, delivery, revision, noOfConcept, noOfPages, maxDuration, price).then(
        response => {
            dispatch({
                type: EDIT_PACKAGES,
            });

            toast.success(response.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            return Promise.resolve();
        }, 
        error => {
            const message = error.response;

            toast.error(message.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            return Promise.reject();
        }
    )
}
