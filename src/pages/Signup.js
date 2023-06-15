import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import HeaderAuth from "../components/HeaderAuth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { notify } from "../utils";
import { Link, useNavigate } from "react-router-dom";
export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmePassword, setConfirmePassword] = useState("");

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      // alert("hi");
      window.location.href = "/";
    }
  }, []);
  const createAccount = (e) => {
    e.preventDefault();
    const user = {
      username,
      email,
      mobile,
      password,
    };
    axios
      .post(`/userCreate`, user)
      .then((res) => {
        if (res.data === "user error")
          notify("user  exist!", toast, "error");
        else notify("user was created successfully!", toast, "success");

        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className='body-wrapper'>
      <ToastContainer />
      <HeaderAuth />
      <div
        className='ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image '
        data-bs-bg='img/bg/14.jpg'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='ltn__breadcrumb-inner'>
                <h1 className='page-title'>Account</h1>
                <div className='ltn__breadcrumb-list'>
                  <ul>
                    <li>
                      <Link to={"/"}>
                        <span className='ltn__secondary-color'>
                          <i className='fas fa-home' />
                        </span>{" "}
                        Home
                      </Link>
                    </li>
                    <li>Register</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BREADCRUMB AREA END */}
      {/* LOGIN AREA START (Register) */}
      <div className='ltn__login-area pb-110'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='section-title-area text-center'>
                <h1 className='section-title'>
                  Register <br />
                  Your Account
                </h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Sit aliquid, Non distinctio vel iste.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6 offset-lg-3'>
              <div className='account-login-inner'>
                <form action='#' className='ltn__form-box contact-form-box'>
                  <input
                    type='text'
                    name='firstname'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input
                    type='text'
                    name='lastname'
                    placeholder='Phone number'
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                  <input
                    type='text'
                    name='email'
                    placeholder='Email*'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type='password'
                    name='password'
                    placeholder='Password*'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type='password'
                    name='confirmpassword'
                    placeholder='Confirm Password*'
                    value={confirmePassword}
                    onChange={(e) => setConfirmePassword(e.target.value)}
                  />
                  <label className='checkbox-inline'>
                    <input type='checkbox' defaultValue />I consent to Herboil
                    processing my personal data in order to send personalized
                    marketing material in accordance with the consent form and
                    the privacy policy.
                  </label>
                  <label className='checkbox-inline'>
                    <input type='checkbox' defaultValue />
                    By clicking "create account", I consent to the privacy
                    policy.
                  </label>
                  <div className='btn-wrapper'>
                    <button
                      className='theme-btn-1 btn reverse-color btn-block'
                      type='submit'
                      onClick={createAccount}
                    >
                      CREATE ACCOUNT
                    </button>
                  </div>
                </form>
                <div className='by-agree text-center'>
                  <p>By creating an account, you agree to our:</p>
                  <p>
                    <a href='#'>
                      TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp; &nbsp; PRIVACY
                      POLICY
                    </a>
                  </p>
                  <div className='go-to-btn mt-50'>
                    <a href='signin'>ALREADY HAVE AN ACCOUNT ?</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
