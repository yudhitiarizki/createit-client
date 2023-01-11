import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    APPLY_SELLER
} from '../actions/types';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
    ? user.role === 2 ?  { 
        isLoggedIn: true,
        isVerified: user.seller.isVerified,
        role: user.role,
        user: user,
     } : {
        isLoggedIn: true,
        isVerified: 0,
        role: user.role,
        user: user,
     }
    : {
        isLoggedIn: false,
        isVerified: 0,
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
                    role: payload.user.role,
                    user: payload.user,
                };
            } else {
                return {
                    ...state,
                    isLoggedIn: true,
                    isVerified: 0,
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
                user: null,
            };
        case APPLY_SELLER:
            return {
                ...state,
                isLoggedIn: true,
                isVerified: payload.seller.isVerified,
                role: payload.role,
                user: payload,
            }
        default:
            return state;
    }
};

export default authReducer;
