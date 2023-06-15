import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import HeaderAuth from "../components/HeaderAuth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { notify } from "../utils";
import { Link, useNavigate, useParams } from "react-router-dom";
export default function UpdateLocation() {
  const [title, setTitle] = useState("");
  const [description, setDescirption] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState("");
  const [address, setAddress] = useState();
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [map, setMap] = useState("");
  const [space, setSpace] = useState();
  const [bedrooms, setBedrooms] = useState();
  const [location, setLocation] = useState();

  const { id } = useParams();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      // alert("hi");
      window.location.href = "/";
    }
    axios
      .get(`/findApById/${id}`)
      .then((res) => {
        console.log(res.data);
        setLocation(res.data);
        setCity(res.data.city);
        setState(res.data.state);
        setAddress(res.data.address);
        setCountry(res.data.country);

        setDescirption(res.data.description);
        setPrice(res.data.price);
        setBedrooms(res.data.bedrooms);
        setZip(res.data.zipcode);
        setTitle(res.data.title);
        setSpace(res.data.space);
        setImages(res.data.images);
      })
      .catch((err) => console.log(err));
  }, []);
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const handleClickImage1 = (e) => {
    setImage1(e.target.files[0]);
  };
  const handleClickImage2 = (e) => {
    setImage2(e.target.files[0]);
  };
  const handleClickImage3 = (e) => {
    setImage3(e.target.files[0]);
  };
  const updateLocation = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file1", image1);
    if (image2) formData.append("file2", image2);
    if (image3) formData.append("file3", image3);
    axios.post(`/uploadI`, formData).then((res) => {
      let arr = [];
      if (image3) {
        arr = [res.data.file1, res.data.file2, res.data.file3];
      } else if (image2) {
        arr = [res.data.file1, res.data.file2];
      } else if (image1) arr = [res.data.file1];
      else arr = images;
      const updatedLocation = {
        ...location,
        city,
        state,
        address,
        country,
        description,
        price,
        bedrooms,
        zipcode: zip,
        availableFrom: "2023-06-01",
        availableTo: "2023-08-31",
        title,
        space,
        images: arr,
      };
      axios
        .put(`/updateApart/${id}`, updatedLocation)
        .then((res) => {
          notify("Location was updated successfully!", toast, "success");
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };
  return (
    <div className='body-wrapper'>
      <ToastContainer />
      <HeaderAuth />
      <div>
        <div
          className='ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image '
          data-bs-bg='img/bg/14.jpg'
        >
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='ltn__breadcrumb-inner'>
                  <h1 className='page-title'>Add Listing</h1>
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
                      <li>Add Listing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BREADCRUMB AREA END */}
        {/* APPOINTMENT AREA START */}
        <div className='ltn__appointment-area pt-115--- pb-120'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <form action='#'>
                  <div className='tab-content'>
                    <div
                      className='tab-pane fade active show'
                      id='liton_tab_3_1'
                    >
                      <div className='ltn__apartments-tab-content-inner'>
                        <h6>Property Description</h6>
                        <div className='row'>
                          <div className='col-md-12'>
                            <div className='input-item input-item-textarea ltn__custom-icon'>
                              <input
                                type='text'
                                name='ltn__name'
                                placeholder='*Title (mandatory)'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                              />
                            </div>
                            <div className='input-item input-item-textarea ltn__custom-icon'>
                              <textarea
                                name='ltn__message'
                                placeholder='Description'
                                defaultValue={""}
                                value={description}
                                onChange={(e) => setDescirption(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <h6>Property Price</h6>
                        <div className='row'>
                          <div className='col-md-6'>
                            <div className='input-item  input-item-textarea ltn__custom-icon'>
                              <input
                                type='text'
                                name='ltn__name'
                                placeholder='Price in dinar (only numbers)'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='tab-pane fade active show'>
                      <div className='ltn__product-tab-content-inner'>
                        <h6>Listing Media</h6>
                        <input
                          type='file'
                          id='myFile'
                          name='filename'
                          className='btn theme-btn-3 mb-10'
                          onChange={handleClickImage1}
                        />
                        <br />
                        <input
                          type='file'
                          id='myFile'
                          name='filename'
                          className='btn theme-btn-3 mb-10'
                          onChange={handleClickImage2}
                        />
                        <br />
                        <input
                          type='file'
                          id='myFile'
                          name='filename'
                          className='btn theme-btn-3 mb-10'
                          onChange={handleClickImage3}
                        />
                        <br />
                        <p>
                          <small>
                            * At least 1 image is required for a valid
                            submission.Minimum size is 500/500px.
                          </small>
                          <br />
                          <small>* PDF files upload supported as well.</small>
                          <br />
                          <small>
                            * Images might take longer to be processed.
                          </small>
                        </p>
                        <h6>Video Option</h6>
                        <input
                          type='file'
                          id='myFile'
                          name='filename'
                          className='btn theme-btn-3 mb-10'
                        />
                      </div>
                    </div>
                    <div
                      className='tab-pane fade active show'
                      id='liton_tab_3_3'
                    >
                      <div className='ltn__product-tab-content-inner'>
                        <h6>Listing Location</h6>
                        <div className='row'>
                          <div className='col-md-6'>
                            <div className='input-item input-item-textarea ltn__custom-icon'>
                              <input
                                type='text'
                                name='ltn__name'
                                placeholder='*Address'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className='col-md-6'>
                            <div className='input-item input-item-textarea ltn__custom-icon'>
                              <input
                                type='text'
                                name='ltn__name'
                                placeholder='Country'
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className='col-md-6'>
                            <div className='input-item input-item-textarea ltn__custom-icon'>
                              <input
                                type='text'
                                name='ltn__name'
                                placeholder='County / State'
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className='col-md-6'>
                            <div className='input-item input-item-textarea ltn__custom-icon'>
                              <input
                                type='text'
                                name='ltn__name'
                                placeholder='City'
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className='col-md-6'>
                            <div className='input-item input-item-textarea ltn__custom-icon'>
                              <input
                                type='text'
                                name='ltn__name'
                                placeholder='Zip'
                                value={zip}
                                onChange={(e) => setZip(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className='col-lg-12'>
                            <div className='property-details-google-map mb-60'>
                              <iframe
                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd'
                                width='100%'
                                height='100%'
                                frameBorder={0}
                                allowFullScreen
                                aria-hidden='false'
                                tabIndex={0}
                              />
                            </div>
                          </div>
                          <div className='col-md-6'>
                            <div className='input-item input-item-textarea ltn__custom-icon'>
                              <input
                                type='text'
                                name='ltn__name'
                                placeholder='Latitude (for Google Maps)'
                              />
                            </div>
                          </div>
                          <div className='col-md-6'>
                            <div className='input-item input-item-textarea ltn__custom-icon'>
                              <input
                                type='text'
                                name='ltn__name'
                                placeholder='Longitude (for Google Maps)'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className='tab-pane fade active show'
                      id='liton_tab_3_4'
                    >
                      <div className='ltn__product-tab-content-inner'>
                        <h6>Listing Details</h6>
                        <div className='row'>
                          <div className='col-md-6'>
                            <div className='input-item input-item-textarea ltn__custom-icon'>
                              <input
                                type='text'
                                name='ltn__name'
                                placeholder='Size in metre (*only numbers)'
                                value={space}
                                onChange={(e) => setSpace(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className='col-md-6'>
                            <div className='input-item input-item-textarea ltn__custom-icon'>
                              <input
                                type='text'
                                name='ltn__name'
                                placeholder='Bedrooms (*only numbers)'
                                value={bedrooms}
                                onChange={(e) => setBedrooms(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>

                        <div
                          className='alert alert-warning d-none'
                          role='alert'
                        >
                          Please note that the date and time you requested may
                          not be available. We will contact you to confirm your
                          actual appointment details.
                        </div>
                        <div className='btn-wrapper text-center--- mt-30'>
                          <button
                            className='btn theme-btn-1 btn-effect-1 text-uppercase'
                            type='submit'
                            onClick={updateLocation}
                          >
                            Submit Property
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* APPOINTMENT AREA END */}
        {/* APPOINTMENT AREA START */}
        <div className='ltn__appointment-area pb-120 d-none'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='ltn__appointment-inner'>
                  <form action='#'>
                    <h2>1. Description</h2>
                    <p>
                      <small>
                        These fields are mandatory: Title, Property Media
                      </small>
                    </p>
                    <h6>Property Description</h6>
                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='input-item input-item-name ltn__custom-icon'>
                          <input
                            type='text'
                            name='ltn__name'
                            placeholder='*Title (mandatory)'
                          />
                        </div>
                        <div className='input-item input-item-textarea ltn__custom-icon'>
                          <textarea
                            name='ltn__message'
                            placeholder='Description'
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <h6>Property Price</h6>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='input-item input-item-name ltn__custom-icon'>
                          <input
                            type='text'
                            name='ltn__name'
                            placeholder='Price in $ (only numbers)'
                          />
                        </div>
                      </div>
                    </div>

                    <h2>2. Media</h2>
                    <h6>Listing Media</h6>
                    <input
                      type='file'
                      id='myFile'
                      name='filename'
                      className='btn theme-btn-3 mb-10'
                    />
                    <br />
                    <p>
                      <small>
                        * At least 1 image is required for a valid
                        submission.Minimum size is 500/500px.
                      </small>
                      <br />
                      <small>* PDF files upload supported as well.</small>
                      <br />
                      <small>* Images might take longer to be processed.</small>
                    </p>
                    <h6>Video Option</h6>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='input-item'>
                          <select className='nice-select'>
                            <option>Video from</option>
                            <option>vimeo</option>
                            <option>youtube</option>
                          </select>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='input-item input-item-name ltn__custom-icon'>
                          <input
                            type='text'
                            name='ltn__name'
                            placeholder='Embed Video ID'
                          />
                        </div>
                      </div>
                    </div>
                    <h6>Virtual Tour</h6>
                    <div className='input-item input-item-textarea ltn__custom-icon'>
                      <textarea
                        name='ltn__message'
                        placeholder='Virtual Tour:'
                        defaultValue={""}
                      />
                    </div>
                    <h2>3. Location</h2>
                    <h6>Listing Location</h6>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='input-item input-item-name ltn__custom-icon'>
                          <input
                            type='text'
                            name='ltn__name'
                            placeholder='*Address'
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='input-item input-item-name ltn__custom-icon'>
                          <input
                            type='text'
                            name='ltn__name'
                            placeholder='Country'
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='input-item input-item-name ltn__custom-icon'>
                          <input
                            type='text'
                            name='ltn__name'
                            placeholder='County / State'
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='input-item input-item-name ltn__custom-icon'>
                          <input
                            type='text'
                            name='ltn__name'
                            placeholder='City'
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='input-item input-item-name ltn__custom-icon'>
                          <input
                            type='text'
                            name='ltn__name'
                            placeholder='Neighborhood'
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='input-item input-item-name ltn__custom-icon'>
                          <input
                            type='text'
                            name='ltn__name'
                            placeholder='Zip'
                          />
                        </div>
                      </div>
                      <div className='col-lg-12'>
                        <div className='property-details-google-map mb-60'>
                          <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd'
                            width='100%'
                            height='100%'
                            frameBorder={0}
                            allowFullScreen
                            aria-hidden='false'
                            tabIndex={0}
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='input-item input-item-name ltn__custom-icon'>
                          <input
                            type='text'
                            name='ltn__name'
                            placeholder='Latitude (for Google Maps)'
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='input-item input-item-name ltn__custom-icon'>
                          <input
                            type='text'
                            name='ltn__name'
                            placeholder='Longitude (for Google Maps)'
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <label className='checkbox-item'>
                          Enable Google Street View
                          <input type='checkbox' />
                          <span className='checkmark' />
                        </label>
                      </div>
                      <div className='col-md-6'>
                        <div className='input-item input-item-name ltn__custom-icon'>
                          <input
                            type='text'
                            name='ltn__name'
                            placeholder='Google Street View - Camera Angle (value from 0 to 360)'
                          />
                        </div>
                      </div>
                    </div>
                    <h2>4. Details</h2>
                    <h6>Listing Details</h6>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='input-item input-item-name ltn__custom-icon'>
                          <input
                            type='text'
                            name='ltn__name'
                            placeholder='Size in ft2 (*only numbers)'
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='input-item input-item-name ltn__custom-icon'>
                          <input
                            type='text'
                            name='ltn__name'
                            placeholder='Lot Size in ft2 (*only numbers)'
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='input-item input-item-name ltn__custom-icon'>
                          <input
                            type='text'
                            name='ltn__name'
                            placeholder='Rooms (*only numbers)'
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='input-item input-item-name ltn__custom-icon'>
                          <input
                            type='text'
                            name='ltn__name'
                            placeholder='Bedrooms (*only numbers)'
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='input-item input-item-name ltn__custom-icon'>
                          <input
                            type='text'
                            name='ltn__name'
                            placeholder='Bathrooms (*only numbers)'
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='input-item input-item-name ltn__custom-icon'>
                          <input
                            type='text'
                            name='ltn__name'
                            placeholder='Custom ID (*text)'
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='input-item input-item-name ltn__custom-icon'>
                          <input
                            type='text'
                            name='ltn__name'
                            placeholder='Garages (*text)'
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='input-item input-item-name ltn__custom-icon'>
                          <input
                            type='text'
                            name='ltn__name'
                            placeholder='Year Built (*numeric)'
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='input-item input-item-name ltn__custom-icon'>
                          <input
                            type='text'
                            name='ltn__name'
                            placeholder='Garage Size (*text)'
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='input-item input-item-name ltn__custom-icon'>
                          <input
                            type='text'
                            name='ltn__name'
                            placeholder='Available from (*date)'
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='input-item input-item-name ltn__custom-icon'>
                          <input
                            type='text'
                            name='ltn__name'
                            placeholder='Basement (*text)'
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='input-item input-item-name ltn__custom-icon'>
                          <input
                            type='text'
                            name='ltn__name'
                            placeholder='Extra Details (*text)'
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='input-item input-item-name ltn__custom-icon'>
                          <input
                            type='text'
                            name='ltn__name'
                            placeholder='Roofing (*text)'
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='input-item input-item-name ltn__custom-icon'>
                          <input
                            type='text'
                            name='ltn__name'
                            placeholder='Exterior Material (*text)'
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='input-item'>
                          <select className='nice-select'>
                            <option>Structure Type</option>
                            <option>Not Available</option>
                            <option>Brick</option>
                            <option>Wood</option>
                            <option>Cement</option>
                          </select>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='input-item'>
                          <select className='nice-select'>
                            <option>Floors No</option>
                            <option>Not Available</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </div>
                      <div className='col-lg-12'>
                        <div className='input-item input-item-textarea ltn__custom-icon'>
                          <textarea
                            name='ltn__message'
                            placeholder='Owner/Agent notes (*not visible on front end)'
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <h6>Select Energy Class</h6>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='input-item'>
                          <select className='nice-select'>
                            <option>Select Energy Class (EU regulation)</option>
                            <option>A+</option>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
                            <option>E</option>
                          </select>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='input-item input-item-name ltn__custom-icon'>
                          <input
                            type='text'
                            name='ltn__name'
                            placeholder='Energy Index in kWh/m2a'
                          />
                        </div>
                      </div>
                    </div>
                    <h6>Amenities and Features</h6>
                    <h6>Interior Details</h6>
                    <div className='row'>
                      <div className='col-lg-4 col-md-6'>
                        <label className='checkbox-item'>
                          Equipped Kitchen
                          <input type='checkbox' />
                          <span className='checkmark' />
                        </label>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <label className='checkbox-item'>
                          Gym
                          <input type='checkbox' />
                          <span className='checkmark' />
                        </label>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <label className='checkbox-item'>
                          Laundry
                          <input type='checkbox' />
                          <span className='checkmark' />
                        </label>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <label className='checkbox-item'>
                          Media Room
                          <input type='checkbox' />
                          <span className='checkmark' />
                        </label>
                      </div>
                    </div>
                    <h6 className='mt-20'>Outdoor Details</h6>
                    <div className='row'>
                      <div className='col-lg-4 col-md-6'>
                        <label className='checkbox-item'>
                          Back yard
                          <input type='checkbox' />
                          <span className='checkmark' />
                        </label>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <label className='checkbox-item'>
                          Basketball court
                          <input type='checkbox' />
                          <span className='checkmark' />
                        </label>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <label className='checkbox-item'>
                          Front yard
                          <input type='checkbox' />
                          <span className='checkmark' />
                        </label>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <label className='checkbox-item'>
                          Garage Attached
                          <input type='checkbox' />
                          <span className='checkmark' />
                        </label>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <label className='checkbox-item'>
                          Hot Bath
                          <input type='checkbox' />
                          <span className='checkmark' />
                        </label>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <label className='checkbox-item'>
                          Pool
                          <input type='checkbox' />
                          <span className='checkmark' />
                        </label>
                      </div>
                    </div>
                    <h6 className='mt-20'>Utilities</h6>
                    <div className='row'>
                      <div className='col-lg-4 col-md-6'>
                        <label className='checkbox-item'>
                          Central Air
                          <input type='checkbox' />
                          <span className='checkmark' />
                        </label>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <label className='checkbox-item'>
                          Electricity
                          <input type='checkbox' />
                          <span className='checkmark' />
                        </label>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <label className='checkbox-item'>
                          Heating
                          <input type='checkbox' />
                          <span className='checkmark' />
                        </label>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <label className='checkbox-item'>
                          Natural Gas
                          <input type='checkbox' />
                          <span className='checkmark' />
                        </label>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <label className='checkbox-item'>
                          Ventilation
                          <input type='checkbox' />
                          <span className='checkmark' />
                        </label>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <label className='checkbox-item'>
                          Water
                          <input type='checkbox' />
                          <span className='checkmark' />
                        </label>
                      </div>
                    </div>
                    <h6 className='mt-20'>Other Features</h6>
                    <div className='row'>
                      <div className='col-lg-4 col-md-6'>
                        <label className='checkbox-item'>
                          Chair Accessible
                          <input type='checkbox' />
                          <span className='checkmark' />
                        </label>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <label className='checkbox-item'>
                          Elevator
                          <input type='checkbox' />
                          <span className='checkmark' />
                        </label>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <label className='checkbox-item'>
                          Fireplace
                          <input type='checkbox' />
                          <span className='checkmark' />
                        </label>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <label className='checkbox-item'>
                          Smoke detectors
                          <input type='checkbox' />
                          <span className='checkmark' />
                        </label>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <label className='checkbox-item'>
                          Washer and dryer
                          <input type='checkbox' />
                          <span className='checkmark' />
                        </label>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <label className='checkbox-item'>
                          WiFi
                          <input type='checkbox' />
                          <span className='checkmark' />
                        </label>
                      </div>
                    </div>
                    <div className='alert alert-warning d-none' role='alert'>
                      Please note that the date and time you requested may not
                      be available. We will contact you to confirm your actual
                      appointment details.
                    </div>
                    <div className='btn-wrapper text-center mt-30'>
                      <button
                        className='btn theme-btn-1 btn-effect-1 text-uppercase'
                        type='submit'
                      >
                        Submit Property
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* APPOINTMENT AREA END */}
        {/* CALL TO ACTION START (call-to-action-6) */}
      </div>
      <Footer />
    </div>
  );
}
