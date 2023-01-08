import { 
    FETCH_MY_SELLER
} from "../actions/types";


const initialState = [];

const sellerReducer = (seller = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        case FETCH_MY_SELLER:
            return seller = payload.seller;
        default: 
            return seller;
    }
}

export default sellerReducer;