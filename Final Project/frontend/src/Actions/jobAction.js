import { FETCH_JOBS_FAILURE, 
    FETCH_JOBS_SUCCESS, 
    FETCH_JOBS_REQUEST,
FETCH_JOB_FAILURE,
FETCH_JOB_REQUEST,
FETCH_JOB_SUCCESS,
CELAR_ERRORS } from "../Constants/jobConstants";
import axios from "axios";

//FETCH JOBS
export const fetchJobs=()=>async  (dispatch) =>{
    try {
        dispatch({
            type:FETCH_JOBS_REQUEST
        })
        
   
        const {data}=await axios.get('/api/v2/jobs')
        
        dispatch({type:FETCH_JOBS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type: FETCH_JOBS_FAILURE,
                   payload:error.response.data.message});
    }
  }

  //FETCH Job Details
export const jobDetail=(id)=>async  (dispatch) =>{
    console.log("hello")
    try {
        dispatch({
            type:FETCH_JOB_REQUEST
        })
        
   
        const {data}=await axios.get(`/api/v2/job/${id}`)
        
        dispatch({type:FETCH_JOB_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type: FETCH_JOB_FAILURE,
                   payload:error.response.data.message});
    }
  }

    //clearing erros
export const clearErrors=()=>async(dispatch)=>{
    dispatch({
        type:CELAR_ERRORS
    })
    }