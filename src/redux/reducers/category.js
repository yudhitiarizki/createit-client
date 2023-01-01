import { 
    FETCH_CATEGORY,
    FETCH_SERVICEBYCATEGORY
} from "../actions/types";


const initialState = [];

const categoryReducer = (category = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        case FETCH_CATEGORY:
            return category = payload.category;
        default: 
            return category;
    }
}

export default categoryReducer;