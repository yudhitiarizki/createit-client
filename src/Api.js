import axios from "axios";
import AuthHeader from './services/Auth-header';

export default axios.create({
    baseURL: 'http://localhost:3001',
    headers: AuthHeader()
});

