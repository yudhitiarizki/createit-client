import { 
    FETCH_NOTIF
} from "../actions/types";


const initialState = [];

const notificationReducer = (notification = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        case FETCH_NOTIF:
            return notification = payload.notification;
        default: 
            return notification;
    }
}

export default notificationReducer;