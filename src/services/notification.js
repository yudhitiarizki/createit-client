import Api from '../Api';
import AuthHeader from './Auth-header';

const getNotification = () => {
    return Api.get('/notif', {headers: AuthHeader()});
}

const patchNotification = (notifId) => {
    return Api.patch('/notif', {notifId}, {headers: AuthHeader()})
}

const NotificationService = {
    getNotification,
    patchNotification
}

export default NotificationService;