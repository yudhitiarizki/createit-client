import {
    GET_NEW_SELLER_DETAIL,
    HIDE_NEW_SELLER_DETAIL
} from './types';

export const getNewSellerDetail = (payload) => {
    return {
        type: GET_NEW_SELLER_DETAIL,
        payload
    }
};

export const hideNewSellerDetail = () => {
    return {
        type: HIDE_NEW_SELLER_DETAIL
    }
};