import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import HeaderAuth from "../components/HeaderAuth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { notify } from "../utils";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      // alert("hi");
      window.location.href = "/";
    }
  }, []);
  const loginAccount = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    axios
      .post(`/api/login_check`, user)
      .then((res) => {
        if (res.data.token) {
          const decodeToken = jwtDecode(res.data.token);
          console.log(decodeToken);
          localStorage.setItem("user", JSON.stringify(decodeToken));

          window.location.href = "/";
          console.log(res);
        }
      })
      .catch((err) => {
        notify("user not exist!", toast, "error");

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
                    <li>Login</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BREADCRUMB AREA END */}
      {/* LOGIN AREA START */}
      <div className='ltn__login-area pb-65'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='section-title-area text-center'>
                <h1 className='section-title'>
                  Sign In <br />
                  To Your Account
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
            <div className='col-lg-6'>
              <div className='account-login-inner'>
                <form action='#' className='ltn__form-box contact-form-box'>
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
                  <div className='btn-wrapper mt-0'>
                    <button
                      className='theme-btn-1 btn btn-block'
                      type='submit'
                      onClick={loginAccount}
                    >
                      SIGN IN
                    </button>
                  </div>
                  <div className='go-to-btn mt-20'>
                    <a
                      href='#'
                      title='Forgot Password?'
                      data-bs-toggle='modal'
                      data-bs-target='#ltn_forget_password_modal'
                    >
                      <small>FORGOTTEN YOUR PASSWORD?</small>
                    </a>
                  </div>
                </form>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='account-create text-center pt-50'>
                <h4>DON'T HAVE AN ACCOUNT?</h4>
                <p>
                  Add items to your wishlistget personalised recommendations{" "}
                  <br />
                  check out more quickly track your orders register
                </p>
                <div className='btn-wrapper'>
                  <a href='signup' className='theme-btn-1 btn black-btn'>
                    CREATE ACCOUNT
                  </a>
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
