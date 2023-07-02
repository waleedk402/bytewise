import React,{Fragment, useState,useEffect} from 'react'
// import "./user.css"
import Loader from "../Layout/Loader/Loader"
import { Link } from 'react-router-dom'
import { MdOutlineLockOpen } from 'react-icons/md'
import { MdMailOutline } from 'react-icons/md'
import { MdLockOpen } from 'react-icons/md'
import { MdFace } from 'react-icons/md'
import { register,clearErrors } from '../../Actions/userAction'
import {useDispatch,useSelector} from "react-redux";
import {useAlert} from "react-alert";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom"


const UserReg = ({history}) => {

  const navigate = useNavigate(); 
  const alert=useAlert();
  const dispatch=useDispatch();
  const {loading,error,isAuthenticated}=useSelector(state=>state.user)
  const [user,setUser]=useState({
        firstName:"",
        lastName:"",
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
    });
    const {firstName,lastName,
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
      confirmPassword}=user

    const [avatar,setAvatar]=useState("/Profile.png");
  
    const[avatarPreview,setAvatarPreview]=useState("/Profile.png");
  
    const registerSubmit=(e)=>{
      e.preventDefault();
        // const myForm = new FormData();
        // myForm.append("firstName",firstName)
       
        // myForm.append("lastName",lastName)
        
        // myForm.append("email",email)
        
        // myForm.append("password",password)

        const myForm={
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
        
        // myForm.set("avatar",avatar)
        dispatch(register(myForm));
    }

    useEffect(() => {
      if(error){
        alert.error(error)
        dispatch(clearErrors())
      }
      if(isAuthenticated){
      navigate("/home")
      }
    }, [alert,isAuthenticated,dispatch,error,navigate])
    

    const registerDataChange = (e) => {
        if (e.target.name === "avatar") {
          const reader = new FileReader();
    
          reader.onload = () => {
            if (reader.readyState === 2) {
              setAvatarPreview(reader.result);
              setAvatar(reader.result);
            }
          }
          reader.readAsDataURL(e.target.files[0]);
        } else {
          setUser({ ...user, [e.target.name]: e.target.value });  
        }
    }
    return (
    <Fragment>
        {/* <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox"> */}
        <div className="col-xxl-8 m-5 mb-xxl-0">
      <div className="container bg-light shadow bg-secondary-soft emp-profile px-4 py-5 rounded">
            {/* <h2>Register Now</h2> */}
         
            <h4 className="mb-4 mt-0">Sign Up!</h4>
            <form
              
                encType="multipart/form-data"
                onSubmit={registerSubmit}
              >
                   <div className="row g-3">
                 <hr />
            {/* First Name */}
            <div className="col-md-6">
              <label className="form-label">First Name </label>
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
                  required
                  name="firstName"
                  value={firstName}
                  onChange={registerDataChange}
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
                  required
                  name="lastName"
                  value={lastName}
                  onChange={registerDataChange}
                />
              </div>
            </div>
            {/* Phone */}
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
                  required
                  name="phone"
                  value={phone}
                  onChange={registerDataChange}
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
                  required
                  name="email"
                  value={email}
                  onChange={registerDataChange}
                />
              </div>
            </div>
            {/* Department Degree Session */}
            <div className="row g-2">
              <div className="col-md-4">
                <label className="form-label">Institute </label>
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
                   
                    value={institute}
                    onChange={registerDataChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <label className="form-label">Degree / Course </label>
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
                   
                    value={degree}
                    onChange={registerDataChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <label className="form-label">Session </label>
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
         
                    value={session}
                    onChange={registerDataChange}
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
                  required
                  value={expertise}
                  onChange={registerDataChange}
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
                  required
                  value={bio}
                  onChange={registerDataChange}
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
                      <i className="fa-sharp fa-solid fa-github" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="github"
                    value={github}
                    required
                    onChange={registerDataChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <label className="form-label">Twitter </label>
                <div className="input-group shadow">
                  <div className="input-group-prepend">
                    <span className="input-group-text p-2" id="inputGroupPrepend3">
                      <i className="fa-solid fa-twitter" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="twitter"
                    value={twitter}
                    required
                    onChange={registerDataChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <label className="form-label">Instagram </label>
                <div className="input-group shadow">
                  <div className="input-group-prepend">
                    <span className="input-group-text p-2" id="inputGroupPrepend3">
                      <i className="fa-solid fa-instagram" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="instagram"
                    value={instagram}
                    required
                    onChange={registerDataChange}
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
                  required
                  name="password"
                  value={password}
                  onChange={registerDataChange}
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
                  required
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={registerDataChange}
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
                <input type="file" className="form-control" required name="avatar" onChange={registerDataChange} />
              </div>
            </div>
              {/* <div className="row">
                <div className="col-md-5">5</div>
                <div className="col-md-5">5</div>
              </div>
                <div className="signUpName">
                  <MdFace />
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    name="firstName"
                    value={firstName}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpName">
                  <MdFace />
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    name="lastName"
                    value={lastName}
                    onChange={registerDataChange}
                  />
                </div>
                
                <div className="signUpEmail">
                  <MdMailOutline />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpPassword">
                  <MdLockOpen />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={password}
                    onChange={registerDataChange}
                  />
                </div>

                <div id="registerImage">
                  <img src={avatarPreview} alt="Avatar Preview" />
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={registerDataChange}
                  />
                </div> */}

                <input type="submit" value="Register" className="btn btn-danger" />
                <div className="col-md-12 text-center">Already have an account? <Link to={"/login/employee"}><button className='btn btn-outline-primary'>Log in</button></Link></div>

                </div>
              </form>
          

        </div>
    </div>
    </Fragment>
  )
}

export default UserReg;