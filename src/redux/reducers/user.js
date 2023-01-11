import { 
    FETCH_USER,
    FETCH_SELLER,
    APPROVE_SELLER,
    REJECT_SELLER
} from "../actions/types";


const initialState = [];

const userReducer = (user = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        case FETCH_USER:
            return user = payload.user;
        case FETCH_SELLER:
            return user = payload;
        case APPROVE_SELLER: 
            return user;
        case REJECT_SELLER: 
            return user;
        default: 
            return user;
    }
}

export default userReducer;