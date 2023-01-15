import axios from "axios";
import AuthHeader from './services/Auth-header';

export default axios.create({
    baseURL: 'https://knotty-garnet-surgeon.glitch.me',
});

