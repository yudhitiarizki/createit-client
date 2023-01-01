import { 
} from "../actions/types";


const initialState = [];

const sellerReducer = (seller = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        default: 
            return seller;
    }
}

export default sellerReducer;