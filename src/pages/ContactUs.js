import React, { useState } from "react";
import Footer from "../components/Footer";
import HeaderAuth from "../components/HeaderAuth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import mail from '../assets/img/icon/mail.png';
import phone from '../assets/img/icon/phone.webp';
import location from '../assets/img/icon/location.png';
import { notify } from "../utils";
import axios from "axios";
import { Link } from "react-router-dom";
export default function ContactUs() {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const sendContact = (e) => {
    e.preventDefault();
    const contact = {
      emailUser: email,
      description,
    };
    axios
      .post(`/contactUser`, contact)
      .then((res) => {
        notify("message was sent successfully!", toast, "success");
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
      <div className='ltn__utilize-overlay' />
      {/* BREADCRUMB AREA START */}
      <div
        className='ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image '
        data-bs-bg='img/bg/14.jpg'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='ltn__breadcrumb-inner'>
                <h1 className='page-title'>Contact Us</h1>
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
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BREADCRUMB AREA END */}
      {/* CONTACT ADDRESS AREA START */}
      <div className='ltn__contact-address-area mb-90'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='ltn__contact-address-item ltn__contact-address-item-3 box-shadow'>
                <div className='ltn__contact-address-icon'>
                  <img src={mail} alt='Icon Image' />
                </div>
                <h3>Email Address</h3>
                <p>
                  a.ouanes@gmail.com <br />
                  as.hanagermazi@gmail.com
                </p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='ltn__contact-address-item ltn__contact-address-item-3 box-shadow'>
                <div className='ltn__contact-address-icon'>
                  <img src={phone} alt='Icon Image' />
                </div>
                <h3>Phone Number</h3>
                <p>
                  +216 25 693 159 <br />
                  +216 71 705 215 <br/>
                  +216 98 562 077
                </p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='ltn__contact-address-item ltn__contact-address-item-3 box-shadow'>
                <div className='ltn__contact-address-icon'>
                  <img src={location} alt='Icon Image' />
                </div>
                <h3>Office Address</h3>
                <p>
                  AS Référencement Av. Habib Bourguiba, Tunis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CONTACT ADDRESS AREA END */}
      {/* CONTACT MESSAGE AREA START */}
      <div className='ltn__contact-message-area mb-120 mb--100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='ltn__form-box contact-form-box box-shadow white-bg'>
                <h4 className='title-2'>Send a message</h4>
                <form
                  id='contact-form'
                  action='https://tunatheme.com/tf/html/quarter-preview/quarter/mail.php'
                  method='post'
                >
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='input-item input-item-email ltn__custom-icon'>
                        <input
                          type='email'
                          name='email'
                          placeholder='Enter email address'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='input-item input-item-textarea ltn__custom-icon'>
                    <textarea
                      name='message'
                      placeholder='Enter message'
                      defaultValue={""}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <p>
                    <label className='input-info-save mb-0'>
                      <input type='checkbox' name='agree' /> Save my name,
                      email, and website in this browser for the next time I
                      comment.
                    </label>
                  </p>
                  <div className='btn-wrapper mt-0'>
                    <button
                      className='btn theme-btn-1 btn-effect-1 text-uppercase'
                      type='submit'
                      onClick={sendContact}
                    >
                      get a free service
                    </button>
                  </div>
                  <p className='form-messege mb-0 mt-20' />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
