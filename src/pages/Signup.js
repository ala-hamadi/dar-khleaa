import React from "react";
import Footer from "../components/Footer";
import HeaderAuth from "../components/HeaderAuth";

export default function Signup() {
  return (
    <div className='body-wrapper'>
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
                      <a href='index.html'>
                        <span className='ltn__secondary-color'>
                          <i className='fas fa-home' />
                        </span>{" "}
                        Home
                      </a>
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
                    placeholder='First Name'
                  />
                  <input type='text' name='lastname' placeholder='Last Name' />
                  <input type='text' name='email' placeholder='Email*' />
                  <input
                    type='password'
                    name='password'
                    placeholder='Password*'
                  />
                  <input
                    type='password'
                    name='confirmpassword'
                    placeholder='Confirm Password*'
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
                    <a href='login.html'>ALREADY HAVE AN ACCOUNT ?</a>
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
