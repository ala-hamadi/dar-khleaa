import React from "react";
import logo from "../assets/img/logo.png";
export default function Footer() {
  return (
    <>
      <footer className='ltn__footer-area  '>
        <div className='footer-top-area  section-bg-2 plr--5'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-xl-3 col-md-6 col-sm-6 col-12'>
                <div className='footer-widget footer-about-widget'>
                  <div className='footer-logo'>
                    <div className='site-logo'>
                      <img
                        src={logo}
                        alt='Logo'
                        style={{ width: "50%", height: "50%" }}
                      />
                    </div>
                  </div>

                  <div className='footer-address'>
                    <ul>
                      <li>
                        <div className='footer-address-icon'>
                          <i className='icon-placeholder' />
                        </div>
                        <div className='footer-address-info'>
                          <p>AS Référencement, Av. Habib Bourguiba, Tunis</p>
                        </div>
                      </li>
                      <li>
                        <div className='footer-address-icon'>
                          <i className='icon-call' />
                        </div>
                        <div className='footer-address-info'>
                          <p>
                            <a href='#'>+216 25 693 159</a>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className='footer-address-icon'>
                          <i className='icon-mail' />
                        </div>
                        <div className='footer-address-info'>
                          <p>
                            <a href='Contact@as-referencement.com'>
                              Contact@as-referencement.com
                            </a>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className='ltn__social-media mt-20'>
                    <ul>
                      <li>
                        <a
                          href='https://www.facebook.com/referencementas'
                          title='Facebook'
                        >
                          <i className='fab fa-facebook-f' />
                        </a>
                      </li>
                      <li>
                        <a
                          href='https://www.instagram.com/as.referencement/'
                          title='Instagram'
                        >
                          <i className='fab fa-instagram' />
                        </a>
                      </li>
                      <li>
                        <a href='https://www.linkedin.com/company/as-r-f-rencement/' 
                        title='Linkedin'>
                          <i className='fab fa-linkedin' />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-md-6 col-sm-6 col-12'>
                <div className='footer-widget footer-menu-widget clearfix'>
                  <h4 className='footer-title'>Company</h4>
                  <div className='footer-menu'>
                    <ul>
                      <li>
                        <a href='about'>About</a>
                      </li>

                      <li>
                        <a href='contact-us'>Contact us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-md-6 col-sm-6 col-12'>
                <div className='footer-widget footer-menu-widget clearfix'>
                  <h4 className='footer-title'>Services</h4>
                  <div className='footer-menu'>
                    <ul>
                      <li>
                        <a href='search'>Search</a>
                      </li>
                      <li>
                        <a href='add-location'>Add location</a>
                      </li>

                      <li>
                        <a href='signin'>Login</a>
                      </li>
                      <li>
                        <a href='user-account'>My account</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-md-6 col-sm-6 col-12'>
                <div className='footer-widget footer-menu-widget clearfix'>
                  <h4 className='footer-title'>Customer Care</h4>
                  <div className='footer-menu'>
                    <ul>
                      <li>
                        <a href='search'>Search</a>
                      </li>
                      <li>
                        <a href='add-location'>Add location</a>
                      </li>

                      <li>
                        <a href='signin'>Login</a>
                      </li>
                      <li>
                        <a href='user-account'>My account</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='ltn__copyright-area ltn__copyright-2 section-bg-7  plr--5'>
          <div className='container-fluid ltn__border-top-2'>
            <div className='row'>
              <div className='col-md-6 col-12'>
                <div className='ltn__copyright-design clearfix'>
                  <p>
                    All Rights Reserved @ AS Référencement{" "}
                    <span className='current-year' />
                  </p>
                </div>
              </div>
              <div className='col-md-6 col-12 align-self-center'>
                <div className='ltn__copyright-menu text-end'>
                  <ul>
                    <li>
                      <a href='#'>Terms &amp; Conditions</a>
                    </li>

                    <li>
                      <a href='#'>Privacy &amp; Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
