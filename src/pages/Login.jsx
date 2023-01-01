import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from "../components/Input";
import TitleInput from "../components/input/TitleInput";
import { login } from "../redux/actions/auth";
import Navbar from "../components/navbar/Navbar";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const onChangeEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const onChangePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleLogin = () => {
    dispatch(login(email, password)).then(() => {
      navigate("/");
      window.location.reload();
    });
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="donate-section">
          <div className="section-overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 mx-auto">
                <div className="custom-form donate-form" action="#" method="get" role="form">
                  <h3 className="mb-4 text-center">Login</h3>

                  <div className="row">
                    {message.message &&
                      (message.status < 400 ? (
                        <div className="form-group mt-0">
                          <div className="alert alert-success" role="alert">
                            {message.message}
                          </div>
                        </div>
                      ) : (
                        <div className="form-group mt-0">
                          <div className="alert alert-danger" role="alert">
                            {message.message}
                          </div>
                        </div>
                      ))}

                    <TitleInput title="Email" />

                    <Input name="email" type="email" onChange={onChangeEmail} />

                    <TitleInput title="Password" />

                    <Input name="Password" type="password" onChange={onChangePassword} />

                    <div className="col-lg-12 col-12 mt-2 justify-content-center text-center">
                      <button type="button" className="form-control mt-4 mb-3" onClick={handleLogin}>
                        Login
                      </button>
                      <p className="mt-2 mb-2">or</p>
                      <Link to="/signup" className="text-center mt-3">
                        Register
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
