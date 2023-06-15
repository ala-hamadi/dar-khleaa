import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import HeaderAuth from "../components/HeaderAuth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../utils";
export default function UserAccount() {
  const [user, setUser] = useState({});
  const [locations, setLocations] = useState([]);
  const [reservations, setReservations] = useState([]);

  const [call, setCall] = useState(false);

  const navigate = useNavigate();
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
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      // alert("hi");
      window.location.href = "/";
    }
    const user = JSON.parse(localStorage.getItem("user"));

    axios
      .get(`/findByEmail/${user?.email}`)
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
        axios
          .get(`/apartmentByUser/${res.data.id}`)
          .then((res) => {
            setLocations(res.data);
            console.log(res.data);
          })
          .catch((err) => console.log(err));
        axios
          .get(`/ResByUser/${res.data.id}`)
          .then((res) => {
            setReservations(res.data);
            console.log(res.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [call]);
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };
  const [image1, setImage1] = useState();

  const handleClickImage1 = (e) => {
    setImage1(e.target.files[0]);
  };
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmeNewPassword, setConfirmeNewPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const updateAccount = (e) => {
    e.preventDefault();
    const updatedUser = {
      username: username === "" ? user?.username : username,
      email: user?.email,
      mobile: mobile === "" ? user?.mobile : mobile,
      //password: password === "" ? user?.mobile : mobile,
    };
    if (image1) {
      const formData = new FormData();

      formData.append("file", image1);
      axios
        .post(`/updateImage/${user?.email}`, formData)
        .then((res) => {
          console.log(res.data);
          setCall(!call);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    axios
      .put(`/updateUser/${user?.email}`, updatedUser)
      .then((res) => {
        setCall(!call);
        console.log(res.data);
        if (res.data.message === "User updated with success")
          notify("User updated with success!", toast, "success");
        else notify("user not updated!", toast, "error");

        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        notify("user not updated!", toast, "error");
      });
  };
  const updatePassword = (e) => {
    e.preventDefault();
    const updatedUser = {
      email: user?.email,
      username: user?.username,
      mobile: user?.mobile,
      password: newPassword,
    };
    console.log(updatedUser);
    if (password !== "" && newPassword === confirmeNewPassword) {
      axios
        .post(`/checkpassword/${user?.email}`, { password: password })
        .then((res) => {
          if (res.data.message === "Password is correct") {
            axios
              .put(`/updateUser/${user?.email}`, updatedUser)
              .then((res) => {
                console.log(res.data);
                if (res.data.message === "User updated with success")
                  notify("password updated with success!", toast, "success");
                else notify("password not updated!", toast, "error");
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
                notify("password not updated!", toast, "error");
              });
          } else {
            notify("password incorrect", toast, "error");
          }
        })
        .catch((err) => {
          console.log(err);
          notify("password incorrect", toast, "error");
        });
    } else {
      console.log(password, newPassword, confirmeNewPassword);
    }
  };
  const deleteLocation = (id) => {
    axios
      .delete(`/deleteApart/${id}`)
      .then((res) => {
        console.log(res.data);
        setCall(!call);
        notify("location deleted with success!", toast, "success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateLocation = (e) => {
    e.preventDefault();
    const location = {
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
    };
    axios
      .post(`/AddApartment/1`, location)
      .then((res) => {
        notify("Location was created successfully!", toast, "success");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteUser = (id) => {
    console.log(id);
    axios
      .delete(`/delete/${id}`)
      .then((res) => {
        notify(`User deleted`, toast, "info");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const accepteRes = (id) => {
    axios
      .delete(`/admin/validation/${id}`)
      .then((res) => {
        notify(`Res Accepted`, toast, "info");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteRes = (id) => {
    axios
      .delete(`/admin/deleteRes/${id}`)
      .then((res) => {
        setCall(!call);
        notify(`Res Deleted`, toast, "info");
      })
      .catch((err) => {
        console.log(err);
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
                  <h1 className='page-title'>My Account</h1>
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
                      <li>My Account</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BREADCRUMB AREA END */}
        {/* WISHLIST AREA START */}
        <div className='liton__wishlist-area pb-70'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                {/* PRODUCT TAB AREA START */}
                <div className='ltn__product-tab-area'>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-lg-4'>
                        <div className='ltn__tab-menu-list mb-50'>
                          <div className='nav'>
                            <a
                              data-bs-toggle='tab'
                              href='#ltn_tab_1_2'
                              className='active show'
                            >
                              Profiles <i className='fas fa-user' />
                            </a>

                            <a data-bs-toggle='tab' href='#ltn_tab_1_5'>
                              My Properties <i className='fa-solid fa-list' />
                            </a>
                            <a data-bs-toggle='tab' href='#ltn_tab_1_11'>
                              My Reservations <i className='fa-solid fa-list' />
                            </a>

                            <a data-bs-toggle='tab' href='#ltn_tab_1_9'>
                              Change Password <i className='fa-solid fa-lock' />
                            </a>
                            <a href='/' onClick={handleLogout}>
                              Logout <i className='fas fa-sign-out-alt' />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-8'>
                        <div className='tab-content'>
                          <div
                            className='tab-pane fade active show'
                            id='ltn_tab_1_2'
                          >
                            <div className='ltn__myaccount-tab-content-inner'>
                              {/* comment-area */}
                              <div className='ltn__comment-area mb-50'>
                                <div className='ltn-author-introducing clearfix'>
                                  <div className='author-img'>
                                    <img
                                      src={`http://127.0.0.1:8000/uploads/${user?.image}`}
                                      My
                                      alt='#'
                                    />
                                  </div>
                                  <div className='author-info'>
                                    <h2>{user?.username}</h2>
                                    <div className='footer-address'>
                                      <ul>
                                        <li>
                                          <div className='footer-address-icon'>
                                            <i className='icon-call' />
                                          </div>
                                          <div className='footer-address-info'>
                                            <p>
                                              <a href='tel:+0123-456789'>
                                                {user?.mobile}
                                              </a>
                                            </p>
                                          </div>
                                        </li>
                                        <li>
                                          <div className='footer-address-icon'>
                                            <i className='icon-mail' />
                                          </div>
                                          <div className='footer-address-info'>
                                            <p>
                                              <a href='mailto:example@example.com'>
                                                {user?.email}
                                              </a>
                                            </p>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>

                                  <form action='#'>
                                    <div className='row mb-50'>
                                      <div className='col-md-6'>
                                        <label>Username:</label>
                                        <input
                                          type='text'
                                          name='ltn__name'
                                          value={username}
                                          onChange={(e) =>
                                            setUsername(e.target.value)
                                          }
                                        />
                                      </div>
                                      <div className='col-md-6'>
                                        <label>Phone number:</label>
                                        <input
                                          type='text'
                                          name='ltn__lastname'
                                          value={mobile}
                                          onChange={(e) =>
                                            setMobile(e.target.value)
                                          }
                                        />
                                      </div>

                                      <div className='col-md-12'>
                                        <label>Email:</label>
                                        <input
                                          type='email'
                                          name='ltn__lastname'
                                          placeholder='example@example.com'
                                          value={user?.email}
                                        />
                                      </div>
                                      <input
                                        type='file'
                                        id='myFile'
                                        name='filename'
                                        className='btn theme-btn-3 mb-10'
                                        onChange={handleClickImage1}
                                      />
                                    </div>

                                    <div className='btn-wrapper'>
                                      <button
                                        type='submit'
                                        className='btn theme-btn-1 btn-effect-1 text-uppercase'
                                        onClick={updateAccount}
                                      >
                                        Save Changes
                                      </button>
                                      <button
                                        type='submit'
                                        className='btn theme-btn-1 btn-effect-1 text-uppercase'
                                        onClick={() => deleteUser(user?.id)}
                                      >
                                        Delete account
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className='tab-pane fade' id='ltn_tab_1_5'>
                            <div className='ltn__myaccount-tab-content-inner'>
                              <div className='ltn__my-properties-table table-responsive'>
                                <table className='table'>
                                  <thead>
                                    <tr>
                                      <th scope='col'>My Properties</th>
                                      <th scope='col' />
                                      <th scope='col'>Date Added</th>
                                      <th scope='col'>Actions</th>
                                      <th scope='col'>Delete</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {locations.map((location) => {
                                      return (
                                        <tr>
                                          <td className='ltn__my-properties-img'>
                                            <a href='#'>
                                              <img
                                                src={`http://127.0.0.1:8000/uploads/${location?.images[0]}`}
                                                alt='#'
                                              />
                                            </a>
                                          </td>
                                          <td>
                                            <div className='ltn__my-properties-info'>
                                              <h6 className='mb-10'>
                                                <a href='product-details.html'>
                                                  {location?.title}
                                                </a>
                                              </h6>
                                              <small>
                                                <i className='icon-placeholder' />{" "}
                                                {location?.city},{" "}
                                                {location?.state}
                                              </small>
                                            </div>
                                          </td>
                                          <td>{location?.createdAt}</td>
                                          <td>
                                            <Link
                                              to={`/update-location/${location.id}`}
                                            >
                                              Edit
                                            </Link>
                                          </td>
                                          <td>
                                            <span
                                              onClick={() =>
                                                deleteLocation(location.id)
                                              }
                                              style={{ cursor: "pointer" }}
                                            >
                                              <i className='fa-solid fa-trash-can' />
                                            </span>
                                          </td>
                                        </tr>
                                      );
                                    })}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>

                          <div className='tab-pane fade' id='ltn_tab_1_11'>
                            <div className='ltn__myaccount-tab-content-inner'>
                              <div className='ltn__my-properties-table table-responsive'>
                                <table className='table'>
                                  <thead>
                                    <tr>
                                      <th scope='col'>My Reservations</th>
                                      <th scope='col' />
                                      <th scope='col'>Date Added</th>
                                      <th scope='col'>Actions</th>
                                      <th scope='col'>Delete</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {reservations.map((location) => {
                                      return (
                                        <tr>
                                          <td className='ltn__my-properties-img'>
                                            <p>{location?.id}</p>
                                          </td>
                                          <td>
                                            <div className='ltn__my-properties-info'>
                                              <h6 className='mb-10'>
                                                <a href='product-details.html'>
                                                  {location?.checkinDate} to{" "}
                                                  {location?.checkoutDate}
                                                </a>
                                              </h6>
                                            </div>
                                          </td>
                                          <td>{location?.totalPrice}</td>
                                          <td>
                                            <Link
                                              to={`#`}
                                              onClick={() =>
                                                accepteRes(location.id)
                                              }
                                            >
                                              Accepte
                                            </Link>
                                          </td>
                                          <td>
                                            <span
                                              onClick={() =>
                                                deleteRes(location.id)
                                              }
                                              style={{ cursor: "pointer" }}
                                            >
                                              <i className='fa-solid fa-trash-can' />
                                            </span>
                                          </td>
                                        </tr>
                                      );
                                    })}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div className='tab-pane fade' id='ltn_tab_1_9'>
                            <div className='ltn__myaccount-tab-content-inner'>
                              <div className='account-login-inner'>
                                <form
                                  action='#'
                                  className='ltn__form-box contact-form-box'
                                >
                                  <h5 className='mb-30'>Change Password</h5>
                                  <input
                                    type='password'
                                    name='password'
                                    placeholder='Current Password*'
                                    value={password}
                                    onChange={(e) =>
                                      setPassword(e.target.value)
                                    }
                                  />
                                  <input
                                    type='password'
                                    name='password'
                                    placeholder='New Password*'
                                    value={newPassword}
                                    onChange={(e) =>
                                      setNewPassword(e.target.value)
                                    }
                                  />
                                  <input
                                    type='password'
                                    name='password'
                                    placeholder='Confirm New Password*'
                                    value={confirmeNewPassword}
                                    onChange={(e) =>
                                      setConfirmeNewPassword(e.target.value)
                                    }
                                  />
                                  <div className='btn-wrapper mt-0'>
                                    <button
                                      className='theme-btn-1 btn btn-block'
                                      type='submit'
                                      onClick={updatePassword}
                                    >
                                      Save Changes
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* PRODUCT TAB AREA END */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
