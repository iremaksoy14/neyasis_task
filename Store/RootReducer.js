import {combineReducers} from "redux";
import * as AllReducer from "../Store/_redux/AllReducer";


export const rootReducer = combineReducers({
  profile:  AllReducer.profileeReducer,
  home:AllReducer.homeeReducer,
  
 
});



 
 
