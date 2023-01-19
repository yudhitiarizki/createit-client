import {
    GET_ONPROGRESS_ORDER_DETAIL_SELLER,
    HIDE_ONPROGRESS_ORDER_DETAIL_SELLER
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
    noOfConcepts: '',
    noOfPage: '',
    maxDuration: '',
    note: '',
    createdAt: '',
    updatedAt: '',
    OrderFiles: [],
    OrderNotes: [],
    status: ''
};

const sllrOnPrgrssOrderDetailReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_ONPROGRESS_ORDER_DETAIL_SELLER:
            console.log('payload', payload)
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
                noOfConcepts: payload.noOfConcepts,
                noOfPage: payload.noOfPage,
                maxDuration: payload.maxDuration,
                note: payload.note,
                createdAt: payload.createdAt,
                updatedAt: payload.updatedAt,
                OrderFiles: payload.OrderFiles,
                OrderNotes: payload.OrderNotes,
                status: payload.status
            }
        case HIDE_ONPROGRESS_ORDER_DETAIL_SELLER:
            return {
                orderId: '',
                userId: '',
                username: '',
                firstName: '',
                lastName: '',
                title: '',
                type: '',
                delivery: '',
                revision: '',
                noOfConcepts: '',
                noOfPage: '',
                maxDuration: '',
                note: '',
                createdAt: '',
                updatedAt: '',
                OrderFiles: [],
                OrderNotes: [],
                status: ''
            }
        default:
            return state;
    }
}

export default sllrOnPrgrssOrderDetailReducer;