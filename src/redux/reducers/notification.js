import {
    FETCH_NOTIF,
    READ_NOTIF,
    DELETE_NOTIF
} from "../actions/types";


const initialState = [];

const notificationReducer = (notification = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case FETCH_NOTIF:
            return notification = payload.notification;
        case READ_NOTIF:
            return notification;
        case DELETE_NOTIF:
            return notification;
        default:
            return notification;
    }
}

export default notificationReducer;