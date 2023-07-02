import React from 'react';
import { useNavigate } from 'react-router-dom';

const JobCard = ({ job }) => {
  const Navigate=useNavigate();
  const handleCheckOut = () => {
    Navigate(`/jobs/${job._id}`)
  };
  

  return (
    <div className="job-card m-2">
      <h3>{job.title}</h3>
     
      <p>{job.description}</p>
      <div className="row">
      <p>Organization: {job.organization.orgName}
    
</p>

      </div>
    
      <button className="btn btn-primary" onClick={handleCheckOut}>Check Out</button>

    </div>
  );
};

const JobsList = (props) => {

    const { jobs } = props;
  return (
  
    <div className="jobs-list">
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
};

export default JobsList;
