import { 
    FETCH_CATEGORY,
    FETCH_SERVICEBYCATEGORY,
    CREATE_CATEGORY
} from "../actions/types";


const initialState = [];

const categoryReducer = (category = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        case FETCH_CATEGORY:
            return category = payload.category;
        case CREATE_CATEGORY:
            return category;
        default: 
            return category;
    }
}

export default categoryReducer;