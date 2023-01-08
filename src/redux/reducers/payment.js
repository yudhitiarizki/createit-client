import { 
    CREATE_ORDER
} from "../actions/types";

const initialState = {};

const paymentReducer = (payment = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        case CREATE_ORDER:
            return payment = payload;
        default: 
            return payment;
    }
}

export default paymentReducer;