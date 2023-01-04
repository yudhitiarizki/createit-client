import axios from "axios";
var token = ''
const user = JSON.parse(localStorage.getItem('user'));

if (user){
    token = user.accessToken
}

export default axios.create({
    baseURL: 'https://coal-jolly-single.glitch.me',
    headers: {
        "Authorization": `Bearer ${token}`
    }
});

