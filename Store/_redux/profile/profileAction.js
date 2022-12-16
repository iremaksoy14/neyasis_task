import * as requestFromServer from "./profileCrud";
import {Slice, callTypes} from "./profileSlice";

const {actions} = Slice;

export const getUsers = () => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer

     //Api işlemleri için
    .getUsersCrud()    
    .then(response => {
      if(response.status===200){
         //State güncelleme  
             
      //  dispatch(actions.userGetList(response.data));

      }
    
      return true
    })
    .catch(error => {      
     //Hata gönderme      
      dispatch(actions.catchError({ error, callType: callTypes.list }));
      return false
    });
  
};




 