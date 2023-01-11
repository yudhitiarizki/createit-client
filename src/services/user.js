import Api from '../Api';

const getUser = () => {
    return Api.get('/users');
};

const getSeller = () => {
    return Api.get('/regseller');
}

const sellerApprove = (userId) => {
    return Api.patch('/regseller/approve', {userId});
}

const sellerReject = (userId) => {
    return Api.patch('/regseller/reject', {userId});
}

const UserServices = {
    getUser, getSeller, sellerApprove, sellerReject
};

export default UserServices;