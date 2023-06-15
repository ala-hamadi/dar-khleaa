import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

export default function Header() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  return (
    <>
      <header className='ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent gradient-color-4---'>
        {/* ltn__header-top-area start */}
        <div className='ltn__header-top-area top-area-color-white'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-7'>
                <div className='ltn__top-bar-menu'>
                  <ul>
                    <li>
                      <a href='mailto:Contact@as-referencement.com'>
                        <i className='icon-mail' /> Contact@as-referencement.com
                      </a>
                    </li>
                    <li>
                      <a href='https://maps.app.goo.gl/fjfixFRL85kDSXdd6'>
                        <i className='icon-placeholder' /> AS Référ., Av.
                        Habib Bourguiba
                      </a>
                    </li>
                    <li>
                      <a href=''>
                        <i className='icon-call' /> +216 25 693 159
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-md-5'>
                <div className='top-bar-right text-end'>
                  <div className='ltn__top-bar-menu'>
                    <ul>
                      <li>
                        {/* ltn__social-media */}
                        <div className='ltn__social-media'>
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
                              <a href='https://www.linkedin.com/company/as-r-f-rencement/' title='Linkedin'>
                                <i className='fab fa-linkedin' />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ltn__header-top-area end */}
        {/* ltn__header-middle-area start */}
        <div className='ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black'>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <div className='site-logo-wrap'>
                  <div className='site-logo'>
                    <a href='/'>
                      <img src={logo} alt='Logo' style={{ width: "20%" }} />
                    </a>
                  </div>
                  <div className='get-support clearfix d-none'>
                    <div className='get-support-icon'>
                      <i className='icon-call' />
                    </div>
                    <div className='get-support-info'>
                      <h6>Get Support</h6>
                      <h4>
                        <a href='tel:+123456789'>123-456-789-10</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col header-menu-column menu-color-white'>
                <div className='header-menu d-none d-xl-block'>
                  <nav>
                    <div className='ltn__main-menu'>
                      <ul>
                        <li>
                          <a href='/'>Home</a>
                        </li>
                        <li>
                          <a href='search'>Search</a>
                        </li>

                        <li>
                          {!user?.email ? (
                            <a href="/about">About</a>
                          ) : (
                            <a href='/user-account'>Profile</a>
                          
                          )}
                        </li>

                        <li>
                          <a href='contact-us'>Contact</a>
                        </li>
                        <li className='special-link'>
                          {!user?.email ? (
                            <a href='/signin'>Signin</a>
                          ) : (
                            <a href='/add-location'>Add Location</a>
                          )}
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              <div className='col--- ltn__header-options ltn__header-options-2 '>
                {/* Mobile Menu Button */}
                <div className='mobile-menu-toggle d-xl-none'>
                  <a
                    href='#ltn__utilize-mobile-menu'
                    className='ltn__utilize-toggle'
                  >
                    <svg viewBox='0 0 800 600'>
                      <path
                        d='M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200'
                        id='top'
                      />
                      <path d='M300,320 L540,320' id='middle' />
                      <path
                        d='M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190'
                        id='bottom'
                        transform='translate(480, 320) scale(1, -1) translate(-480, -318) '
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Utilize Cart Menu End */}
      {/* Utilize Mobile Menu Start */}
      <div
        id='ltn__utilize-mobile-menu'
        className='ltn__utilize ltn__utilize-mobile-menu'
      >
        <div className='ltn__utilize-menu-inner ltn__scrollbar'>
          <div className='ltn__utilize-menu-head'>
            <div className='site-logo'>
              <a href='/'>
                <img src={logo} alt='Logo' />
              </a>
            </div>
            <button className='ltn__utilize-close'>×</button>
          </div>
          <div className='ltn__utilize-menu-search-form'>
            <form action='#'>
              <input type='text' placeholder='Search...' />
              <button>
                <i className='fas fa-search' />
              </button>
            </form>
          </div>
          <div className='ltn__utilize-menu'>
            <ul>
              <li className='menu-icon'>
                <a href='/'>Home</a>
              </li>
              <li className='menu-icon'>
                <a href='/search'>Search</a>
              </li>

              <li className='menu-icon'>
                <a href='/user-account'>Profile</a>
              </li>

              <li>
                <a href='contact-us'>Contact</a>
              </li>
              <li className='special-link'>
                {!user?.email ? (
                  <a href='/signin'>Signin</a>
                ) : (
                  <a href='/add-location'>Add Location</a>
                )}{" "}
              </li>
            </ul>
          </div>
          <div className='ltn__utilize-buttons ltn__utilize-buttons-2'>
            <ul>
              <li>
                <a href='account.html' title='My Account'>
                  <span className='utilize-btn-icon'>
                    <i className='far fa-user' />
                  </span>
                  My Account
                </a>
              </li>

              <li>
                <a href='cart.html' title='Shoping Cart'>
                  <span className='utilize-btn-icon'>
                    <i className='fas fa-shopping-cart' />
                    <sup>5</sup>
                  </span>
                  Shoping Cart
                </a>
              </li>
            </ul>
          </div>
          <div className='ltn__social-media-2'>
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
                  title='Twitter'
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
    </>
  );
}
