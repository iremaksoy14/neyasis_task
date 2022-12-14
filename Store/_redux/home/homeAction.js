import * as requestFromServer from "./homeCrud";
import {Slice, callTypes} from "./homeSlice";

const {actions} = Slice;

export const getCompanyCrud = () => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer

     //Api işlemleri için
    .getCompanies()    
    .then(response => {
     //State güncelleme          
      dispatch(actions.compayGetted(response.data));
      return true
    })
    .catch(error => {      
     //Hata gönderme      
      dispatch(actions.catchError({ error, callType: callTypes.list }));
      return false
    });
  
};


export const getJobCrud = () => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer

     //Api işlemleri için
    .getJobs()    
    .then(response => {
     //State güncelleme          
      dispatch(actions.jobsGetted(response.data));
      return true
    })
    .catch(error => {      
     //Hata gönderme      
      dispatch(actions.catchError({ error, callType: callTypes.list }));
      return false
    });
  
};





 