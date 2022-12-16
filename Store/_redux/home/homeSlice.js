import {createSlice} from "@reduxjs/toolkit";

const initialUserState = {
  listLoading: false,
  actionsLoading: false,
  jobs:[],
  works:[],
  companies:[]

  
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
    jobsGetted: (state, action) => {
         
      state.jobs = action.payload;
    },
    worksGetted: (state, action) => {
      state.actionsLoading = false;
      state.works = action.payload
      state.error = null;
    },
    companiesGetted: (state, action) => {
      state.actionsLoading = false;
      state.companies = action.payload

     
    },
   
   
    
    devError: (state) => {
      state.actionsLoading = false;           
      state.error = null;
    }             
  }
});