import { 
    CREATE_ORDER,
    SEND_PAYMENT
} from "../actions/types";

const initialState = {};

const paymentReducer = (payment = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        case SEND_PAYMENT:
            return payment = payload.data;
        case CREATE_ORDER:
            return payment = payload;
        default: 
            return payment;
    }
}

export default paymentReducer;