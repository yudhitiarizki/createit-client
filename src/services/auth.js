import Api from '../Api';
import AuthHeader from './Auth-header';

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
        if (response.data.accessToken) {
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

const ApplySeller = (photoProfile, description, noRekening, bankName, cardHolder) => {
    return Api.post('/regseller', {
        photoProfile, description, noRekening, bankName, cardHolder
    }, {headers: AuthHeader()}).then(response => {
        if (response.data.data.accessToken) {
            localStorage.removeItem('user');
            localStorage.setItem('user', JSON.stringify(response.data.data));
        } 
        return response.data;
    });
};

const VerifEmail = (token) => {
    return Api.post('/verif', {token})
}

const AuthService = {
    register,
    login,
    logout,
    ApplySeller,
    VerifEmail
};

export default AuthService;
