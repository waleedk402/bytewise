import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import UserReg from './components/users/userReg';
import React from "react";
import WebFont from 'webfontloader';
import { useSelector } from 'react-redux';
import UserOptions from "../src/components/Layout/Headers/UserOptions"
import Home from "./components/Home"
import UserLogin from './components/users/userLogin';
import Job from './components/jobs/job';
import Profile from "./components/users/Profile";
import Logout from "./components/users/Logout";
import RegForm from './components/users/Reg';
import Roles from './components/Roles';
import OrganizationLogin from './components/users/orgLogin';
import OrgReg from './components/users/orgReg';
import CreateJob from './components/jobs/CreateJob';
import Navbar from './components/Layout/Headers/Navbar';
import Jobs from './components/jobs/MyJobs';
import Network from "./components/network/Network";
import Notifications from './components/notifications/Notifications';
import ProjectDetails from './components/project/ProjectDetails';
import ProjectProgressPage from './components/project/ProjectProgress';


function App() {
  React.useEffect(()=>{
    WebFont.load({
      google:{
        families:["Roboto","Droid Sans","Chilanks"]
      }
    })
    
  },[])

  const {isAuthenticated,user}=useSelector(state=>state.user)

  
  return (
    <Router>
     
      <Routes>
      <Route path="/" element={<Roles />}/>
      <Route path="/login/employee" element={<UserLogin/>} />
      <Route path="/login/organization" element={<OrganizationLogin/>} />
      <Route path="/register/employee" element={<UserReg/>}/>
      <Route path="/register/organization" element={<OrgReg/>}/>
      {isAuthenticated && <Route path="/home" element={<Home />} />}
       <Route path="/myJobs/:id" element={<Jobs user={user}/>} />
       <Route path='/notifications' element={<Notifications/>} />
       <Route path="/network" element={<Network/>} />
      <Route exact path="/jobs/:id" element={<Job />}  />
      <Route path="/project/Progress" element={<ProjectProgressPage />}  />
      <Route exact path="/project/assignment/:empID/:jobID" element={<ProjectDetails />}  />
      <Route exact path="/profile/:id" element={<Profile/>} />
      <Route path="/logout" element={<Logout />} />
       <Route exact path="/job/CreateJob" element={<CreateJob/>}/>
      </Routes>
    </Router>
      );
}

export default App;
