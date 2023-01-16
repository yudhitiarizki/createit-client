import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { register } from '../redux/actions/auth';
import Gif from '../asset/Login/loader.gif'
import '../components/General/Sign.css';
import { Link } from 'react-router-dom';

const Register = () => {
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setrePassword] = useState('');
    const [Loading, setLoading] = useState(false);
    const [type1, setType1] = useState('password');
    const [eyeclass1, setEyeclass1] = useState('bx bxs-hide');
    const [type2, setType2] = useState('password');
    const [eyeclass2, setEyeclass2] = useState('bx bxs-hide');

    const onHandleRegister = () => {
        setLoading(true);
        dispatch(register(firstName, lastName, email, username, password, repassword, phoneNumber)).then(() => {
            setLoading(false);
            setFirstName('');
            setLastName('');
            setEmail('');
            setUsername('');
            setPhoneNumber('');
            setPassword('');
            setrePassword('');
            setEyeclass1('bx bxs-hide');
            setType1('password');
            setEyeclass2('bx bxs-hide');
            setType2('password');
        }).catch(() => {
            setLoading(false);
        })
    };
    
    const changePWDisplay1 = () => {
        if (type1 === 'password') {
            setEyeclass1('bx bxs-show');
            setType1('text');
        } else {
            setEyeclass1('bx bxs-hide');
            setType1('password');
        }
    };

    const changePWDisplay2 = () => {
        if (type2 === 'password') {
            setEyeclass2('bx bxs-show');
            setType2('text');
        } else {
            setEyeclass2('bx bxs-hide');
            setType2('password');
        }
    };

    return (
        <div className='section-container'>
            <div className="figure2"></div>
            <div className="container-login">
                <div className="form-register">
                    <div className="form-title2">Create Your Account!</div>
                    <div className="form-input-name2">
                        <div className="form-input2 width2">
                            <label htmlFor="First">First Name<span>*</span></label>
                            <input type="Text" id='First' value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                        </div>
                        <div className="form-input2 width2">
                            <label htmlFor="Last">Last Name <span>*</span></label>
                            <input type="Text" id='Last' value={lastName} onChange={(event) => setLastName(event.target.value)} />
                        </div>
                    </div>
                    <div className="form-input2">
                        <label htmlFor="username">Username <span>*</span></label>
                        <input type="Text" id='username' value={username} onChange={(event) => setUsername(event.target.value)} />
                    </div>
                    <div className="form-input2">
                        <label htmlFor="email">Email <span>*</span></label>
                        <input type="email" id='email' value={email} onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className="form-input2">
                        <label htmlFor="phonenumber">Phone Number <span>*</span></label>
                        <input type="Text" id='phonenumber' value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
                    </div>
                    <div className="form-input4">
                        <label htmlFor="Password">Password <span>*</span></label>
                        <div className='pwfield2'>
                            <input type={type1} id='Password' value={password} onChange={(event) => setPassword(event.target.value)} />
                            <div><i className={eyeclass1} onClick={changePWDisplay1}></i></div>
                        </div>
                    </div>
                    <div className="form-input4">
                        <label htmlFor="rePassword">Confirm Password <span>*</span></label>
                        <div className='pwfield2'>
                            <input type={type2} id='rePassword' value={repassword} onChange={(event) => setrePassword(event.target.value)} />
                            <div><i className={eyeclass2} onClick={changePWDisplay2}></i></div>
                        </div>
                    </div>
                    <div className="form-footer">
                        <p>Already have an Account? <Link style={{ textDecoration: 'none' }} to={'/login'} className="link">Sign in</Link></p>
                        {!Loading ? (
                            <button onClick={() => { onHandleRegister() }}>Sign Up</button>
                        ) : (
                            <img src={Gif} alt="" className='Loading' />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Register;