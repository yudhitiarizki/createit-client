import {
    GET_NEW_ORDER_DETAIL_SELLER,
    HIDE_NEW_ORDER_DETAIL_SELLER
} from '../actions/types';

const initialState = {
    orderId: '',
    userId: '',
    username: '',
    firstName: '',
    lastName: '',
    title: '',
    type: '',
    delivery: '',
    revision: '',
    noOfConcept: '',
    noOfPages: '',
    maxDuration: '',
    price: '',
    note: '',
    createdAt: '',
    image: ''
};

const sllrNewOrdrDetReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_NEW_ORDER_DETAIL_SELLER:
            return {
                ...state,
                orderId: payload.orderId,
                userId: payload.userId,
                username: payload.username,
                firstName: payload.firstName,
                lastName: payload.lastName,
                title: payload.title,
                type: payload.type,
                delivery: payload.delivery,
                revision: payload.revision,
                noOfConcept: payload.noOfConcept,
                noOfPages: payload.noOfPages,
                maxDuration: payload.maxDuration,
                price: payload.price,
                note: payload.note,
                createdAt: payload.createdAt,
                image: payload.image
            };
        case HIDE_NEW_ORDER_DETAIL_SELLER:
            return {
                ...state,
                orderId: '',
                userId: '',
                username: '',
                firstName: '',
                lastName: '',
                title: '',
                type: '',
                delivery: '',
                revision: '',
                noOfConcept: '',
                noOfPages: '',
                maxDuration: '',
                price: '',
                note: '',
                createdAt: '',
                image: ''
            }
        default:
            return state;
    }
};

export default sllrNewOrdrDetReducer;