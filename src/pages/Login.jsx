import React, { useState } from 'react';
import '../components/General/Sign.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Gif from '../asset/Login/loader.gif'

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [Loading, setLoading] = useState(false);

    const onHandleLogin = () => {
        setLoading(true)
        dispatch(login(Username, Password)).then(() => {
            navigate('/');
        }).catch(() => {
            setLoading(false)
        });
    }

    return (
        <div className='section-container row'>
            <div className="figure">
            </div>
            <div className="container-login">
                <div className="form-login">
                    <div className="form-title">
                        <h4>Welcome Back!</h4>
                        <p>Please Sign to Continue</p>
                    </div>
                    <div className="form-input">
                        <label htmlFor="username">Username <span>*</span></label>
                        <input type="text" id='username' onChange={(event) => setUsername(event.target.value)}/>
                    </div>
                    <div className="form-input">
                        <label htmlFor="Password">Password <span>*</span></label>
                        <input type="password" id='Password' onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                    <div className="form-footer">
                        <p>Don’t have account ? <Link style={{ textDecoration: 'none' }} className="link" to={'/register'}>Create Now</Link></p>
                        { !Loading ? (
                            <button onClick={() => {onHandleLogin()}}>Login</button>
                        ) : (
                            <img  src={Gif} alt="" className='Loading' />
                        )}
                        
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    )
}

export default Login;