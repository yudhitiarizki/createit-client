import { 
    FETCH_PACKAGES,
    FETCH_PACKAGES_BYSLUG,
    CREATE_PACKAGES,
    DELETE_PACKAGES,
    EDIT_PACKAGES
} from "../actions/types";

const initialState = [];

const packagesReducer = (packages = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        case FETCH_PACKAGES:
            return packages = payload.packages;
        case FETCH_PACKAGES_BYSLUG:
            return packages = payload.packages;
        case CREATE_PACKAGES:
            return packages;
        case DELETE_PACKAGES:
            return packages;
        case EDIT_PACKAGES:
            return packages;
        default: 
            return packages;
    }
}

export default packagesReducer;