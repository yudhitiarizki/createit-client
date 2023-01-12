import Api from '../Api';

const getOrderUser = () => {
    return Api.get('/user/order');
};

const createOrder = (packageId, note, paymentMethod, bankName) => {
    return Api.post('/user/order', {packageId, note, paymentMethod, bankName});
}

const getOrderNew = () => {
    return Api.get('/seller/order/new');
}

const patchOrderWorking = (orderId) => {
    return Api.patch('/seller/order/new', {orderId});
};

const patchOrderDone = (orderId) => {
    return Api.patch('/admin/order/done', {orderId});
};

const getOrderProgress = () => {
    return Api.get('/seller/order/onprogress');
}

const uploadFile = (orderId, upldFileType, file) => {
    return Api.post('/file', {orderId, upldFileType, file})
}

const getOrderApprove = () => {
    return Api.get('/admin/order/approve');
}

const orderRevising = (orderId, note) => {
    return Api.post('/user/order/revision', {orderId, note})
}

const orderApprove = (orderId) => {
    return Api.patch('/user/order/approve', {orderId});
}


const OrderService = {
    getOrderUser, createOrder, getOrderNew, patchOrderWorking, getOrderProgress, uploadFile, getOrderApprove, patchOrderDone, orderRevising, orderApprove
}

export default OrderService;