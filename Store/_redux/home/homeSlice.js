import {createSlice} from "@reduxjs/toolkit";

const initialUserState = {
  listLoading: false,
  actionsLoading: false,
  companies:[],
  jobs:[],

  
};
export const callTypes = {
  list: "list",
  action: "action"
};
//State işlemleri için
export const Slice = createSlice({
  name: "home",
  initialState: initialUserState,
  reducers: {
    catchError: (state, action) => {
         
      state.error = `${action.type}: ${action.payload.error}`;    
     
      if (action.payload.callType === callTypes.list) {       
        state.listLoading = false;         
      } else {
        state.actionsLoading = false;
      }
    },
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;         
      } else {
        state.actionsLoading = true;
      }
    },    
    compayGetted: (state, action) => {
         
      state.companies = action.payload;
    },
    jobsGetted: (state, action) => {
         
      state.jobs = action.payload;
    },
    
    devError: (state) => {
      state.actionsLoading = false;           
      state.error = null;
    }             
  }
});