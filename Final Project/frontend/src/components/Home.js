import React from 'react'
import { Fragment } from 'react'
import { useSelector } from 'react-redux';
import "./home.css";
import { Link } from 'react-router-dom';
import JobsList from './jobs/JobsList';
import { useDispatch} from 'react-redux';
import { fetchJobs } from '../Actions/jobAction';
import { useEffect } from 'react';
import SideProfile from './users/SideProfile';
import Navbar from './Layout/Headers/Navbar';
import { fetchProfile } from '../Actions/userAction';
const Home = () => {
  const {isAuthenticated,user}=useSelector(state=>state.user)
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.job.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProfile(user.user._id));
  }, [dispatch, user.user._id]);

  return (
   <Fragment >
      <Navbar/>
    <div className="container-fluid" >
      <div className="row">
        <SideProfile user={user}/>
        <div className="col-md-8 shadow news-feed">
          <h2 className='m-2'>Latest Updates</h2>
          <JobsList jobs={jobs} />
       
        </div>
      </div>
    </div>
    </Fragment>
  )
}

export default Home