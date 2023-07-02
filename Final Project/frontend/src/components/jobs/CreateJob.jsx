import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createJob } from '../../Actions/jobAction';
import { useEffect } from 'react';
import axios from 'axios';
import { useAsyncValue, useNavigate } from 'react-router-dom';
import SideProfile from '../users/SideProfile';
import { useAlert } from 'react-alert';
import Navbar from '../Layout/Headers/Navbar';

const CreateJob = () => {
  const navigate = useNavigate();
  const alert=useAlert();
  const {isAuthenticated,user}=useSelector(state=>state.user)

  const [job, setJob] = useState({
    title: '',
    description: '',
    type: '',
    category: '',
    hours: '',
    stipend: '',
  });

  const { title, description, type, category, hours, stipend } = job;

  const createJobSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/v2/createJob', job);
      const id = response.data.newJob._id;
  
      if (response.status === 201) {
        // Job created successfully
        // Dispatch an action or perform any necessary logic
        alert.success("Job Posted !")
        navigate(`/jobs/${id}`);
      }
    } catch (error) {
      console.error('Error creating job:', error.message);
      alert.error(error.message);
    }
  };

  const handleInputChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
          <Navbar/>
      <div className="container-fluid">
        <div className="row">
        <SideProfile user={user} />
        <div className="col-md-8 shadow news-feed">
        <h2>Create Job</h2>
        <form onSubmit={createJobSubmit}>
          <div className="form-group">
            <label className="form-label">Title</label>
            <div className="input-group shadow">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend1">
                    <i className="fa-solid fa-pen" />
                  </span>
                </div>
            <input
              type="text"
              className="form-control"
              name="title"
              value={title}
              onChange={handleInputChange}
              required
            />
          </div>
          </div>

          <div className="form-group">
          <label className="form-label">Description</label>
              <div className="input-group shadow">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend2">
                  <i class="fa-solid fa-briefcase"></i>                  </span>
                </div>
                <textarea
                  className="form-control"
                  placeholder="Description"
                  name="description"
                  value={description}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              </div>

              <div className="form-group">
              <label className="form-label">Type</label>
              <div className="input-group shadow">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend3">
                    <i className="fa-solid fa-pen" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type"
                  name="type"
                  value={type}
                  onChange={handleInputChange}
                  required
                />
              </div>
              </div>

              <div className="form-group">
              <label className="form-label">Category</label>
              <div className="input-group shadow">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend4">
                    <i className="fa-solid fa-list" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Category"
                  name="category"
                  value={category}
                  onChange={handleInputChange}
                  required
                />
              </div>
</div>

<div className="form-group">
            <label className="form-label">Hours</label>
              <div className="input-group shadow">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend5">
                    <i className="fa-solid fa-clock" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Hours"
                  name="hours"
                  value={hours}
                  onChange={handleInputChange}
                  required
                />
              </div>
              </div>

              <div className="form-group">

              <label className="form-label">Stipend</label>
              <div className="input-group shadow">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend6">
                  <i class="fa-solid fa-dollar-sign"></i>                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Stipend"
                  name="stipend"
                  value={stipend}
                  onChange={handleInputChange}
                  required
                />
              </div>
              </div>

          <button type="submit" className="btn px-5 mt-2 mb-3 btn-primary">
            Create Job
          </button>
        </form>
        </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateJob;