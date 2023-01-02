import { 
    FETCH_SERVICEBYCATEGORY,
    FETCH_SERVICE,
    FETCH_DETAILSERVICE,
    FETCH_TOPSERVICE,
    FETCH_SERVICE_BYSLUG
} from "../actions/types";


const initialState = {
    service: [],
    detail: {}
};

const serviceReducer = (service = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        case FETCH_SERVICEBYCATEGORY:
            return service = {
                ...service,
                service: payload.service
            };
        case FETCH_SERVICE:
            return service = {
                ...service,
                service: payload.service
            };
        case FETCH_DETAILSERVICE:
            return service = {
                ...service,
                detail: payload
            };
        case FETCH_TOPSERVICE:
            return service = {
                ...service,
                service: payload.service
            };
        case FETCH_SERVICE_BYSLUG:
            return service = {
                ...service,
                detail: payload.service
            };
        default: 
            return service;
    }
}

export default serviceReducer;