import { 
    GET_OTHER_PARTICIPANT,
    CREATE_ROOM
} from './types';

import PartService from '../../services/participant';

import { sendMessage } from './message';

export const getOtherPart = () => async dispatch => {
    return PartService.getOther().then(
        response => {
            dispatch({
                type: GET_OTHER_PARTICIPANT,
                payload: response.data.data
            });

            return Promise.resolve();
        }, error => {
            const message = error.response;

            sendMessage('error', message.data.message);

            return Promise.reject();
        }
    )
}

export const createRoom = (userId, sellerId) => async dispatch => {
    return PartService.createRoom(userId, sellerId).then(
        response => {
            dispatch({
                type: CREATE_ROOM
            });

            console.log(response.data.message);
            
            return Promise.resolve();
        }, error => {
            const message = error.response;

            sendMessage('error', message.data.message);

            return Promise.reject();
        }
    )
}