import Api from '../Api';

const getNotification = () => {
    return Api.get('/notif');
}

const NotificationService = {
    getNotification
}

export default NotificationService;