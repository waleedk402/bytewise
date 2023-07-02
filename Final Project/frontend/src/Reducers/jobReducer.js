import { FETCH_JOBS_FAILURE,
     FETCH_JOBS_SUCCESS, 
     FETCH_JOBS_REQUEST,
    FETCH_JOB_FAILURE,
  FETCH_JOB_REQUEST,
FETCH_JOB_SUCCESS } from "../Constants/jobConstants";

  const initialState = {
    jobs: [],
    loading: false,
    error: null,
  };
  
  const jobReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_JOBS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_JOBS_SUCCESS:
        return {
          ...state,
          loading: false,
          jobs: action.payload.data,
          error: null
        };
      case FETCH_JOBS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
       
      
      default:
        return state;
    }
  };

  export const jobDetailsReducer=(state = { job:{} }  ,action)=>{
    switch(action.type){
      case FETCH_JOB_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
          selectedJob: null
        };
      case FETCH_JOB_SUCCESS:
        return {
          ...state,
          loading: false,
          selectedJob: action.payload.data,
          error: null
        };
      case FETCH_JOB_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
       default:return state
            }

}
  
  export default jobReducer;