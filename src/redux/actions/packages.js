import {
    FETCH_PACKAGES,
    FETCH_PACKAGES_BYSLUG,
    CREATE_PACKAGES,
    DELETE_PACKAGES,
    EDIT_PACKAGES,
    SET_MESSAGE,
} from './types';

import PackagesService from '../../services/packages';

import { sendMessage } from './message';

export const getPackage = (serviceId) => async dispatch => {
    return PackagesService.getPackage(serviceId).then(
        response => {
            dispatch({
                type: FETCH_PACKAGES,
                payload: {
                    packages: response.data.data
                }
            });

            sendMessage('success', response.data.message);

            return Promise.resolve();
        },
        error => {
            const message = error.response;

            sendMessage('error', message.data.message);

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

            sendMessage('success', response.data.message);

            return Promise.resolve();
        },
        error => {
            const message = error.response;

            sendMessage('error', message.data.message);

            return Promise.reject();
        },
    );
};

export const createPackage = (serviceId, type, delivery, revision, noOfConcepts, noOfPage, maxDuration, price) => async dispatch => {
    return PackagesService.createPackage(serviceId, type, delivery, revision, noOfConcepts, noOfPage, maxDuration, price).then(
        response => {
            dispatch({
                type: CREATE_PACKAGES,
            });

            sendMessage('success', response.data.message);

            return Promise.resolve();
        }, 
        error => {
            const message = error.response;

            sendMessage('error', message.data.message);

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

            sendMessage('success', response.data.message);

            return Promise.resolve();
        }, 
        error => {
            const message = error.response;

            sendMessage('error', message.data.message);

            return Promise.reject();
        }
    )
}

export const editPackage = (packageId, serviceId, type, delivery, revision, noOfConcepts, noOfPage, maxDuration, price) => async dispatch => {
    PackagesService.editPackage(packageId, serviceId, type, delivery, revision, noOfConcepts, noOfPage, maxDuration, price).then(
        response => {
            dispatch({
                type: EDIT_PACKAGES,
            });

            sendMessage('success', response.data.message);

            return Promise.resolve();
        }, 
        error => {
            const message = error.response;

            sendMessage('error', message.data.message);

            return Promise.reject();
        }
    )
}
