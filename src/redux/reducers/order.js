import { 
    FETCH_ORDER_USER
} from "../actions/types";


const initialState = {
    order: [],
    detail: {}
};

const orderReducer = (order = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        case FETCH_ORDER_USER: 
            return {
                ...order,
                order: payload.order
            }
        default: 
            return order;
    }
}

export default orderReducer;