import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import image11 from "../assets/img/slider/11.jpg";
import image12 from "../assets/img/slider/12.jpg";
import image13 from "../assets/img/slider/13.jpg";
import product1 from "../assets/img/product/1.png";
import product2 from "../assets/img/product/2.png";
import product3 from "../assets/img/product/3.png";
import product4 from "../assets/img/product/4.png";
import product5 from "../assets/img/product/7.png";
import product31 from "../assets/img/product-3/1.jpg";
import product32 from "../assets/img/product-3/2.jpg";
import product33 from "../assets/img/product-3/3.jpg";
import product34 from "../assets/img/product-3/4.jpg";
import product35 from "../assets/img/product-3/5.jpg";
import product36 from "../assets/img/product-3/6.jpg";
import product37 from "../assets/img/product-3/7.jpg";
import testimonial1 from "../assets/img/personal/1.jpg";
import testimonial2 from "../assets/img/personal/2.jpg";
import testimonial3 from "../assets/img/personal/3.jpg";
import testimonial4 from "../assets/img/personal/4.jpg";

export default function Home() {
  return (
    <div className='body-wrapper'>
      <Header />
      {/* Utilize Cart Menu Start */}
      <div
        id='ltn__utilize-cart-menu'
        className='ltn__utilize ltn__utilize-cart-menu'
      >
        <div className='ltn__utilize-menu-inner ltn__scrollbar'>
          <div className='ltn__utilize-menu-head'>
            <span className='ltn__utilize-menu-title'>Cart</span>
            <button className='ltn__utilize-close'>×</button>
          </div>
          <div className='mini-cart-product-area ltn__scrollbar'>
            <div className='mini-cart-item clearfix'>
              <div className='mini-cart-img'>
                <a href='#'>
                  <img src={product1} alt='Image' />
                </a>
                <span className='mini-cart-item-delete'>
                  <i className='icon-cancel' />
                </span>
              </div>
              <div className='mini-cart-info'>
                <h6>
                  <a href='#'>Wheel Bearing Retainer</a>
                </h6>
                <span className='mini-cart-quantity'>1 x $65.00</span>
              </div>
            </div>
            <div className='mini-cart-item clearfix'>
              <div className='mini-cart-img'>
                <a href='#'>
                  <img src={product2} alt='Image' />
                </a>
                <span className='mini-cart-item-delete'>
                  <i className='icon-cancel' />
                </span>
              </div>
              <div className='mini-cart-info'>
                <h6>
                  <a href='#'>3 Rooms Manhattan</a>
                </h6>
                <span className='mini-cart-quantity'>1 x $85.00</span>
              </div>
            </div>
            <div className='mini-cart-item clearfix'>
              <div className='mini-cart-img'>
                <a href='#'>
                  <img src={product3} alt='Image' />
                </a>
                <span className='mini-cart-item-delete'>
                  <i className='icon-cancel' />
                </span>
              </div>
              <div className='mini-cart-info'>
                <h6>
                  <a href='#'>OE Replica Wheels</a>
                </h6>
                <span className='mini-cart-quantity'>1 x $92.00</span>
              </div>
            </div>
            <div className='mini-cart-item clearfix'>
              <div className='mini-cart-img'>
                <a href='#'>
                  <img src={product4} alt='Image' />
                </a>
                <span className='mini-cart-item-delete'>
                  <i className='icon-cancel' />
                </span>
              </div>
              <div className='mini-cart-info'>
                <h6>
                  <a href='#'>Shock Mount Insulator</a>
                </h6>
                <span className='mini-cart-quantity'>1 x $68.00</span>
              </div>
            </div>
          </div>
          <div className='mini-cart-footer'>
            <div className='mini-cart-sub-total'>
              <h5>
                Subtotal: <span>$310.00</span>
              </h5>
            </div>
            <div className='btn-wrapper'>
              <a href='cart.html' className='theme-btn-1 btn btn-effect-1'>
                View Cart
              </a>
              <a href='cart.html' className='theme-btn-2 btn btn-effect-2'>
                Checkout
              </a>
            </div>
            <p>Free Shipping on All Orders Over $100!</p>
          </div>
        </div>
      </div>
      {/* Utilize Cart Menu End */}
      {/* Utilize Mobile Menu Start */}
      <div
        id='ltn__utilize-mobile-menu'
        className='ltn__utilize ltn__utilize-mobile-menu'
      >
        <div className='ltn__utilize-menu-inner ltn__scrollbar'>
          <div className='ltn__utilize-menu-head'>
            <div className='site-logo'>
              <a href='index.html'>
                <img src='img/logo.png' alt='Logo' />
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
              <li>
                <a href='#'>Home</a>
                <ul className='sub-menu'>
                  <li>
                    <a href='index.html'>Home Style 01</a>
                  </li>
                  <li>
                    <a href='index-2.html'>Home Style 02</a>
                  </li>
                  <li>
                    <a href='index-3.html'>Home Style 03</a>
                  </li>
                  <li>
                    <a href='index-4.html'>Home Style 04</a>
                  </li>
                  <li>
                    <a href='index-5.html'>
                      Home Style 05{" "}
                      <span className='menu-item-badge'>video</span>
                    </a>
                  </li>
                  <li>
                    <a href='index-6.html'>Home Style 06</a>
                  </li>
                  <li>
                    <a href='index-7.html'>Home Style 07</a>
                  </li>
                  <li>
                    <a href='index-8.html'>Home Style 08</a>
                  </li>
                  <li>
                    <a href='index-9.html'>Home Style 09</a>
                  </li>
                  <li>
                    <a href='index-10.html'>
                      Home Style 10 <span className='menu-item-badge'>Map</span>
                    </a>
                  </li>
                  <li>
                    <a href='index-11.html'>Home Style 11</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#'>About</a>
                <ul className='sub-menu'>
                  <li>
                    <a href='about.html'>About</a>
                  </li>
                  <li>
                    <a href='service.html'>Services</a>
                  </li>
                  <li>
                    <a href='service-details.html'>Service Details</a>
                  </li>
                  <li>
                    <a href='portfolio.html'>Portfolio</a>
                  </li>
                  <li>
                    <a href='portfolio-2.html'>Portfolio - 02</a>
                  </li>
                  <li>
                    <a href='portfolio-details.html'>Portfolio Details</a>
                  </li>
                  <li>
                    <a href='team.html'>Team</a>
                  </li>
                  <li>
                    <a href='team-details.html'>Team Details</a>
                  </li>
                  <li>
                    <a href='faq.html'>FAQ</a>
                  </li>
                  <li>
                    <a href='locations.html'>Google Map Locations</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#'>Shop</a>
                <ul className='sub-menu'>
                  <li>
                    <a href='shop.html'>Shop</a>
                  </li>
                  <li>
                    <a href='shop-grid.html'>Shop Grid</a>
                  </li>
                  <li>
                    <a href='shop-left-sidebar.html'>Shop Left sidebar</a>
                  </li>
                  <li>
                    <a href='shop-right-sidebar.html'>Shop right sidebar</a>
                  </li>
                  <li>
                    <a href='product-details.html'>Shop details </a>
                  </li>
                  <li>
                    <a href='cart.html'>Cart</a>
                  </li>
                  <li>
                    <a href='wishlist.html'>Wishlist</a>
                  </li>
                  <li>
                    <a href='checkout.html'>Checkout</a>
                  </li>
                  <li>
                    <a href='order-tracking.html'>Order Tracking</a>
                  </li>
                  <li>
                    <a href='account.html'>My Account</a>
                  </li>
                  <li>
                    <a href='login.html'>Sign in</a>
                  </li>
                  <li>
                    <a href='register.html'>Register</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#'>News</a>
                <ul className='sub-menu'>
                  <li>
                    <a href='blog.html'>News</a>
                  </li>
                  <li>
                    <a href='blog-grid.html'>News Grid</a>
                  </li>
                  <li>
                    <a href='blog-left-sidebar.html'>News Left sidebar</a>
                  </li>
                  <li>
                    <a href='blog-right-sidebar.html'>News Right sidebar</a>
                  </li>
                  <li>
                    <a href='blog-details.html'>News details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#'>Pages</a>
                <ul className='sub-menu'>
                  <li>
                    <a href='about.html'>About</a>
                  </li>
                  <li>
                    <a href='service.html'>Services</a>
                  </li>
                  <li>
                    <a href='service-details.html'>Service Details</a>
                  </li>
                  <li>
                    <a href='portfolio.html'>Portfolio</a>
                  </li>
                  <li>
                    <a href='portfolio-2.html'>Portfolio - 02</a>
                  </li>
                  <li>
                    <a href='portfolio-details.html'>Portfolio Details</a>
                  </li>
                  <li>
                    <a href='team.html'>Team</a>
                  </li>
                  <li>
                    <a href='team-details.html'>Team Details</a>
                  </li>
                  <li>
                    <a href='faq.html'>FAQ</a>
                  </li>
                  <li>
                    <a href='history.html'>History</a>
                  </li>
                  <li>
                    <a href='add-listing.html'>Add Listing</a>
                  </li>
                  <li>
                    <a href='locations.html'>Google Map Locations</a>
                  </li>
                  <li>
                    <a href='404.html'>404</a>
                  </li>
                  <li>
                    <a href='contact.html'>Contact</a>
                  </li>
                  <li>
                    <a href='coming-soon.html'>Coming Soon</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='contact.html'>Contact</a>
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
                <a href='wishlist.html' title='Wishlist'>
                  <span className='utilize-btn-icon'>
                    <i className='far fa-heart' />
                    <sup>3</sup>
                  </span>
                  Wishlist
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
                <a href='#' title='Facebook'>
                  <i className='fab fa-facebook-f' />
                </a>
              </li>
              <li>
                <a href='#' title='Twitter'>
                  <i className='fab fa-twitter' />
                </a>
              </li>
              <li>
                <a href='#' title='Linkedin'>
                  <i className='fab fa-linkedin' />
                </a>
              </li>
              <li>
                <a href='#' title='Instagram'>
                  <i className='fab fa-instagram' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Utilize Mobile Menu End */}
      <div className='ltn__utilize-overlay' />
      {/* SLIDER AREA START (slider-3) */}
      <div className='ltn__slider-area ltn__slider-3  section-bg-2'>
        <div className='ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1'>
          {/* ltn__slide-item */}
          <div
            className='ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60'
            data-bs-bg={image11}
          >
            <div className='ltn__slide-item-inner text-center'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-12 align-self-center'>
                    <div className='slide-item-info'>
                      <div className='slide-item-info-inner ltn__slide-animation'>
                        <div className='slide-video mb-50 d-none'>
                          <a
                            className='ltn__video-icon-2 ltn__video-icon-2-border'
                            href='https://www.youtube.com/embed/tlThdr3O5Qo'
                            data-rel='lightcase:myCollection'
                          >
                            <i className='fa fa-play' />
                          </a>
                        </div>
                        <h6 className='slide-sub-title white-color--- animated'>
                          <span>
                            <i className='fas fa-home' />
                          </span>{" "}
                          Real Estate Agency
                        </h6>
                        <h1 className='slide-title animated '>
                          Find Your Dream <br /> House By Us
                        </h1>
                        <div className='slide-brief animated'>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore.
                          </p>
                        </div>
                        <div className='btn-wrapper animated'>
                          <a
                            href='shop.html'
                            className='theme-btn-1 btn btn-effect-1'
                          >
                            Make An Enquiry
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ltn__slide-item */}
          <div
            className='ltn__slide-item ltn__slide-item-2  ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60'
            data-bs-bg={image12}
          >
            <div className='ltn__slide-item-inner  text-right text-end'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-12 align-self-center'>
                    <div className='slide-item-info'>
                      <div className='slide-item-info-inner ltn__slide-animation'>
                        <h6 className='slide-sub-title white-color--- animated'>
                          <span>
                            <i className='fas fa-home' />
                          </span>{" "}
                          Real Estate Agency
                        </h6>
                        <h1 className='slide-title animated '>
                          Find Your Dream <br /> House By Us
                        </h1>
                        <div className='slide-brief animated'>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore.
                          </p>
                        </div>
                        <div className='btn-wrapper animated'>
                          <a
                            href='shop.html'
                            className='theme-btn-1 btn btn-effect-1'
                          >
                            Make An Enquiry
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ltn__slide-item */}
          <div
            className='ltn__slide-item ltn__slide-item-2  ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60'
            data-bs-bg={image13}
          >
            <div className='ltn__slide-item-inner  text-left'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-12 align-self-center'>
                    <div className='slide-item-info'>
                      <div className='slide-item-info-inner ltn__slide-animation'>
                        <h6 className='slide-sub-title white-color--- animated'>
                          <span>
                            <i className='fas fa-home' />
                          </span>{" "}
                          Real Estate Agency
                        </h6>
                        <h1 className='slide-title animated '>
                          Find Your Dream <br /> House By Us
                        </h1>
                        <div className='slide-brief animated'>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore.
                          </p>
                        </div>
                        <div className='btn-wrapper animated'>
                          <a
                            href='shop.html'
                            className='theme-btn-1 btn btn-effect-1'
                          >
                            Make An Enquiry
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      {/* SLIDER AREA END */}

      {/* FEATURE AREA START ( Feature - 6) */}
      <div className='ltn__feature-area section-bg-1--- pt-115 pb-90 mb-120---'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='section-title-area ltn__section-title-2--- text-center'>
                <h6 className='section-subtitle section-subtitle-2 ltn__secondary-color'>
                  Our Services
                </h6>
                <h1 className='section-title'>Our Main Focus</h1>
              </div>
            </div>
          </div>
          <div className='row ltn__custom-gutter---  justify-content-center'>
            <div className='col-lg-4 col-sm-6 col-12'>
              <div className='ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1'>
                <div className='ltn__feature-icon'>
                  {/* <span><i class="flaticon-house"></i></span> */}
                  <img src='img/icons/icon-img/21.png' alt='#' />
                </div>
                <div className='ltn__feature-info'>
                  <h3>
                    <a href='service-details.html'>Buy a home</a>
                  </h3>
                  <p>
                    over 1 million+ homes for sale available on the website, we
                    can match you with a house you will want to call home.
                  </p>
                  <a className='ltn__service-btn' href='service-details.html'>
                    Find A Home <i className='flaticon-right-arrow' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-sm-6 col-12'>
              <div className='ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active'>
                <div className='ltn__feature-icon'>
                  {/* <span><i class="flaticon-house-3"></i></span> */}
                  <img src='img/icons/icon-img/22.png' alt='#' />
                </div>
                <div className='ltn__feature-info'>
                  <h3>
                    <a href='service-details.html'>Rent a home</a>
                  </h3>
                  <p>
                    over 1 million+ homes for sale available on the website, we
                    can match you with a house you will want to call home.
                  </p>
                  <a className='ltn__service-btn' href='service-details.html'>
                    Find A Home <i className='flaticon-right-arrow' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-sm-6 col-12'>
              <div className='ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1'>
                <div className='ltn__feature-icon'>
                  {/* <span><i class="flaticon-deal-1"></i></span> */}
                  <img src='img/icons/icon-img/23.png' alt='#' />
                </div>
                <div className='ltn__feature-info'>
                  <h3>
                    <a href='service-details.html'>Sell a home</a>
                  </h3>
                  <p>
                    over 1 million+ homes for sale available on the website, we
                    can match you with a house you will want to call home.
                  </p>
                  <a className='ltn__service-btn' href='service-details.html'>
                    Find A Home <i className='flaticon-right-arrow' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FEATURE AREA END */}
      {/* SEARCH BY PLACE AREA START (testimonial-7) */}
      <div
        className='ltn__search-by-place-area section-bg-1 before-bg-top--- bg-image-top--- pt-115 pb-70'
        data-bs-bg='img/bg/20.jpg'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='section-title-area ltn__section-title-2--- text-center'>
                <h6 className='section-subtitle section-subtitle-2 ltn__secondary-color'>
                  Area Properties
                </h6>
                <h1 className='section-title'>Properties By Location</h1>
              </div>
            </div>
          </div>
          <div className='row ltn__search-by-place-slider-1-active slick-arrow-1'>
            <div className='col-lg-4'>
              <div className='ltn__search-by-place-item'>
                <div className='search-by-place-img'>
                  <a href='product-details.html'>
                    <img src={product31} alt='#' />
                  </a>
                  <div className='search-by-place-badge'>
                    <ul>
                      <li>2 Properties</li>
                    </ul>
                  </div>
                </div>
                <div className='search-by-place-info'>
                  <h6>
                    <a href='locations.html'>San Francisco</a>
                  </h6>
                  <h4>
                    <a href='product-details.html'>Mission District Area</a>
                  </h4>
                  <div className='search-by-place-btn'>
                    <a href='product-details.html'>
                      View Property <i className='flaticon-right-arrow' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='ltn__search-by-place-item'>
                <div className='search-by-place-img'>
                  <a href='product-details.html'>
                    <img src={product32} alt='#' />
                  </a>
                  <div className='search-by-place-badge'>
                    <ul>
                      <li>5 Properties</li>
                    </ul>
                  </div>
                </div>
                <div className='search-by-place-info'>
                  <h6>
                    <a href='locations.html'>New York</a>
                  </h6>
                  <h4>
                    <a href='product-details.html'>Pacific Heights Area</a>
                  </h4>
                  <div className='search-by-place-btn'>
                    <a href='product-details.html'>
                      View Property <i className='flaticon-right-arrow' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='ltn__search-by-place-item'>
                <div className='search-by-place-img'>
                  <a href='product-details.html'>
                    <img src={product33} alt='#' />
                  </a>
                  <div className='search-by-place-badge'>
                    <ul>
                      <li>9 Properties</li>
                    </ul>
                  </div>
                </div>
                <div className='search-by-place-info'>
                  <h6>
                    <a href='locations.html'>Sedona, Arizona</a>
                  </h6>
                  <h4>
                    <a href='product-details.html'>Noe Valley Zones</a>
                  </h4>
                  <div className='search-by-place-btn'>
                    <a href='product-details.html'>
                      View Property <i className='flaticon-right-arrow' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='ltn__search-by-place-item'>
                <div className='search-by-place-img'>
                  <a href='product-details.html'>
                    <img src={product32} alt='#' />
                  </a>
                  <div className='search-by-place-badge'>
                    <ul>
                      <li>5 Properties</li>
                    </ul>
                  </div>
                </div>
                <div className='search-by-place-info'>
                  <h6>
                    <a href='locations.html'>New York</a>
                  </h6>
                  <h4>
                    <a href='product-details.html'>Pacific Heights Area</a>
                  </h4>
                  <div className='search-by-place-btn'>
                    <a href='product-details.html'>
                      View Property <i className='flaticon-right-arrow' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      {/* SEARCH BY PLACE AREA END */}
      {/* PRODUCT SLIDER AREA START */}
      <div className='ltn__product-slider-area ltn__product-gutter pt-115 pb-90'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='section-title-area ltn__section-title-2--- text-center'>
                <h6 className='section-subtitle section-subtitle-2 ltn__secondary-color'>
                  Properties
                </h6>
                <h1 className='section-title'>Featured Listings</h1>
              </div>
            </div>
          </div>
          <div className='row ltn__product-slider-item-three-active slick-arrow-1'>
            {/* ltn__product-item */}
            <div className='col-lg-12'>
              <div className='ltn__product-item ltn__product-item-4 text-center---'>
                <div className='product-img'>
                  <a href='product-details.html'>
                    <img src={product31} alt='#' />
                  </a>
                  <div className='product-badge'>
                    <ul>
                      <li className='sale-badge bg-green'>For Rent</li>
                    </ul>
                  </div>
                  <div className='product-img-location-gallery'>
                    <div className='product-img-location'>
                      <ul>
                        <li>
                          <a href='locations.html'>
                            <i className='flaticon-pin' /> Belmont Gardens,
                            Chicago
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className='product-img-gallery'>
                      <ul>
                        <li>
                          <a href='product-details.html'>
                            <i className='fas fa-camera' /> 4
                          </a>
                        </li>
                        <li>
                          <a href='product-details.html'>
                            <i className='fas fa-film' /> 2
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='product-info'>
                  <div className='product-price'>
                    <span>
                      $34,900<label>/Month</label>
                    </span>
                  </div>
                  <h2 className='product-title'>
                    <a href='product-details.html'>New Apartment Nice View</a>
                  </h2>
                  <div className='product-description'>
                    <p>
                      Beautiful Huge 1 Family House In Heart Of <br />
                      Westbury. Newly Renovated With New Wood
                    </p>
                  </div>
                  <ul className='ltn__list-item-2 ltn__list-item-2-before'>
                    <li>
                      <span>
                        3 <i className='flaticon-bed' />
                      </span>
                      Bedrooms
                    </li>
                    <li>
                      <span>
                        2 <i className='flaticon-clean' />
                      </span>
                      Bathrooms
                    </li>
                    <li>
                      <span>
                        3450{" "}
                        <i className='flaticon-square-shape-design-interface-tool-symbol' />
                      </span>
                      square Ft
                    </li>
                  </ul>
                </div>
                <div className='product-info-bottom'>
                  <div className='real-estate-agent'>
                    <div className='agent-img'>
                      <a href='team-details.html'>
                        <img src='img/blog/author.jpg' alt='#' />
                      </a>
                    </div>
                    <div className='agent-brief'>
                      <h6>
                        <a href='team-details.html'>William Seklo</a>
                      </h6>
                      <small>Estate Agents</small>
                    </div>
                  </div>
                  <div className='product-hover-action'>
                    <ul>
                      <li>
                        <a
                          href='#'
                          title='Quick View'
                          data-bs-toggle='modal'
                          data-bs-target='#quick_view_modal'
                        >
                          <i className='flaticon-expand' />
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          title='Wishlist'
                          data-bs-toggle='modal'
                          data-bs-target='#liton_wishlist_modal'
                        >
                          <i className='flaticon-heart-1' />
                        </a>
                      </li>
                      <li>
                        <a href='product-details.html' title='Product Details'>
                          <i className='flaticon-add' />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* ltn__product-item */}
            <div className='col-lg-12'>
              <div className='ltn__product-item ltn__product-item-4 text-center---'>
                <div className='product-img'>
                  <a href='product-details.html'>
                    <img src={product32} alt='#' />
                  </a>
                  <div className='product-badge'>
                    <ul>
                      <li className='sale-badge bg-green---'>For Sale</li>
                    </ul>
                  </div>
                  <div className='product-img-location-gallery'>
                    <div className='product-img-location'>
                      <ul>
                        <li>
                          <a href='locations.html'>
                            <i className='flaticon-pin' /> Belmont Gardens,
                            Chicago
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className='product-img-gallery'>
                      <ul>
                        <li>
                          <a href='product-details.html'>
                            <i className='fas fa-camera' /> 4
                          </a>
                        </li>
                        <li>
                          <a href='product-details.html'>
                            <i className='fas fa-film' /> 2
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='product-info'>
                  <div className='product-price'>
                    <span>
                      $34,900<label>/Month</label>
                    </span>
                  </div>
                  <h2 className='product-title'>
                    <a href='product-details.html'>Modern Apartments</a>
                  </h2>
                  <div className='product-description'>
                    <p>
                      Beautiful Huge 1 Family House In Heart Of <br />
                      Westbury. Newly Renovated With New Wood
                    </p>
                  </div>
                  <ul className='ltn__list-item-2 ltn__list-item-2-before'>
                    <li>
                      <span>
                        3 <i className='flaticon-bed' />
                      </span>
                      Bedrooms
                    </li>
                    <li>
                      <span>
                        2 <i className='flaticon-clean' />
                      </span>
                      Bathrooms
                    </li>
                    <li>
                      <span>
                        3450{" "}
                        <i className='flaticon-square-shape-design-interface-tool-symbol' />
                      </span>
                      square Ft
                    </li>
                  </ul>
                </div>
                <div className='product-info-bottom'>
                  <div className='real-estate-agent'>
                    <div className='agent-img'>
                      <a href='team-details.html'>
                        <img src='img/blog/author.jpg' alt='#' />
                      </a>
                    </div>
                    <div className='agent-brief'>
                      <h6>
                        <a href='team-details.html'>William Seklo</a>
                      </h6>
                      <small>Estate Agents</small>
                    </div>
                  </div>
                  <div className='product-hover-action'>
                    <ul>
                      <li>
                        <a
                          href='#'
                          title='Quick View'
                          data-bs-toggle='modal'
                          data-bs-target='#quick_view_modal'
                        >
                          <i className='flaticon-expand' />
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          title='Wishlist'
                          data-bs-toggle='modal'
                          data-bs-target='#liton_wishlist_modal'
                        >
                          <i className='flaticon-heart-1' />
                        </a>
                      </li>
                      <li>
                        <a href='product-details.html' title='Product Details'>
                          <i className='flaticon-add' />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* ltn__product-item */}
            <div className='col-lg-12'>
              <div className='ltn__product-item ltn__product-item-4 text-center---'>
                <div className='product-img'>
                  <a href='product-details.html'>
                    <img src={product33} alt='#' />
                  </a>
                  <div className='product-badge'>
                    <ul>
                      <li className='sale-badge bg-green'>For Rent</li>
                    </ul>
                  </div>
                  <div className='product-img-location-gallery'>
                    <div className='product-img-location'>
                      <ul>
                        <li>
                          <a href='locations.html'>
                            <i className='flaticon-pin' /> Belmont Gardens,
                            Chicago
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className='product-img-gallery'>
                      <ul>
                        <li>
                          <a href='product-details.html'>
                            <i className='fas fa-camera' /> 4
                          </a>
                        </li>
                        <li>
                          <a href='product-details.html'>
                            <i className='fas fa-film' /> 2
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='product-info'>
                  <div className='product-price'>
                    <span>
                      $34,900<label>/Month</label>
                    </span>
                  </div>
                  <h2 className='product-title'>
                    <a href='product-details.html'>Comfortable Apartment</a>
                  </h2>
                  <div className='product-description'>
                    <p>
                      Beautiful Huge 1 Family House In Heart Of <br />
                      Westbury. Newly Renovated With New Wood
                    </p>
                  </div>
                  <ul className='ltn__list-item-2 ltn__list-item-2-before'>
                    <li>
                      <span>
                        3 <i className='flaticon-bed' />
                      </span>
                      Bedrooms
                    </li>
                    <li>
                      <span>
                        2 <i className='flaticon-clean' />
                      </span>
                      Bathrooms
                    </li>
                    <li>
                      <span>
                        3450{" "}
                        <i className='flaticon-square-shape-design-interface-tool-symbol' />
                      </span>
                      square Ft
                    </li>
                  </ul>
                </div>
                <div className='product-info-bottom'>
                  <div className='real-estate-agent'>
                    <div className='agent-img'>
                      <a href='team-details.html'>
                        <img src='img/blog/author.jpg' alt='#' />
                      </a>
                    </div>
                    <div className='agent-brief'>
                      <h6>
                        <a href='team-details.html'>William Seklo</a>
                      </h6>
                      <small>Estate Agents</small>
                    </div>
                  </div>
                  <div className='product-hover-action'>
                    <ul>
                      <li>
                        <a
                          href='#'
                          title='Quick View'
                          data-bs-toggle='modal'
                          data-bs-target='#quick_view_modal'
                        >
                          <i className='flaticon-expand' />
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          title='Wishlist'
                          data-bs-toggle='modal'
                          data-bs-target='#liton_wishlist_modal'
                        >
                          <i className='flaticon-heart-1' />
                        </a>
                      </li>
                      <li>
                        <a href='product-details.html' title='Product Details'>
                          <i className='flaticon-add' />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* ltn__product-item */}
            <div className='col-lg-12'>
              <div className='ltn__product-item ltn__product-item-4 text-center---'>
                <div className='product-img'>
                  <a href='product-details.html'>
                    <img src={product34} alt='#' />
                  </a>
                  <div className='product-badge'>
                    <ul>
                      <li className='sale-badge bg-green'>For Rent</li>
                    </ul>
                  </div>
                  <div className='product-img-location-gallery'>
                    <div className='product-img-location'>
                      <ul>
                        <li>
                          <a href='locations.html'>
                            <i className='flaticon-pin' /> Belmont Gardens,
                            Chicago
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className='product-img-gallery'>
                      <ul>
                        <li>
                          <a href='product-details.html'>
                            <i className='fas fa-camera' /> 4
                          </a>
                        </li>
                        <li>
                          <a href='product-details.html'>
                            <i className='fas fa-film' /> 2
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='product-info'>
                  <div className='product-price'>
                    <span>
                      $34,900<label>/Month</label>
                    </span>
                  </div>
                  <h2 className='product-title'>
                    <a href='product-details.html'>
                      Luxury villa in Rego Park{" "}
                    </a>
                  </h2>
                  <div className='product-description'>
                    <p>
                      Beautiful Huge 1 Family House In Heart Of <br />
                      Westbury. Newly Renovated With New Wood
                    </p>
                  </div>
                  <ul className='ltn__list-item-2 ltn__list-item-2-before'>
                    <li>
                      <span>
                        3 <i className='flaticon-bed' />
                      </span>
                      Bedrooms
                    </li>
                    <li>
                      <span>
                        2 <i className='flaticon-clean' />
                      </span>
                      Bathrooms
                    </li>
                    <li>
                      <span>
                        3450{" "}
                        <i className='flaticon-square-shape-design-interface-tool-symbol' />
                      </span>
                      square Ft
                    </li>
                  </ul>
                </div>
                <div className='product-info-bottom'>
                  <div className='real-estate-agent'>
                    <div className='agent-img'>
                      <a href='team-details.html'>
                        <img src='img/blog/author.jpg' alt='#' />
                      </a>
                    </div>
                    <div className='agent-brief'>
                      <h6>
                        <a href='team-details.html'>William Seklo</a>
                      </h6>
                      <small>Estate Agents</small>
                    </div>
                  </div>
                  <div className='product-hover-action'>
                    <ul>
                      <li>
                        <a
                          href='#'
                          title='Quick View'
                          data-bs-toggle='modal'
                          data-bs-target='#quick_view_modal'
                        >
                          <i className='flaticon-expand' />
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          title='Wishlist'
                          data-bs-toggle='modal'
                          data-bs-target='#liton_wishlist_modal'
                        >
                          <i className='flaticon-heart-1' />
                        </a>
                      </li>
                      <li>
                        <a href='product-details.html' title='Product Details'>
                          <i className='flaticon-add' />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* ltn__product-item */}
            <div className='col-lg-12'>
              <div className='ltn__product-item ltn__product-item-4 text-center---'>
                <div className='product-img'>
                  <a href='product-details.html'>
                    <img src={product35} alt='#' />
                  </a>
                  <div className='product-badge'>
                    <ul>
                      <li className='sale-badge bg-green'>For Rent</li>
                    </ul>
                  </div>
                  <div className='product-img-location-gallery'>
                    <div className='product-img-location'>
                      <ul>
                        <li>
                          <a href='locations.html'>
                            <i className='flaticon-pin' /> Belmont Gardens,
                            Chicago
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className='product-img-gallery'>
                      <ul>
                        <li>
                          <a href='product-details.html'>
                            <i className='fas fa-camera' /> 4
                          </a>
                        </li>
                        <li>
                          <a href='product-details.html'>
                            <i className='fas fa-film' /> 2
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='product-info'>
                  <div className='product-price'>
                    <span>
                      $34,900<label>/Month</label>
                    </span>
                  </div>
                  <h2 className='product-title'>
                    <a href='product-details.html'>
                      Beautiful Flat in Manhattan{" "}
                    </a>
                  </h2>
                  <div className='product-description'>
                    <p>
                      Beautiful Huge 1 Family House In Heart Of <br />
                      Westbury. Newly Renovated With New Wood
                    </p>
                  </div>
                  <ul className='ltn__list-item-2 ltn__list-item-2-before'>
                    <li>
                      <span>
                        3 <i className='flaticon-bed' />
                      </span>
                      Bedrooms
                    </li>
                    <li>
                      <span>
                        2 <i className='flaticon-clean' />
                      </span>
                      Bathrooms
                    </li>
                    <li>
                      <span>
                        3450{" "}
                        <i className='flaticon-square-shape-design-interface-tool-symbol' />
                      </span>
                      square Ft
                    </li>
                  </ul>
                </div>
                <div className='product-info-bottom'>
                  <div className='real-estate-agent'>
                    <div className='agent-img'>
                      <a href='team-details.html'>
                        <img src='img/blog/author.jpg' alt='#' />
                      </a>
                    </div>
                    <div className='agent-brief'>
                      <h6>
                        <a href='team-details.html'>William Seklo</a>
                      </h6>
                      <small>Estate Agents</small>
                    </div>
                  </div>
                  <div className='product-hover-action'>
                    <ul>
                      <li>
                        <a
                          href='#'
                          title='Quick View'
                          data-bs-toggle='modal'
                          data-bs-target='#quick_view_modal'
                        >
                          <i className='flaticon-expand' />
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          title='Wishlist'
                          data-bs-toggle='modal'
                          data-bs-target='#liton_wishlist_modal'
                        >
                          <i className='flaticon-heart-1' />
                        </a>
                      </li>
                      <li>
                        <a href='product-details.html' title='Product Details'>
                          <i className='flaticon-add' />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      {/* PRODUCT SLIDER AREA END */}

      {/* TESTIMONIAL AREA START */}
      <div className='ltn__testimonial-area ltn__testimonial-4 pt-115 pb-100 plr--9'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='section-title-area ltn__section-title-2--- text-center'>
                <h6 className='section-subtitle section-subtitle-2 ltn__secondary-color'>
                  Our Testimonial
                </h6>
                <h1 className='section-title'>Clients Feedback</h1>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='ltn__testimonial-slider-4 ltn__testimonial-slider-4-active slick-arrow-1'>
                <div className='ltn__testimonial-item-5'>
                  <div className='ltn__quote-icon'>
                    <i className='far fa-comments' />
                  </div>
                  <div className='ltn__testimonial-image'>
                    <img src={testimonial1} alt='quote' />
                  </div>
                  <div className='ltn__testimonial-info'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud ullamco
                      laboris nisi ut aliquip ex ea commodo.
                    </p>
                    <h4>Jacob William</h4>
                    <h6>Manager</h6>
                  </div>
                </div>
                <div className='ltn__testimonial-item-5'>
                  <div className='ltn__quote-icon'>
                    <i className='far fa-comments' />
                  </div>
                  <div className='ltn__testimonial-image'>
                    <img src={testimonial2} alt='quote' />
                  </div>
                  <div className='ltn__testimonial-info'>
                    <p>
                      Quidem Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud
                      ullamco laboris nisi ut aliquip ex ea.{" "}
                    </p>
                    <h4>Ethan James</h4>
                    <h6>Admin</h6>
                  </div>
                </div>
                <div className='ltn__testimonial-item-5'>
                  <div className='ltn__quote-icon'>
                    <i className='far fa-comments' />
                  </div>
                  <div className='ltn__testimonial-image'>
                    <img src={testimonial3} alt='quote' />
                  </div>
                  <div className='ltn__testimonial-info'>
                    <p>
                      Dolor Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud
                      ullamco nisi ut aliquip ex ea commodo.{" "}
                    </p>
                    <h4>Noah Alexander</h4>
                    <h6>Professor</h6>
                  </div>
                </div>
                <div className='ltn__testimonial-item-5'>
                  <div className='ltn__quote-icon'>
                    <i className='far fa-comments' />
                  </div>
                  <div className='ltn__testimonial-image'>
                    <img src={testimonial4} alt='quote' />
                  </div>
                  <div className='ltn__testimonial-info'>
                    <p>
                      Amet Ipsum Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud nisi ut aliquip ex ea commodo.
                    </p>
                    <h4>Liam Mason</h4>
                    <h6>Officer</h6>
                  </div>
                </div>
              </div>
              <ul className='ltn__testimonial-quote-menu d-none d-lg-block'>
                <li>
                  <img src={testimonial1} alt='Quote image' />
                </li>
                <li>
                  <img src={testimonial2} alt='Quote image' />
                </li>
                <li>
                  <img src={testimonial3} alt='Quote image' />
                </li>
                <li>
                  <img src={testimonial4} alt='Quote image' />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* TESTIMONIAL AREA END */}
      {/* BRAND LOGO AREA START */}

      {/* BRAND LOGO AREA END */}
      {/* BLOG AREA START (blog-3) */}
      <div className='ltn__blog-area pt-120 pb-70'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='section-title-area ltn__section-title-2--- text-center'>
                <h6 className='section-subtitle section-subtitle-2 ltn__secondary-color'>
                  News &amp; Blogs
                </h6>
                <h1 className='section-title'>Leatest News Feeds</h1>
              </div>
            </div>
          </div>
          <div className='row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal'>
            {/* Blog Item */}
            <div className='col-lg-12'>
              <div className='ltn__blog-item ltn__blog-item-3'>
                <div className='ltn__blog-img'>
                  <a href='blog-details.html'>
                    <img src={product31} alt='#' />
                  </a>
                </div>
                <div className='ltn__blog-brief'>
                  <div className='ltn__blog-meta'>
                    <ul>
                      <li className='ltn__blog-author'>
                        <a href='#'>
                          <i className='far fa-user' />
                          by: Admin
                        </a>
                      </li>
                      <li className='ltn__blog-tags'>
                        <a href='#'>
                          <i className='fas fa-tags' />
                          Decorate
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className='ltn__blog-title'>
                    <a href='blog-details.html'>
                      10 Brilliant Ways To Decorate Your Home
                    </a>
                  </h3>
                  <div className='ltn__blog-meta-btn'>
                    <div className='ltn__blog-meta'>
                      <ul>
                        <li className='ltn__blog-date'>
                          <i className='far fa-calendar-alt' />
                          June 24, 2021
                        </li>
                      </ul>
                    </div>
                    <div className='ltn__blog-btn'>
                      <a href='blog-details.html'>Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Blog Item */}
            <div className='col-lg-12'>
              <div className='ltn__blog-item ltn__blog-item-3'>
                <div className='ltn__blog-img'>
                  <a href='blog-details.html'>
                    <img src={product32} alt='#' />
                  </a>
                </div>
                <div className='ltn__blog-brief'>
                  <div className='ltn__blog-meta'>
                    <ul>
                      <li className='ltn__blog-author'>
                        <a href='#'>
                          <i className='far fa-user' />
                          by: Admin
                        </a>
                      </li>
                      <li className='ltn__blog-tags'>
                        <a href='#'>
                          <i className='fas fa-tags' />
                          Interior
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className='ltn__blog-title'>
                    <a href='blog-details.html'>
                      The Most Inspiring Interior Design Of 2021
                    </a>
                  </h3>
                  <div className='ltn__blog-meta-btn'>
                    <div className='ltn__blog-meta'>
                      <ul>
                        <li className='ltn__blog-date'>
                          <i className='far fa-calendar-alt' />
                          July 23, 2021
                        </li>
                      </ul>
                    </div>
                    <div className='ltn__blog-btn'>
                      <a href='blog-details.html'>Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Blog Item */}
            <div className='col-lg-12'>
              <div className='ltn__blog-item ltn__blog-item-3'>
                <div className='ltn__blog-img'>
                  <a href='blog-details.html'>
                    <img src={product33} alt='#' />
                  </a>
                </div>
                <div className='ltn__blog-brief'>
                  <div className='ltn__blog-meta'>
                    <ul>
                      <li className='ltn__blog-author'>
                        <a href='#'>
                          <i className='far fa-user' />
                          by: Admin
                        </a>
                      </li>
                      <li className='ltn__blog-tags'>
                        <a href='#'>
                          <i className='fas fa-tags' />
                          Estate
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className='ltn__blog-title'>
                    <a href='blog-details.html'>
                      Recent Commercial Real Estate Transactions
                    </a>
                  </h3>
                  <div className='ltn__blog-meta-btn'>
                    <div className='ltn__blog-meta'>
                      <ul>
                        <li className='ltn__blog-date'>
                          <i className='far fa-calendar-alt' />
                          May 22, 2021
                        </li>
                      </ul>
                    </div>
                    <div className='ltn__blog-btn'>
                      <a href='blog-details.html'>Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Blog Item */}
            <div className='col-lg-12'>
              <div className='ltn__blog-item ltn__blog-item-3'>
                <div className='ltn__blog-img'>
                  <a href='blog-details.html'>
                    <img src={product34} alt='#' />
                  </a>
                </div>
                <div className='ltn__blog-brief'>
                  <div className='ltn__blog-meta'>
                    <ul>
                      <li className='ltn__blog-author'>
                        <a href='#'>
                          <i className='far fa-user' />
                          by: Admin
                        </a>
                      </li>
                      <li className='ltn__blog-tags'>
                        <a href='#'>
                          <i className='fas fa-tags' />
                          Room
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className='ltn__blog-title'>
                    <a href='blog-details.html'>
                      Renovating a Living Room? Experts Share Their Secrets
                    </a>
                  </h3>
                  <div className='ltn__blog-meta-btn'>
                    <div className='ltn__blog-meta'>
                      <ul>
                        <li className='ltn__blog-date'>
                          <i className='far fa-calendar-alt' />
                          June 24, 2021
                        </li>
                      </ul>
                    </div>
                    <div className='ltn__blog-btn'>
                      <a href='blog-details.html'>Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Blog Item */}
            <div className='col-lg-12'>
              <div className='ltn__blog-item ltn__blog-item-3'>
                <div className='ltn__blog-img'>
                  <a href='blog-details.html'>
                    <img src={product35} alt='#' />
                  </a>
                </div>
                <div className='ltn__blog-brief'>
                  <div className='ltn__blog-meta'>
                    <ul>
                      <li className='ltn__blog-author'>
                        <a href='#'>
                          <i className='far fa-user' />
                          by: Admin
                        </a>
                      </li>
                      <li className='ltn__blog-tags'>
                        <a href='#'>
                          <i className='fas fa-tags' />
                          Trends
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className='ltn__blog-title'>
                    <a href='blog-details.html'>
                      7 home trends that will shape your house in 2021
                    </a>
                  </h3>
                  <div className='ltn__blog-meta-btn'>
                    <div className='ltn__blog-meta'>
                      <ul>
                        <li className='ltn__blog-date'>
                          <i className='far fa-calendar-alt' />
                          June 24, 2021
                        </li>
                      </ul>
                    </div>
                    <div className='ltn__blog-btn'>
                      <a href='blog-details.html'>Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      {/* BLOG AREA END */}
      {/* CALL TO ACTION START (call-to-action-6) */}
      <div
        className='ltn__call-to-action-area call-to-action-6 before-bg-bottom'
        data-bs-bg='img/1.jpg--'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='call-to-action-inner call-to-action-inner-6 ltn__secondary-bg position-relative text-center---'>
                <div className='coll-to-info text-color-white'>
                  <h1>Looking for a dream home?</h1>
                  <p>We can help you realize your dream of a new home</p>
                </div>
                <div className='btn-wrapper'>
                  <a className='btn btn-effect-3 btn-white' href='contact.html'>
                    Explore Properties <i className='icon-next' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CALL TO ACTION END */}
      <Footer />

      {/* MODAL AREA START (Wishlist Modal) */}
      <div className='ltn__modal-area ltn__add-to-cart-modal-area'>
        <div className='modal fade' id='liton_wishlist_modal' tabIndex={-1}>
          <div className='modal-dialog modal-md' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <button
                  type='button'
                  className='close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>×</span>
                </button>
              </div>
              <div className='modal-body'>
                <div className='ltn__quick-view-modal-inner'>
                  <div className='modal-product-item'>
                    <div className='row'>
                      <div className='col-12'>
                        <div className='modal-product-img'>
                          <img src={product5} alt='#' />
                        </div>
                        <div className='modal-product-info'>
                          <h5>
                            <a href='product-details.html'>3 Rooms Manhattan</a>
                          </h5>
                          <p className='added-cart'>
                            <i className='fa fa-check-circle' /> Successfully
                            added to your Wishlist
                          </p>
                          <div className='btn-wrapper'>
                            <a
                              href='wishlist.html'
                              className='theme-btn-1 btn btn-effect-1'
                            >
                              View Wishlist
                            </a>
                          </div>
                        </div>
                        {/* additional-info */}
                        <div className='additional-info d-none'>
                          <p>
                            We want to give you <b>10% discount</b> for your
                            first order, <br /> Use discount code at checkout
                          </p>
                          <div className='payment-method'>
                            <img src='img/icons/payment.png' alt='#' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MODAL AREA END */}
    </div>
  );
}
