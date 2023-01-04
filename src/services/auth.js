import Api from '../Api';

const register = (firstName, lastName, email, username, password, repassword, phoneNumber) => {
    return Api.post('/register', {
        firstName, lastName, email, username, password, repassword, phoneNumber
    });
};

const login = (username, password) => {
    return Api.post('/login', {
        username: username,
        password: password,
    }).then(response => {
        if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
        } 
        return response.data;
    });
};

const logout = (req, res) => {
    try {
        localStorage.removeItem('user');
        window.location.reload();
        return res.json({
            message: "LOGOUT SUCCESS"
        })
    } catch (error) {
        return res.json({
            message: 'Failed Logout'
        })
    }
};

const AuthService = {
    register,
    login,
    logout,
};

export default AuthService;
