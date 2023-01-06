import { 
} from "../actions/types";


const initialState = {};

const paymentReducer = (payment = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        default: 
            return payment;
    }
}

export default paymentReducer;