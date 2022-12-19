import {combineReducers} from "redux";
import * as AllReducer from "../Store/_redux/AllReducer";


export const rootReducer = combineReducers({
  home:AllReducer.homeeReducer,
});



 
 
