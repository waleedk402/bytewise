import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

const JobsTab = ({profile}) => {


    const navigate=useNavigate();
    const alert=useAlert();

    const handleAccept =async (appId, jobId) => {
 
        try {
          const jobID=jobId
          const userID=appId
          const response= axios.post("/api/v2/enroll",{jobID,userID})
          alert.success((await response).data.message);
          navigate(`/jobs/${jobID}`);
      
        } catch (error) {
          alert.error(error.message)
        }
       
      };
      
  return (
    <Fragment>
            <div className="card social-tabs">
                    <ul
                      className="nav nav-tabs md-tabs tab-timeline"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#jobs"
                          role="tab"
                        >
                          Jobs
                        </a>
                        <div className="slide" />
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#Applications"
                          role="tab"
                        >
                          Applications
                        </a>
                        <div className="slide" />
                      </li>
                      </ul>
                  </div>
                  

                  <div className="tab-content">
                    <div className="tab-pane active" id="jobs">
                    <div className="row">
    <div className="col-sm-12">
      <div className="card">
        <div className="card-header">
          <h5 className="card-header-text">Jobs</h5>
        </div>
        <div className="card-block">
  {profile.user.enrolledJobs && profile.user.enrolledJobs.length > 0 ? (
    // Render content when enrolledJobs array is not empty
    <>
      {profile.user.enrolledJobs.map((job) => (
        <div key={job._id}>
          <h4>{job.title}</h4>
          <p>{job.description}</p>
          <p>Type: {job.type}</p>
          <p>Category: {job.category}</p>
          <p>Hours: {job.hours}</p>
          <p>Stipend: {job.stipend}</p>
          <p>Organization: {job.organization && job.organization.orgName}</p> {/* Assuming organization has a "name" field */}
          {/* Add additional fields as needed */}
        </div>
      ))}
    </>
  ) : profile.user.jobs && profile.user.jobs.length > 0 ? (
    // Render content when enrolledJobs array is empty and jobs array is not empty
    <>
      {profile.user.jobs.map((job) => (
        <div key={job._id}>
          <h4>{job.title}</h4>
          <p>{job.description}</p>
          <p>Type: {job.type}</p>
          <p>Category: {job.category}</p>
          <p>Hours: {job.hours}</p>
          <p>Stipend: {job.stipend}</p>
          <p>Organization: {profile.user.orgName && profile.user.orgName}</p> {/* Assuming organization has a "name" field */}
          {/* Add additional fields as needed */}
        </div>
      ))}
    </>
  ) : (
    // Render content when both enrolledJobs and jobs arrays are empty
    <>
      {/* Fallback content */}
    </>
  )}
</div>



      </div>
    </div>
  </div>
</div>

            {/* Applications Pane         */}
            <div className="tab-pane" id="Applications">
  <div className="row">
    <div className="col-sm-12">
      <div className="card">
        <div className="card-header">
          <h5 className="card-header-text">Applications</h5>
        </div>
        <div className="card-block">
          {/* Applications content */}
          {profile.user.appliedJobs && profile.user.appliedJobs.length > 0 ? (
            <>
              {profile.user.appliedJobs.map((x) => (
                <div key={x._id}>
                  <h4>{x.title}</h4>
                  <p>{x.description}</p>
                  <p>Type: {x.type}</p>
                  <p>Category: {x.category}</p>
                  <p>Hours: {x.hours}</p>
                  <p>Stipend: {x.stipend}</p>
                  <p>Organization: {x.organization && x.organization.orgName}</p>
                  {/* Add additional fields as needed */}
                </div>
              ))}
            </>
          ) : profile.user.jobs && profile.user.jobs.length > 0 ? (
            <>
              {profile.user.jobs.map((job) => (
                <div key={job._id}>
              
                 
                  {job.applications.map((app) => (
                    <div  className="p-3" key={app._id}>

<div className="container  mt-5" style={{marginTop:"12px", marginBottom:"20px"}}>

<div className=" card-post">
  <img
    src={app.avatar.url && app.avatar.url}
  
    className="d-none rounded-circle d-md-block blog-card-img card-img-top"
  />
  <div className="card-body blog-card-body d-sm-12 ">
    <h3 className="card-title" style={{ fontWeight: "bold" }}>
    {job.title}
    </h3>
    <h4>Name: {app.firstName} {app.lastName}</h4>
    <p
      className="card-title d-none d-lg-block"
      style={{ fontSize: 20, color: "rgb(123, 123, 123)" }}
    >
    Email: {app.email}
    </p>
    <p className="card-text" style={{ color: "rgb(193, 193, 193)" }}>
    <button className="btn btn-danger" onClick={() => handleAccept(app._id, job._id)}>Accept</button>
                     <Link to={`/profile/${app._id}`}><button className="btn  m-2 btn-primary">Check Profile</button> </Link>
                      
      <b>
       
      </b>
    </p>
   
  </div>
</div>
</div>
                       {/* <h3>{job.title}</h3> 
                      <h4>Name: {app.firstName} {app.lastName}</h4>
                      <p>Email: {app.email}</p>
                      <button className="btn btn-danger" onClick={() => handleAccept(app._id, job._id)}>Accept</button>
                     <Link to={`/profile/${app._id}`}><button className="btn  m-2 btn-primary">Check Profile</button> </Link>
                       */}
                    </div>
                  ))}
                </div>
              ))}
            </>
          ) : (
            // Render content when both appliedJobs and jobs arrays are empty
            <>
              {/* Fallback content */}
            </>
          )}
        </div>

      </div>
    </div>
  </div>
</div>
</div>




{/* <div className="container mt-5" style={{marginTop:"12px", marginBottom:"20px"}}>

<div className=" card-post">
  <img
    src={app.avatar.url && app.avatar.url}
  
    className="d-none rounded-circle d-md-block blog-card-img card-img-top"
  />
  <div className="card-body blog-card-body d-sm-12 ">
    <h3 className="card-title" style={{ fontWeight: "bold" }}>
    {job.title}
    </h3>
    <h4>Name: {app.firstName} {app.lastName}</h4>
    <p
      className="card-title d-none d-lg-block"
      style={{ fontSize: 20, color: "rgb(123, 123, 123)" }}
    >
    Email: {app.email}
    </p>
    <p className="card-text" style={{ color: "rgb(193, 193, 193)" }}>
    <button className="btn btn-danger" onClick={() => handleAccept(app._id, job._id)}>Accept</button>
                     <Link to={`/profile/${app._id}`}><button className="btn  m-2 btn-primary">Check Profile</button> </Link>
                      
      <b>
       
      </b>
    </p>
   
  </div>
</div>
</div> */}

    </Fragment>
  )
}

export default JobsTab