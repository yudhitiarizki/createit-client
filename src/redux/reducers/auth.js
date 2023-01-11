import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    APPLY_SELLER,
    SWITCH_TO_SELLER,
    SWITCH_TO_BUYER
} from '../actions/types';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
    ? user.role === 2 ?  { 
        isLoggedIn: true,
        isVerified: user.seller.isVerified,
        isSeller: false,
        role: user.role,
        user: user,

     } : {
        isLoggedIn: true,
        isVerified: 0,
        isSeller: false,
        role: user.role,
        user: user,
     }
    : {
        isLoggedIn: false,
        isVerified: 0,
        isSeller: false,
        role: 0,
        user: null,
    };

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_SUCCESS:
        case REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
            };
        case LOGIN_SUCCESS:
            if (payload.user.role  === 2){
                return {
                    ...state,
                    isLoggedIn: true,
                    isVerified: payload.user.seller.isVerified,
                    isSeller: false,
                    role: payload.user.role,
                    user: payload.user,
                };
            } else {
                return {
                    ...state,
                    isLoggedIn: true,
                    isVerified: 0,
                    isSeller: false,
                    role: payload.user.role,
                    user: payload.user,
                };
            }
            
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                isSeller: false,
                user: null,
            };
        case APPLY_SELLER:
            return {
                ...state,
                isLoggedIn: true,
                isVerified: payload.seller.isVerified,
                isSeller: false,
                role: payload.role,
                user: payload,
            };
        case SWITCH_TO_SELLER:
            return {
                ...state,
                isLoggedIn: true,
                isSeller: true,
            }
        case SWITCH_TO_BUYER:
            return {
                ...state,
                isLoggedIn: true,
                isSeller: false,
            }
        default:
            return state;
    }
};

export default authReducer;
