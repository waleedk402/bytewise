import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
const SideProfile = ({user}) => {
  return (
    <Fragment>
        <div className="col-md-2 text-center shadow sub-profile" height={200}>
          <div className=' text-center pfp' >
          <img src={user.user.avatar.url} 
          alt=""
          className="rounded-circle" 
          height={100} 
          loading="lazy" />

          </div>
          <h4>{user.user.firstName ? `${user.user.firstName} ${user.user.lastName}` : user.user.orgName}</h4>
          <p className='text-secondary'>{user.user.bio ? `${user.user.bio}` : user.user.bio }</p>
          <p className='text-secondary'>{user.user.email ? `${user.user.email}` : user.user.orgEmail }</p>
          <Link to={`/profile/${user.user._id}`}><button style={{paddingRight: "35px", paddingLeft:"35px"}} className="btn btn-outline-primary">Profile</button></Link>
         <br /> 
         {user.user.role==="Organization" && (

      <Link to={"/job/CreateJob"}><button className="btn m-2 px-4 btn-danger">Create Job</button>
</Link>
         )}

         {user.user.role==="employee" && (
                 <Link to={"/project/Progress"}><button className="btn m-2 px-4 btn-danger">My Projects</button>
                 </Link>  
         )}
        </div>
    </Fragment>
  )
}

export default SideProfile