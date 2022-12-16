import {createSlice} from "@reduxjs/toolkit";

const initialUserState = {
  listLoading: false,
  actionsLoading: false,
  users: [],
  userForEdit: null,
  
};
export const callTypes = {
  list: "list",
  action: "action"
};
//State işlemleri için
export const Slice = createSlice({
  name: "user",
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
    userGetList: (state, action) => {
     state.users=action.payload
    },

    //Add
    userAdd: (state, action) => {
      state.actionsLoading = false;     
      state.users=[...state.users,action.payload]    
      state.error = null;            
    },
    //update
    userUpdate: (state, action) => {
      state.actionsLoading = false;     
      state.users= state.users.filter((user)=>{
        return user.id!==action.payload.id
      });
      
      state.users.push(action.payload)
      state.error = null;
    },

    //delete
    userDelete: (state, action) => {
      state.listLoading = false;
      state.actionsLoading = false;     
      state.users= state.users.filter((user)=>{
        return user.id!==action.payload
      });     
      state.error = null;
    } ,
    devError: (state) => {
      state.actionsLoading = false;           
      state.error = null;
    }             
  }
});