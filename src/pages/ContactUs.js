import React from "react";
import Footer from "../components/Footer";
import HeaderAuth from "../components/HeaderAuth";

export default function ContactUs() {
  return (
    <div className='body-wrapper'>
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
                      <a href='index.html'>
                        <span className='ltn__secondary-color'>
                          <i className='fas fa-home' />
                        </span>{" "}
                        Home
                      </a>
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
                  <img src='img/icons/10.png' alt='Icon Image' />
                </div>
                <h3>Email Address</h3>
                <p>
                  info@webmail.com <br />
                  jobs@webexample.com
                </p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='ltn__contact-address-item ltn__contact-address-item-3 box-shadow'>
                <div className='ltn__contact-address-icon'>
                  <img src='img/icons/11.png' alt='Icon Image' />
                </div>
                <h3>Phone Number</h3>
                <p>
                  +0123-456789 <br /> +987-6543210
                </p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='ltn__contact-address-item ltn__contact-address-item-3 box-shadow'>
                <div className='ltn__contact-address-icon'>
                  <img src='img/icons/12.png' alt='Icon Image' />
                </div>
                <h3>Office Address</h3>
                <p>
                  18/A, New Born Town Hall <br />
                  New York, US
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
                <h4 className='title-2'>Get A Quote</h4>
                <form
                  id='contact-form'
                  action='https://tunatheme.com/tf/html/quarter-preview/quarter/mail.php'
                  method='post'
                >
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='input-item input-item-name ltn__custom-icon'>
                        <input
                          type='text'
                          name='name'
                          placeholder='Enter your name'
                        />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='input-item input-item-email ltn__custom-icon'>
                        <input
                          type='email'
                          name='email'
                          placeholder='Enter email address'
                        />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='input-item'>
                        <select className='nice-select'>
                          <option>Select Service Type</option>
                          <option>Property Management </option>
                          <option>Mortgage Service </option>
                          <option>Consulting Service</option>
                          <option>Home Buying</option>
                          <option>Home Selling</option>
                          <option>Escrow Services</option>
                        </select>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='input-item input-item-phone ltn__custom-icon'>
                        <input
                          type='text'
                          name='phone'
                          placeholder='Enter phone number'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='input-item input-item-textarea ltn__custom-icon'>
                    <textarea
                      name='message'
                      placeholder='Enter message'
                      defaultValue={""}
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
