import {
    GET_NEW_SELLER_DETAIL,
    HIDE_NEW_SELLER_DETAIL
} from '../actions/types';

const initialState = {
    sellerId: '',
    userId: '',
    username: '',
    firstName: '',
    lastName: '',
    photoProfile: '',
    description: '',
    createdAt: ''
};

const manageNewSeller = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_NEW_SELLER_DETAIL:
            return {
                ...state,
                sellerId: payload.sellerId,
                userId: payload.userId,
                username: payload.username,
                firstName: payload.firstName,
                lastName: payload.lastName,
                photoProfile: payload.photoProfile,
                description: payload.description,
                createdAt: payload.createdAt
            };
        case HIDE_NEW_SELLER_DETAIL:
            return {
                ...state,
                sellerId: '',
                userId: '',
                username: '',
                firstName: '',
                lastName: '',
                photoProfile: '',
                description: '',
                createdAt: ''
            };
        default:
            return state
    }
};

export default manageNewSeller;