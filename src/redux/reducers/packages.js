import { 
    FETCH_PACKAGES,
    FETCH_PACKAGES_BYSLUG
} from "../actions/types";


const initialState = [];

const packagesReducer = (packages = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        case FETCH_PACKAGES:
            return packages = payload.packages
        case FETCH_PACKAGES_BYSLUG:
            return packages = payload.packages
        default: 
            return packages;
    }
}

export default packagesReducer;