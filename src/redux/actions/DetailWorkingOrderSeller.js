import {
    GET_ONPROGRESS_ORDER_DETAIL_SELLER,
    HIDE_ONPROGRESS_ORDER_DETAIL_SELLER
} from './types';

export const getOnProgressDetail = (payload) => {
    return {
        type: GET_ONPROGRESS_ORDER_DETAIL_SELLER,
        payload
    }
};

export const hideOnProgressDetail = () => {
    return {
        type: HIDE_ONPROGRESS_ORDER_DETAIL_SELLER
    }
}