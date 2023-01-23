import axios from "axios";

export default axios.create({
    baseURL: window.env.SERVER_URL,
});

