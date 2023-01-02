import axios from "axios";
var token = ''
const user = JSON.parse(localStorage.getItem('user'));

if (user){
    token = user.accessToken
}

export default axios.create({
    baseURL: 'https://coal-jolly-single.glitch.me',
    headers: {
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImZpcnN0TmFtZSI6ImFkbWluIiwibGFzdE5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkM1oxZk9xMVlubndGbEw3dHptZFNET1BhVHVJOXg5L0F0N094RmNpRHd5eDRaNlhkNERmUE8iLCJwaG9uZU51bWJlciI6IjAiLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6MywiaWF0IjoxNjcyNjYwMDcwLCJleHAiOjE2NzMyNjQ4NzB9.8R3zA7ZVAkRPwQ8Ql92rXZUGdDLqhjlteRLKPc9OiY4`
    }
});

