import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import sideIcon from "../assets/Ellipse-33.png";
import logo from "../assets/logo.png";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

  const handleLogin = () => {
    // Perform login validation
    if (username === "admin" && password === "admin") {
      navigateTo("/dashboard");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div>
      <section className="p-md-4 p-xl-5 main-section">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-12 col-xxl-11 ">
              <div className="card border-light-subtle shadow-sm content">
                <div className="row g-0">
                  <div className="text-center mb-4">
                    <a href="#!">
                      <img
                        src={logo}
                        alt="BootstrapBrain Logo"
                        className="logo"
                      />
                    </a>
                  </div>
                  <div className="col-12 col-md-4 side-img">
                    <img
                      className="img-fluid rounded-start"
                      loading="lazy"
                      src={sideIcon}
                      alt=""
                    />
                  </div>
                  <div className="col-12 col-md-8 d-flex align-items-center justify-content-center">
                    <div className="col-12 col-lg-11 col-xl-10">
                      <div className="card-body p-3 p-md-4 p-xl-5">
                        <div className="row">
                          <div className="col-12">
                            <div className="mb-5">
                              <h4 className="text-start">Welcome back....</h4>
                            </div>
                          </div>
                        </div>

                        <form action="#!">
                          <div className="row gy-3 overflow-hidden">
                            <div className="col-12">
                              <div className="mb-3">
                                <input
                                  type="text"
                                  className="form-control input-box"
                                  value={username}
                                  onChange={(e) => setUsername(e.target.value)}
                                  placeholder="Username"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="mb-3">
                                <input
                                  type="password"
                                  className="form-control input-box"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                  placeholder="Password"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  name="remember_me"
                                  id="remember_me"
                                />
                                <label
                                  className="form-check-label text-secondary"
                                  htmlFor="remember_me"
                                >
                                  Remember me
                                </label>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="d-grid">
                                <button
                                  className="btn btn-dark btn-lg"
                                  onClick={handleLogin}
                                >
                                  Login
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
