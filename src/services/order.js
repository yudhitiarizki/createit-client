import Api from '../Api';

const getOrderUser = () => {
    return Api.get('/user/order');
};

const OrderService = {
    getOrderUser
}

export default OrderService;