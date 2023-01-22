import { SET_CHAT, GET_ROOM_USER, SEND_CHAT } from "../actions/types";

const initialState = [];

const chatReducer = (chat = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        case SET_CHAT:
            return chat = payload;
        case SEND_CHAT:
            return chat;
        case GET_ROOM_USER:
            return chat = payload;
        default: 
            return chat;
    }
}

export default chatReducer;