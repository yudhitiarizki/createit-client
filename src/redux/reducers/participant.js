import { 
    GET_OTHER_PARTICIPANT,
    CREATE_ROOM
} from "../actions/types";

const initialState = [];

const participantReducer = (participant = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        case GET_OTHER_PARTICIPANT:
            return participant = payload;
        case CREATE_ROOM: 
            return participant;
        default: 
            return participant;
    }
}

export default participantReducer;