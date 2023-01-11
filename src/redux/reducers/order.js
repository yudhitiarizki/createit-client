import { 
    FETCH_ORDER_USER, 
    CREATE_ORDER,
    FETCH_SELLER_ORDER_NEW,
    PATCH_SELLER_ORDER_NEW,
    FETCH_ORDER_PROGRESS,
    ORDER_FILE_UPLOAD,
    FETCH_ORDER_APPROVE,
    SET_DETAIL_ORDER,
    DELETE_DETAIL_ORDER,
    PATCH_ORDER_DONE,
    REVISING_ORDER,
    APPROVE_ORDER
} from "../actions/types";


const initialState = {
    order: [],
    detail: {
        orderId: '',
        order: {}
    }
};

const orderReducer = (order = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        case FETCH_ORDER_USER: 
            return {
                ...order,
                order: payload.order
            }
        case CREATE_ORDER:
            return order;
        case FETCH_SELLER_ORDER_NEW:
            return {
                ...order,
                order: payload
            }
        case PATCH_SELLER_ORDER_NEW:
            return order;
        case FETCH_ORDER_PROGRESS:
            return {
                ...order,
                order: payload
            }
        case FETCH_ORDER_APPROVE:
            return {
                ...order,
                order: payload
            }
        case ORDER_FILE_UPLOAD:
            return order;
        case SET_DETAIL_ORDER:
            return {
                ...order,
                detail: payload
            }
        case DELETE_DETAIL_ORDER:
            return {
                ...order,
                detail: payload
            }
        case PATCH_ORDER_DONE:
            return order;
        case REVISING_ORDER:
            return order;
        case APPROVE_ORDER:
            return order;
        default: 
            return order;
    }
}

export default orderReducer;