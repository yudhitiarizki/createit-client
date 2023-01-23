import Api from '../Api';
import AuthHeader from './Auth-header';

const getRoomUser = () => {
    return Api.get('/getroomuser', {headers: AuthHeader()});
};

const getRoomSeller = () => {
    return Api.get('/getroomseller', {headers: AuthHeader()});
};

const sendChat = (roomId, message) => {
    return Api.post('/sendmessage', {roomId, message}, {headers: AuthHeader()});
};

const ChatService = {
    getRoomUser,
    getRoomSeller,
    sendChat
};

export default ChatService;