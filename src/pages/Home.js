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
import hamemet from "../assets/img/hammamet 4.jpg";

export default function Home() {
  return (
    <div className='body-wrapper'>
      <Header />
      {/* Utilize Cart Menu Start */}

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
                          AS Referencement Agency
                        </h6>
                        <h1 className='slide-title animated '>
                          Find Your <br /> House By Us
                        </h1>
                        <div className='slide-brief animated'>
                          <p>
                            Discover your dream property with Dar Khleaa, the
                            ultimate destination for all your property needs.
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
                          AS Referencement Agency
                        </h6>
                        <h1 className='slide-title animated '>
                          Find Your <br /> House By Us
                        </h1>
                        <div className='slide-brief animated'>
                          <p>
                            Discover your dream property with Dar Khleaa, the
                            ultimate destination for all your property needs.
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
                          AS Referencement Agency
                        </h6>
                        <h1 className='slide-title animated '>
                          Find Your <br /> House By Us
                        </h1>
                        <div className='slide-brief animated'>
                          <p>
                            Discover your dream property with Dar Khleaa, the
                            ultimate destination for all your property needs.
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
                            <i className='flaticon-pin' /> Sousse, Kantaoui
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
                      TND 200<label>/Month</label>
                    </span>
                  </div>
                  <h2 className='product-title'>
                    <a href='product-details.html'>Maison Kantaoui </a>
                  </h2>
                  <div className='product-description'>
                    <p>
                      Le bungalow S+0 est conçu de manière fonctionnelle,
                      offrant un espace ouvert agréable et lumineux..
                    </p>
                  </div>
                  <ul className='ltn__list-item-2 ltn__list-item-2-before'>
                    <li>
                      <span>
                        0 <i className='flaticon-bed' />
                      </span>
                      Bedrooms
                    </li>
                    <li>
                      <span>
                        1 <i className='flaticon-clean' />
                      </span>
                      Bathrooms
                    </li>
                    <li>
                      <span>
                        100{" "}
                        <i className='flaticon-square-shape-design-interface-tool-symbol' />
                      </span>
                      square Ft
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* ltn__product-item */}
            <div className='col-lg-12'>
              <div className='ltn__product-item ltn__product-item-4 text-center---'>
                <div className='product-img'>
                  <a href='product-details.html'>
                    <img src={hamemet} alt='#' />
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
                            <i className='flaticon-pin' /> Hammamet
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
                      TND 250<label>/Month</label>
                    </span>
                  </div>
                  <h2 className='product-title'>
                    <a href='product-details.html'>Maison Hammamet</a>
                  </h2>
                  <div className='product-description'>
                    <p>
                      La maison se compose de deux chambres à coucher, offrant
                      confort et intimité à ses occupants..
                    </p>
                  </div>
                  <ul className='ltn__list-item-2 ltn__list-item-2-before'>
                    <li>
                      <span>
                        2 <i className='flaticon-bed' />
                      </span>
                      Bedrooms
                    </li>
                    <li>
                      <span>
                        1 <i className='flaticon-clean' />
                      </span>
                      Bathrooms
                    </li>
                    <li>
                      <span>
                        150{" "}
                        <i className='flaticon-square-shape-design-interface-tool-symbol' />
                      </span>
                      square Ft
                    </li>
                  </ul>
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
                            <i className='flaticon-pin' /> Marsa
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
                      TND 100<label>/Month</label>
                    </span>
                  </div>
                  <h2 className='product-title'>
                    <a href='product-details.html'>Maison Marsa </a>
                  </h2>
                  <div className='product-description'>
                    <p>
                      Beautiful Huge 1 Family House In Heart Of <br />
                      Westbury. Newly Renovated With New Wood..
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
                        180{" "}
                        <i className='flaticon-square-shape-design-interface-tool-symbol' />
                      </span>
                      square Ft
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
          <div className='special-link' style={{ textAlign: "center" }}>
            <a href='/search'>More locations</a>
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
                      Je suis un client régulier de ce site web de location, car
                      il offre une expérience utilisateur exceptionnelle. La
                      navigation est fluide, les annonces sont claires et
                      détaillées, et le processus de réservation est sans
                      tracas. J'apprécie également les fonctionnalités
                      supplémentaires telles que les évaluations des
                      propriétaires par d'autres locataires, ce qui m'aide à
                      prendre des décisions éclairées. Bravo à toute l'équipe
                      derrière ce site !
                    </p>
                    <h4>Ali</h4>
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
                      Je suis ravi d'avoir utilisé ce site pour trouver mon
                      nouvel appartement. Les filtres de recherche avancée m'ont
                      permis de spécifier mes critères exacts, et j'ai obtenu
                      des résultats pertinents et bien organisés. De plus, le
                      service client a été très réactif et serviable lorsque
                      j'ai eu des questions. Je recommande vivement ce site web
                      à tous ceux qui cherchent une location d'appartement
                      fiable et de qualité.{" "}
                    </p>
                    <h4>Mohsen</h4>
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
                      Le site web de location offre une excellente sélection
                      d'appartements de haute qualité. J'ai été agréablement
                      surpris par la précision des informations et des photos
                      fournies pour chaque propriété. J'ai pu trouver exactement
                      ce que je cherchais, et le processus de contact avec le
                      propriétaire a été rapide et efficace. Je suis très
                      satisfait de mon expérience avec ce site.{" "}
                    </p>
                    <h4>Mouez</h4>
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
                      J'ai été impressionné par la facilité d'utilisation et la
                      convivialité du site web de location. J'ai pu trouver
                      l'appartement idéal en quelques minutes seulement. De
                      plus, le processus de réservation était simple et
                      transparent. Je recommande vivement ce site à tous ceux
                      qui recherchent une location d'appartement sans tracas !.
                    </p>
                    <h4>Iheb</h4>
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
