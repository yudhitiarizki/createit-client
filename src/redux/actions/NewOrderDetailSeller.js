import {
    GET_NEW_ORDER_DETAIL_SELLER,
    HIDE_NEW_ORDER_DETAIL_SELLER
} from './types';

export const getNewOrderDetail = (payload) => {
    return {
        type: GET_NEW_ORDER_DETAIL_SELLER,
        payload
    }
};

export const hideNewOrderDetail = () => {
    return {
        type: HIDE_NEW_ORDER_DETAIL_SELLER
    }
};

