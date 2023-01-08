import Api from '../Api';

const getOrderUser = () => {
    return Api.get('/user/order');
};

const createOrder = (packageId, note, paymentMethod, bankName) => {
    return Api.post('/user/order', {packageId, note, paymentMethod, bankName});
}

const OrderService = {
    getOrderUser, createOrder
}

export default OrderService;