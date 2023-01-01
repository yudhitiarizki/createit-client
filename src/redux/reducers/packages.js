import { 
    FETCH_PACKAGES
} from "../actions/types";


const initialState = [];

const packagesReducer = (packages = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        case FETCH_PACKAGES:
            return packages = payload.packages
        default: 
            return packages;
    }
}

export default packagesReducer;