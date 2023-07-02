import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register,clearErrors } from '../../Actions/userAction'
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Fragment } from 'react';

const RegForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const alert=useAlert();

  const {loading,error,isAuthenticated}=useSelector(state=>state.user)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    institute: '',
    degree: '',
    session: '',
    expertise: '',
    bio: '',
    github: '',
    twitter: '',
    instagram: '',
    password: '',
    confirmPassword: '',
    avatar: null,
  });

  const {
    firstName,
    lastName,
    phone,
    email,
    institute,
    degree,
    session,
    expertise,
    bio,
    github,
    twitter,
    instagram,
    password,
    confirmPassword,
    avatar,
  } = formData;

  const handleChange = (e) => {
    if (e.target.name === 'avatar') {
      setFormData({ ...formData, avatar: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create form data object to send to the server
    const userData={
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email:email,
        institute:institute,
        degree:degree,
        session:session,
        expertise:expertise,
        bio:bio,
        github:github,
        twitter:twitter,
        instagram:instagram,
        password:password,
        avatar:avatar
    }
   

    // Dispatch the registerUser action
    dispatch(register(userData));
  };

  useEffect(() => {
    if(error){
      alert.error(error)
      dispatch(clearErrors())
    }
    if(isAuthenticated){
    navigate("/home")
    }
  }, [alert,isAuthenticated,dispatch,error,navigate])
  return (
    <Fragment>
    <div className="col-xxl-8 m-5 mb-xxl-0">
      <div className="container bg-light shadow bg-secondary-soft emp-profile px-4 py-5 rounded">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="row g-3">
            <h4 className="mb-4 mt-0">Sign Up!</h4>
            <hr />
            {/* First Name */}
            <div className="col-md-6">
              <label className="form-label">First Name </label>
              <div className="input-group shadow">
                <div className="input-group-prepend">
                  <span className="input-group-text p-" id="inputGroupPrepend3">
                    <i className="fa-solid fa-user" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  required=""
                  name="firstName"
                  value={firstName}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* Last name */}
            <div className="col-md-6">
              <label className="form-label">Last Name *</label>
              <div className="input-group shadow">
                <div className="input-group-prepend">
                  <span className="input-group-text p-2" id="inputGroupPrepend3">
                    <i className="fa-solid fa-user" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  required=""
                  name="lastName"
                  value={lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* Student ID */}
            <div className="col-md-6">
              <label className="form-label">Phone *</label>
              <div className="input-group shadow">
                <div className="input-group-prepend">
                  <span className="input-group-text p-2" id="inputGroupPrepend3">
                    <i className="fa-solid fa-phone" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  required=""
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* Email */}
            <div className="col-md-6">
              <label className="form-label">Email *</label>
              <div className="input-group shadow">
                <div className="input-group-prepend">
                  <span className="input-group-text p-2" id="inputGroupPrepend3">
                    <i className="fa-sharp fa-solid fa-envelope" />
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  placeholder=""
                  required=""
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* Department Degree Session */}
            <div className="row g-2">
              <div className="col-md-4">
                <label className="form-label">Institute *</label>
                <div className="input-group shadow">
                  <div className="input-group-prepend">
                    <span className="input-group-text p-2" id="inputGroupPrepend3">
                      <i className="fa-sharp fa-solid fa-building-user" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="institute"
                    required=""
                    value={institute}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <label className="form-label">Degree / Course *</label>
                <div className="input-group shadow">
                  <div className="input-group-prepend">
                    <span className="input-group-text p-2" id="inputGroupPrepend3">
                      <i className="fa-solid fa-book-open" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="degree"
                    required=""
                    value={degree}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <label className="form-label">Session *</label>
                <div className="input-group shadow">
                  <div className="input-group-prepend">
                    <span className="input-group-text p-2" id="inputGroupPrepend3">
                      <i className="fa-solid fa-graduation-cap" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="session"
                    required=""
                    value={session}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            {/* Status */}
            <div className="col-md-6">
              <label className="form-label">Expertise *</label>
              <div className="input-group shadow">
                <div className="input-group-prepend">
                  <span className="input-group-text p-2" id="inputGroupPrepend3">
                    <i className="fa-solid fa-question" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  name="expertise"
                  required=""
                  value={expertise}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/*- Bio */}
            <div className="col-md-6">
              <label className="form-label">Bio *</label>
              <div className="input-group shadow">
                <div className="input-group-prepend">
                  <span className="input-group-text p-2" id="inputGroupPrepend3">
                    <i className="fa-solid fa-question" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  name="bio"
                  required=""
                  value={bio}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* {Socials} */}
            <div className="row g-2">
              <div className="col-md-4">
                <label className="form-label">Github </label>
                <div className="input-group shadow">
                  <div className="input-group-prepend">
                    <span className="input-group-text p-2" id="inputGroupPrepend3">
                      <i className="fab fa-github" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="github"
                    value={github}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <label className="form-label">Twitter </label>
                <div className="input-group shadow">
                  <div className="input-group-prepend">
                    <span className="input-group-text p-2" id="inputGroupPrepend3">
                      <i className="fab fa-twitter" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="twitter"
                    value={twitter}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <label className="form-label">Instagram </label>
                <div className="input-group shadow">
                  <div className="input-group-prepend">
                    <span className="input-group-text p-2" id="inputGroupPrepend3">
                      <i className="fa fa-instagram" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="instagram"
                    value={instagram}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            {/* Password */}
            <div className="col-md-6">
              <label className="form-label">Password *</label>
              <div className="input-group shadow">
                <div className="input-group-prepend">
                  <span className="input-group-text p-2" id="inputGroupPrepend3">
                    <i className="fa-solid fa-lock" />
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder=""
                  required=""
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* Confirm Password */}
            <div className="col-md-6">
              <label className="form-label">Confirm Password *</label>
              <div className="input-group shadow">
                <div className="input-group-prepend">
                  <span className="input-group-text p-2" id="inputGroupPrepend3">
                    <i className="fa-solid fa-lock" />
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder=""
                  required=""
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* Avatar */}
            <div className="col-md-12">
              <label className="form-label">Profile Picture</label>
              <div className="input-group shadow">
                <div className="input-group-prepend">
                  <span className="input-group-text p-2" id="inputGroupPrepend3">
                    <i className="fa-solid fa-image" />
                  </span>
                </div>
                <input type="file" className="form-control" name="avatar" onChange={handleChange} />
              </div>
            </div>
            <div className="col-md-12">
              <div className="d-grid gap-2 col-6 mx-auto">
                <button type="submit" className="btn btn-primary btn-block">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    </Fragment>
  );
};

export default RegForm;