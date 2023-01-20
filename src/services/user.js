import Api from '../Api';
import AuthHeader from './Auth-header';

const getUser = () => {
    return Api.get('/users', {headers: AuthHeader()});
};

const getSeller = () => {
    return Api.get('/regseller', {headers: AuthHeader()});
}

const sellerApprove = (userId) => {
    return Api.patch('/regseller/approve', {userId}, {headers: AuthHeader()});
}

const sellerReject = (userId) => {
    return Api.patch('/regseller/reject', {userId}, {headers: AuthHeader()});
}

const editProfile = (firstName, lastName, description, photoProfile) => {
    return Api.put('/seller', {firstName, lastName, description, photoProfile}, {headers: AuthHeader()});
}

const UserServices = {
    getUser, getSeller, sellerApprove, sellerReject, editProfile
};

export default UserServices;