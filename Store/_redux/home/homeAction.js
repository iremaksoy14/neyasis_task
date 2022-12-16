import * as requestFromServer from "./homeCrud";
import {Slice, callTypes} from "./homeSlice";

const {actions} = Slice;

export const getJobs = () => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer

     //Api işlemleri için
    .getJobsCrud()    
    .then(response => {
      console.log(response)
      if(response.status===200){
         //State güncelleme          
       dispatch(actions.jobsGetted(response.data));

      }
    
      return true
    })
    .catch(error => {     
      console.log(error) 
     //Hata gönderme      
      dispatch(actions.catchError({ error, callType: callTypes.list }));
      return false
    });
  
};


export const getWorks = () => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer

     //Api işlemleri için
    .getWorksCrud()    
    .then(response => {
     //State güncelleme     
     console.log(response)
     if(response.status===200){
        dispatch(actions.worksGetted(response.data));
     }     
     
      return true
    })
    .catch(error => {      
     //Hata gönderme      
      dispatch(actions.catchError({ error, callType: callTypes.list }));
      return false
    });
  
};
export const getCompanies = () => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer

     //Api işlemleri için
    .getCopaniesCrud()    
    .then(response => {
     //State güncelleme     
     console.log(response)
     if(response.status===200){
        dispatch(actions.companiesGetted(response.data));
     }     
     
      return true
    })
    .catch(error => {      
     //Hata gönderme      
      dispatch(actions.catchError({ error, callType: callTypes.list }));
      return false
    });
  
};








 