import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import HeaderAuth from "../components/HeaderAuth";
import video from "../assets/video/vid.mp4";
import DatePicker from "react-datepicker";
import { toast, ToastContainer } from "react-toastify";
import mahdi from "../assets/img/personal/mahdi.jpg";
import ahmed from "../assets/img/personal/ahmed.webp";
import mohsen from "../assets/img/personal/mohsen.jpg";
import "react-datepicker/dist/react-datepicker.css";
import { notify } from "../utils";

export default function LocationDetail() {
  const [location, setLocation] = useState({});
  const [user, setUser] = useState({});
  const [userConnected, setUserConnected] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [reservations, setReservations] = useState([]);
  const [content, setContent] = useState();
  const [comments, setComments] = useState([]);
  const [callIt, setCallIt] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const userCon = JSON.parse(localStorage.getItem("user"));

    axios
      .get(`/findByEmail/${userCon?.email}`)
      .then((res) => {
        setUserConnected(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    axios
      .get(`/findApById/${id}`)
      .then((res) => {
        setLocation(res.data);
        axios
          .get(res.data.user)
          .then((res) => {
            console.log(res.data);
            setUser(res.data);
          })
          .catch((err) => console.log(err));
        axios
          .get(`/ResByApa/${res.data.id}`)
          .then((res) => {
            console.log(res.data);
            setReservations(res.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`/comment/${id}`)
      .then((res1) => {
        setComments(res1.data);
      })

      .catch((err) => console.log(err));
  }, [callIt]);

  function checkReservationAvailability(reservations, startedDate, endDate) {
    const startDated = startedDate
      .toISOString()
      .slice(0, 19)
      .replace("T", " ")
      .substring(0, 10);
    const endDated = endDate
      .toISOString()
      .slice(0, 19)
      .replace("T", " ")
      .substring(0, 10);
    for (let i = 0; i < reservations.length; i++) {
      const reservation = reservations[i];
      const checkinDate = new Date(reservation.checkinDate)
        .toISOString()
        .slice(0, 19)
        .replace("T", " ")
        .substring(0, 10);
      const checkoutDate = new Date(reservation.checkoutDate)
        .toISOString()
        .slice(0, 19)
        .replace("T", " ")
        .substring(0, 10);
      const validate = reservation.validate;
      console.log(checkinDate, checkoutDate, startDated, endDated);
      console.log(checkinDate >= startDated && checkinDate <= endDated);
      if (
        ((checkinDate >= startDated && checkinDate <= endDated) ||
          (checkoutDate >= startDated && checkoutDate <= endDated) ||
          (checkinDate <= startDated && checkoutDate >= endDated)) &&
        validate
      ) {
        return false;
      }
    }

    return true; // No conflicting reservation found
  }
  const reserveLocation = () => {
    if (checkReservationAvailability(reservations, startDate, endDate)) {
      const body = {
        checkinDate: startDate
          .toISOString()
          .slice(0, 19)
          .replace("T", " ")
          .substring(0, 10),
        checkoutDate: endDate
          .toISOString()
          .slice(0, 19)
          .replace("T", " ")
          .substring(0, 10),
        totalPrice: location.price,
      };
      axios
        .post(`/AddReservation/${userConnected.id}/${id}`, body)
        .then((res) => {
          notify("Rservation  with success!", toast, "success");
        })
        .catch((err) => console.log(err));
    } else {
      notify("cant reserve between that date", toast, "error");
    }
  };
  const addRes = () => {
    console.log(userConnected);
    axios
      .post(`/AddComment/${userConnected?.id}/${location?.id}`, {
        content: content,
        userCommentedUsername: userConnected.username,
        userCommentedPhoto: userConnected.image,
      })
      .then((res) => {
        setContent("");
        setCallIt(!callIt);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className='body-wrapper'>
      <ToastContainer />
      <HeaderAuth />
      <div>
        <div
          className='ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image mb-0'
          data-bs-bg='img/bg/14.jpg'
        >
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='ltn__breadcrumb-inner'>
                  <h1 className='page-title'>Product Details</h1>
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
                      <li>Product Details</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BREADCRUMB AREA END */}
        {/* IMAGE SLIDER AREA START (img-slider-3) */}
        <div className='ltn__img-slider-area mb-90'>
          <div className='container-fluid'>
            {location?.images?.length === 3 && (
              <div
                className='row ltn__image-slider-5-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all'
                style={{ textAlign: "center" }}
              >
                <div className='col-lg-4'>
                  <div className='ltn__img-slide-item-4'>
                    <a
                      href='img/img-slide/31.jpg'
                      data-rel='lightcase:myCollection'
                    >
                      <img
                        src={`http://127.0.0.1:8000/uploads/${location?.images[0]}`}
                        alt='#'
                      />
                    </a>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='ltn__img-slide-item-4'>
                    <a
                      href='img/img-slide/32.jpg'
                      data-rel='lightcase:myCollection'
                    >
                      <img
                        src={`http://127.0.0.1:8000/uploads/${location?.images[1]}`}
                        alt='#'
                      />{" "}
                    </a>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='ltn__img-slide-item-4'>
                    <a
                      href='img/img-slide/33.jpg'
                      data-rel='lightcase:myCollection'
                    >
                      <img
                        src={`http://127.0.0.1:8000/uploads/${location?.images[2]}`}
                        alt='#'
                      />{" "}
                    </a>
                  </div>
                </div>
              </div>
            )}
            {location?.images?.length === 2 && (
              <div
                className='row ltn__image-slider-5-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all'
                style={{ textAlign: "center" }}
              >
                <div className='col-lg-6'>
                  <div className='ltn__img-slide-item-4'>
                    <a
                      href='img/img-slide/31.jpg'
                      data-rel='lightcase:myCollection'
                    >
                      <img
                        src={`http://127.0.0.1:8000/uploads/${location?.images[3]}`}
                        alt='#'
                      />
                    </a>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='ltn__img-slide-item-4'>
                    <a
                      href='img/img-slide/32.jpg'
                      data-rel='lightcase:myCollection'
                    >
                      <img
                        src={`http://127.0.0.1:8000/uploads/${location?.images[4]}`}
                        alt='#'
                      />{" "}
                    </a>
                  </div>
                </div>
              </div>
            )}
            {location?.images?.length === 1 && (
              <div
                className='row ltn__image-slider-5-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all'
                style={{ textAlign: "center" }}
              >
                <div className='col-lg-12'>
                  <div className='ltn__img-slide-item-4'>
                    <a
                      href='img/img-slide/31.jpg'
                      data-rel='lightcase:myCollection'
                    >
                      <img
                        src={`http://127.0.0.1:8000/uploads/${location?.images[5]}`}
                        alt='#'
                      />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* IMAGE SLIDER AREA END */}
        {/* SHOP DETAILS AREA START */}
        <div className='ltn__shop-details-area pb-10'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 col-md-12'>
                <div className='ltn__shop-details-inner ltn__page-details-inner mb-60'>
                  <div className='ltn__blog-meta'>
                    <ul>
                      <li className='ltn__blog-category'>
                        <a className='bg-orange' href='#'>
                          For Rent
                        </a>
                      </li>
                      <li className='ltn__blog-date'>
                        <i className='far fa-calendar-alt' />
                        {location?.createdAt}
                      </li>
                      <li>
                        <a href='#'>
                          <i className='far fa-comments' />
                          35 Comments
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h1>{location?.title}</h1>
                  <label>
                    <span className='ltn__secondary-color'>
                      <i className='flaticon-pin' />
                    </span>{" "}
                    {location?.state}, {location?.city}, {location?.address}
                  </label>
                  <h4 className='title-2'>Description</h4>
                  <p>{location?.description}</p>

                  <h4 className='title-2'>Property Detail</h4>
                  <div className='property-detail-info-list section-bg-1 clearfix mb-60'>
                    <ul>
                      <li>
                        <label>Property ID:</label> <span>L{location?.id}</span>
                      </li>
                      <li>
                        <label>Home Area: </label>{" "}
                        <span>{location?.space}m</span>
                      </li>
                      <li>
                        <label>Rooms:</label> <span>{location?.bedrooms}</span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <label>Price:</label>{" "}
                        <span>{location?.price} Dinar</span>
                      </li>
                      <li>
                        <label>Property Status:</label> <span>For Rent</span>
                      </li>
                      <li>
                        <label>Zip</label> <span>{location?.zipcode}</span>
                      </li>
                    </ul>
                  </div>

                  <h4 className='title-2'>Location</h4>
                  <div className='property-details-google-map mb-60'>
                    <iframe
                      src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Av.%20Habib%20Bourguiba,%20Tunis+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                      width='100%'
                      height='100%'
                      frameBorder={0}
                      allowFullScreen
                      aria-hidden='false'
                      tabIndex={0}
                    />
                  </div>

                  {/* APARTMENTS PLAN AREA END */}
                  <h4 className='title-2'>Property Video</h4>

                  <div
                    className='ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50 bg-image mb-60'
                    data-bs-bg='img/others/5.jpg'
                  >
                    {location?.video && (
                      <video width='100%' height='100%' controls>
                        <source
                          src={`http://127.0.0.1:8000/uploads/${location?.video}`}
                          type='video/mp4'
                        />
                        Your browser does not support the video tag.
                      </video>
                    )}

                    {/* <a
                      className='ltn__video-icon-2 ltn__video-icon-2-border---'
                      href='https://www.youtube.com/embed/eWUxqVFBq74?autoplay=1&showinfo=0'
                      data-rel='lightcase:myCollection'
                    >
                      <i className='fa fa-play' />
                    </a> */}
                  </div>
                  <div className='ltn__shop-details-tab-content-inner--- ltn__shop-details-tab-inner-2 ltn__product-details-review-inner mb-60'>
                    <h4 className='title-2'>Customer Reviews</h4>
                    <div className='product-ratting'>
                      <ul>
                        <li className='review-total'>
                          {" "}
                          <a href='#'> {comments.length} Reviews</a>
                        </li>
                      </ul>
                    </div>
                    <hr />
                    {/* comment-area */}
                    <div className='ltn__comment-area mb-30'>
                      <div className='ltn__comment-inner'>
                        {console.log(comments)}
                        <ul>
                          {comments?.map((comm, index) => {
                            return (
                              <li key={index}>
                                <div className='ltn__comment-item clearfix'>
                                  <div className='ltn__commenter-img'>
                                    <img
                                      src={`http://127.0.0.1:8000/uploads/${comm?.commentedPhoto}`}
                                      alt='Image'
                                    />
                                  </div>
                                  <div className='ltn__commenter-comment'>
                                    <h6>
                                      <a href='#'>{comm?.commentedUsername}</a>
                                    </h6>
                                    <div className='product-ratting'></div>
                                    <p>{comm?.content}</p>
                                    <span className='ltn__comment-reply-btn'>
                                      {comm?.createdAt}
                                    </span>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                    {/* comment-reply */}
                    <div className='ltn__comment-reply-area ltn__form-box mb-30'>
                      <form action='#'>
                        <h4>Add a Review</h4>
                        <div className='mb-30'></div>
                        <div className='input-item input-item-textarea ltn__custom-icon'>
                          <textarea
                            placeholder='Type your comments....'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                          />
                        </div>

                        <div className='btn-wrapper'>
                          <button
                            className='btn theme-btn-1 btn-effect-1 text-uppercase'
                            type='button'
                            onClick={addRes}
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4'>
                <aside className='sidebar ltn__shop-sidebar ltn__right-sidebar---'>
                  {/* Author Widget */}
                  <div className='widget ltn__author-widget'>
                    <div className='ltn__author-widget-inner text-center'>
                      <img
                        src={`http://127.0.0.1:8000/uploads/${user?.image}`}
                        alt='#'
                      />
                      <h5>{user?.username}</h5>
                      <div className='product-ratting'>
                        <ul>
                          <li className='review-total'>
                            {" "}
                            <a href='#'>
                              {" "}
                              {user?.apartments?.length} Apartements
                            </a>
                          </li>
                        </ul>
                      </div>
                      <p>{user?.mobile}</p>
                    </div>
                  </div>
                  {/* Search Widget */}

                  {/* Form Widget */}
                  <div className='widget ltn__form-widget'>
                    <h5 className='title-2'>Start Date</h5>

                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                    <h5 className='title-2'>End Date</h5>

                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                    />
                    <br />
                    <div style={{ textAlign: "center" }}>
                      <button
                        type='submit'
                        className='btn theme-btn-1'
                        onClick={reserveLocation}
                      >
                        Reserve
                      </button>
                    </div>
                  </div>

                  {/* Social Media Widget */}

                  <div className='widget ltn__banner-widget d-none'>
                    <a href='shop.html'>
                      <img src='img/banner/2.jpg' alt='#' />
                    </a>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
        {/* SHOP DETAILS AREA END */}
        {/* PRODUCT SLIDER AREA START */}
        <div className='ltn__product-slider-area ltn__product-gutter pb-70 d-none'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='section-title-area ltn__section-title-2--- text-center---'>
                  <h1 className='section-title'>Related Properties</h1>
                </div>
              </div>
            </div>
            <div className='row ltn__related-product-slider-two-active slick-arrow-1'>
              {/* ltn__product-item */}
              <div className='col-xl-6 col-sm-6 col-12'>
                <div className='ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---'>
                  <div className='product-img'>
                    <a href='product-details.html'>
                      <img src='img/product-3/1.jpg' alt='#' />
                    </a>
                    <div className='real-estate-agent'>
                      <div className='agent-img'>
                        <a href='team-details.html'>
                          <img src='img/blog/author.jpg' alt='#' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='product-info'>
                    <div className='product-badge'>
                      <ul>
                        <li className='sale-badg'>For Rent</li>
                      </ul>
                    </div>
                    <h2 className='product-title'>
                      <a href='product-details.html'>New Apartment Nice View</a>
                    </h2>
                    <div className='product-img-location'>
                      <ul>
                        <li>
                          <a href='product-details.html'>
                            <i className='flaticon-pin' /> Belmont Gardens,
                            Chicago
                          </a>
                        </li>
                      </ul>
                    </div>
                    <ul className='ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief'>
                      <li>
                        <span>3 </span>
                        Bed
                      </li>
                      <li>
                        <span>2 </span>
                        Bath
                      </li>
                      <li>
                        <span>3450 </span>
                        Square Ft
                      </li>
                    </ul>
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
                          <a href='portfolio-details.html' title='Compare'>
                            <i className='flaticon-add' />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='product-info-bottom'>
                    <div className='product-price'>
                      <span>
                        $349,00<label>/Month</label>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* ltn__product-item */}
              <div className='col-xl-6 col-sm-6 col-12'>
                <div className='ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---'>
                  <div className='product-img'>
                    <a href='product-details.html'>
                      <img src='img/product-3/2.jpg' alt='#' />
                    </a>
                    <div className='real-estate-agent'>
                      <div className='agent-img'>
                        <a href='team-details.html'>
                          <img src='img/blog/author.jpg' alt='#' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='product-info'>
                    <div className='product-badge'>
                      <ul>
                        <li className='sale-badg'>For Sale</li>
                      </ul>
                    </div>
                    <h2 className='product-title'>
                      <a href='product-details.html'>New Apartment Nice View</a>
                    </h2>
                    <div className='product-img-location'>
                      <ul>
                        <li>
                          <a href='product-details.html'>
                            <i className='flaticon-pin' /> Belmont Gardens,
                            Chicago
                          </a>
                        </li>
                      </ul>
                    </div>
                    <ul className='ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief'>
                      <li>
                        <span>3 </span>
                        Bed
                      </li>
                      <li>
                        <span>2 </span>
                        Bath
                      </li>
                      <li>
                        <span>3450 </span>
                        Square Ft
                      </li>
                    </ul>
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
                          <a href='portfolio-details.html' title='Compare'>
                            <i className='flaticon-add' />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='product-info-bottom'>
                    <div className='product-price'>
                      <span>
                        $349,00<label>/Month</label>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* ltn__product-item */}
              <div className='col-xl-6 col-sm-6 col-12'>
                <div className='ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---'>
                  <div className='product-img'>
                    <a href='product-details.html'>
                      <img src='img/product-3/3.jpg' alt='#' />
                    </a>
                    <div className='real-estate-agent'>
                      <div className='agent-img'>
                        <a href='team-details.html'>
                          <img src='img/blog/author.jpg' alt='#' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='product-info'>
                    <div className='product-badge'>
                      <ul>
                        <li className='sale-badg'>For Rent</li>
                      </ul>
                    </div>
                    <h2 className='product-title'>
                      <a href='product-details.html'>New Apartment Nice View</a>
                    </h2>
                    <div className='product-img-location'>
                      <ul>
                        <li>
                          <a href='product-details.html'>
                            <i className='flaticon-pin' /> Belmont Gardens,
                            Chicago
                          </a>
                        </li>
                      </ul>
                    </div>
                    <ul className='ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief'>
                      <li>
                        <span>3 </span>
                        Bed
                      </li>
                      <li>
                        <span>2 </span>
                        Bath
                      </li>
                      <li>
                        <span>3450 </span>
                        Square Ft
                      </li>
                    </ul>
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
                          <a href='portfolio-details.html' title='Compare'>
                            <i className='flaticon-add' />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='product-info-bottom'>
                    <div className='product-price'>
                      <span>
                        $349,00<label>/Month</label>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* ltn__product-item */}
              <div className='col-xl-6 col-sm-6 col-12'>
                <div className='ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---'>
                  <div className='product-img'>
                    <a href='product-details.html'>
                      <img src='img/product-3/4.jpg' alt='#' />
                    </a>
                    <div className='real-estate-agent'>
                      <div className='agent-img'>
                        <a href='team-details.html'>
                          <img src='img/blog/author.jpg' alt='#' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='product-info'>
                    <div className='product-badge'>
                      <ul>
                        <li className='sale-badg'>For Rent</li>
                      </ul>
                    </div>
                    <h2 className='product-title'>
                      <a href='product-details.html'>New Apartment Nice View</a>
                    </h2>
                    <div className='product-img-location'>
                      <ul>
                        <li>
                          <a href='product-details.html'>
                            <i className='flaticon-pin' /> Belmont Gardens,
                            Chicago
                          </a>
                        </li>
                      </ul>
                    </div>
                    <ul className='ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief'>
                      <li>
                        <span>3 </span>
                        Bed
                      </li>
                      <li>
                        <span>2 </span>
                        Bath
                      </li>
                      <li>
                        <span>3450 </span>
                        Square Ft
                      </li>
                    </ul>
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
                          <a href='portfolio-details.html' title='Compare'>
                            <i className='flaticon-add' />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='product-info-bottom'>
                    <div className='product-price'>
                      <span>
                        $349,00<label>/Month</label>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* ltn__product-item */}
              <div className='col-xl-6 col-sm-6 col-12'>
                <div className='ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---'>
                  <div className='product-img'>
                    <a href='product-details.html'>
                      <img src='img/product-3/5.jpg' alt='#' />
                    </a>
                    <div className='real-estate-agent'>
                      <div className='agent-img'>
                        <a href='team-details.html'>
                          <img src='img/blog/author.jpg' alt='#' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='product-info'>
                    <div className='product-badge'>
                      <ul>
                        <li className='sale-badg'>For Rent</li>
                      </ul>
                    </div>
                    <h2 className='product-title'>
                      <a href='product-details.html'>New Apartment Nice View</a>
                    </h2>
                    <div className='product-img-location'>
                      <ul>
                        <li>
                          <a href='product-details.html'>
                            <i className='flaticon-pin' /> Belmont Gardens,
                            Chicago
                          </a>
                        </li>
                      </ul>
                    </div>
                    <ul className='ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief'>
                      <li>
                        <span>3 </span>
                        Bed
                      </li>
                      <li>
                        <span>2 </span>
                        Bath
                      </li>
                      <li>
                        <span>3450 </span>
                        Square Ft
                      </li>
                    </ul>
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
                          <a href='portfolio-details.html' title='Compare'>
                            <i className='flaticon-add' />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='product-info-bottom'>
                    <div className='product-price'>
                      <span>
                        $349,00<label>/Month</label>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
