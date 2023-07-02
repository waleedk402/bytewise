import {createStore, combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { userReducer } from "./Reducers/userReducer";
import jobReducer, { jobDetailsReducer } from "./Reducers/jobReducer";
import connectionReducer from "./Reducers/connectionReducer";
const reducer=combineReducers({
     user:userReducer,
     job:jobReducer,
     jobDetails:jobDetailsReducer,
     connection: connectionReducer
});



const middleWare=[thunk]

const store= createStore(reducer,composeWithDevTools(applyMiddleware(...middleWare)));

export default store