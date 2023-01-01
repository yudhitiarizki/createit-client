import { 
    FETCH_REVIEW
} from "../actions/types";


const initialState = [];

const reviewReducer = (review = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        case FETCH_REVIEW:
            return review = payload.review;
        default: 
            return review;
    }
}

export default reviewReducer;