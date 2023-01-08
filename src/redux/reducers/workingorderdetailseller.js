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
    noOfConcept: '',
    noOfPages: '',
    maxDuration: '',
    note: '',
    orderNotes: '',
    createdAt: '',
    updatedAt: '',
    file: '',
    fileType: '',
    status: ''
};

const sllrOnPrgrssOrderDetailReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_ONPROGRESS_ORDER_DETAIL_SELLER:
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
                note: payload.note,
                orderNotes: payload.orderNotes,
                createdAt: payload.createdAt,
                updatedAt: payload.updatedAt,
                file: payload.file,
                fileType: payload.fileType,
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
                noOfConcept: '',
                noOfPages: '',
                maxDuration: '',
                note: '',
                orderNotes: '',
                createdAt: '',
                updatedAt: '',
                file: '',
                fileType: '',
                status: ''
            }
        default:
            return state;
    }
}

export default sllrOnPrgrssOrderDetailReducer;