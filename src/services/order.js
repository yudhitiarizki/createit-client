import Api from '../Api';
import AuthHeader from './Auth-header';

const getOrderUser = () => {
    return Api.get('/user/order', {headers: AuthHeader()});
};

const createOrder = (packageId, note, paymentMethod, bankName) => {
    return Api.post('/user/order', {packageId, note, paymentMethod, bankName}, {headers: AuthHeader()});
}

const getOrderNew = () => {
    return Api.get('/seller/order/new', {headers: AuthHeader()});
}

const patchOrderWorking = (orderId) => {
    return Api.patch('/seller/order/new', {orderId}, {headers: AuthHeader()});
};

const patchOrderDone = (orderId) => {
    return Api.patch('/admin/order/done', {orderId}, {headers: AuthHeader()});
};

const getOrderProgress = () => {
    return Api.get('/seller/order/onprogress', {headers: AuthHeader()});
}

const uploadFile = (orderId, upldFileType, file, fileName) => {
    return Api.post('/file', {orderId, upldFileType, file, fileName}, {headers: AuthHeader()})
}

const getOrderApprove = () => {
    return Api.get('/admin/order/approve', {headers: AuthHeader()});
}

const orderRevising = (orderId, note) => {
    return Api.post('/user/order/revision', {orderId, note}, {headers: AuthHeader()})
}

const orderApprove = (orderId) => {
    return Api.patch('/user/order/approve', {orderId}, {headers: AuthHeader()});
}


const OrderService = {
    getOrderUser, createOrder, getOrderNew, patchOrderWorking, getOrderProgress, uploadFile, getOrderApprove, patchOrderDone, orderRevising, orderApprove
}

export default OrderService;