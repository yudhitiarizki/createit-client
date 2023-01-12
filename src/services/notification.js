import Api from '../Api';

const getNotification = () => {
    return Api.get('/notif');
}

const patchNotification = (notifId) => {
    return Api.patch('/notif', {notifId})
}

const NotificationService = {
    getNotification,
    patchNotification
}

export default NotificationService;