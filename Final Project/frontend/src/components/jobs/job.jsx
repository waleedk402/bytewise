import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAlert } from 'react-alert';
import axios from "axios";
import "../home.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SideProfile from '../users/SideProfile';
import Navbar from '../Layout/Headers/Navbar';
import ProjectDetails from '../project/ProjectDetails';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
const Job = () => {
  const navigate=useNavigate();
  const { id } = useParams();
  const alert = useAlert();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isAuthenticated, user } = useSelector(state => state.user)
  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        const response = await axios.get(`/api/v2/job/${id}`);
        const data = response.data;
        setJob(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetail();
  }, [id]);

  const handleApply = async () => {
    const jobID = job.jobInfo._id;
    try {
      const response = await axios.post("http://localhost:3000/api/v2/apply", { jobID }, { withCredentials: true });
      if (response.status === 201) {
        alert.success('Application submitted successfully!');
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      alert.error(`Failed to submit application: ${error.message}`);
    }
  };

  const handleAccept =async (appId) => {
 
    try {
      const jobID=id
      const userID=appId
      const response= await axios.post("/api/v2/enroll",{jobID,userID})
      alert.success(response.data.message);
      navigate(`/jobs/${jobID}`);
  
    } catch (error) {
      alert.error(error.message)
    }
   
  };

  

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Fragment>
      {job ? (
        <Fragment>
              <Navbar/>
          <div className="container-fluid">
            <div className="row">
             <SideProfile user={user} />
              <div className="col-md-8 py-2 shadow news-feed">
                <h1>Job Details</h1>
                <h3>{job.jobInfo.title}</h3>
                <p>{job.jobInfo.description}</p>
                <p>Organization: {job.jobInfo.organization.orgName}</p>
                <p>Type: {job.jobInfo.type}</p>
                <p>Category: {job.jobInfo.category}</p>
                <p>Hours: {job.jobInfo.hours}</p>
                <p>Stipend: {job.jobInfo.stipend}</p>
                {/* Display other job details */}
                {user.user.role === "employee" && (
                  <button className="btn btn-danger px-5" onClick={handleApply}>Apply</button>
                )}
              </div>
            </div>
            {user.user.role === "Organization" && user.user._id === job.jobInfo.organization._id && job.jobInfo.enrolledEmployees.length > 0 && (
              <div className="row">
                <div className='col-md-2 bg-transparent sub-profile'></div>
                <div className="col-md-8 py-2 shadow mt-0 news-feed">
                  <h1 className='ml-2'>Employees</h1>
                  {job.jobInfo.enrolledEmployees.map((emp) => (
                    <div key={emp._id}>
     <div className="container mt-5" style={{marginTop:"12px", marginBottom:"20px"}}>

<div className=" card-post">
  <img
    src={emp.avatar.url}
  
    className="d-none rounded-circle d-md-block blog-card-img card-img-top"
  />
  <div className="card-body blog-card-body d-sm-12 ">
    <h4 className="card-title" style={{ fontWeight: "bold" }}>
    {emp.firstName} {emp.lastName}
    </h4>
    <p
      className="card-title d-none d-lg-block"
      style={{ fontSize: 20, color: "rgb(123, 123, 123)" }}
    >
     {emp.email}
    </p>
    <p className="card-text" style={{ color: "rgb(193, 193, 193)" }}>
    <Link to={`/profile/${emp._id}`}>
                        <button className="btn mt-2 btn-primary">Check Profile</button>
                      </Link>

  <Link to={`/project/assignment/${emp._id}/${job.jobInfo._id}`} >
      <button className="btn mt-2 ml-2 btn-danger" >Assign Project</button>
      </Link>            
      <b>
       
      </b>
    </p>
   
  </div>
</div>
</div>

                    </div>
                  ))}
                </div>
              </div>
            )}
            {user.user.role === "Organization" && user.user._id === job.jobInfo.organization._id && job.jobInfo.applications.length > 0 && (
              <div className="row">
                <div className='col-md-2 bg-transparent sub-profile'></div>
                <div className="col-md-8 py-2 shadow mt-0 news-feed">
                  <h1>Applications</h1>
                  {job.jobInfo.applications.map((app) => (
                    <div key={app._id}>
                         <div className="container mt-5" style={{marginTop:"12px", marginBottom:"20px"}}>

<div className=" card-post">
  <img
    src={app.avatar.url}
  
    className="d-none rounded-circle d-md-block blog-card-img card-img-top"
  />
  <div className="card-body blog-card-body d-sm-12 ">
    <h4 className="card-title" style={{ fontWeight: "bold" }}>
    {app.firstName} {app.lastName}
    </h4>
    <p
      className="card-title d-none d-lg-block"
      style={{ fontSize: 20, color: "rgb(123, 123, 123)" }}
    >
     {app.email}
    </p>
    <p className="card-text" style={{ color: "rgb(193, 193, 193)" }}>
    <Link to={`/profile/${app._id}`}>
                        <button className="btn mt-2 btn-primary">Check Profile</button>
                      </Link>
                      <button className="btn ml-2 mt-2 btn-danger" onClick={() => handleAccept(app._id)}>Accept</button>

      <b>
       
      </b>
    </p>
   
  </div>
</div>
</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Fragment>
      ) : (
        <p>No job details found</p>
      )}
    </Fragment>
  );
};

export default Job;
