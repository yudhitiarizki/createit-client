import axios from "axios";
var token = ''
const user = JSON.parse(localStorage.getItem('user'));

if (user){
    token = user.accessToken
}

export default axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        "Authorization": `Bearer ${token}`
    }
});

