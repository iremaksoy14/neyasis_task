import * as requestFromServer from "./UserCrud";
import {Slice, callTypes} from "./UserSlice";

const {actions} = Slice;

export const getUserCrud = (userid) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer

     //Api işlemleri için
    .getUsers(userid)    
    .then(response => {
     //State güncelleme          
      dispatch(actions.userGetList(response.data));
      return true
    })
    .catch(error => {      
     //Hata gönderme      
      dispatch(actions.catchError({ error, callType: callTypes.list }));
      return false
    });
  
};
export const getUserDetailCrud = (id) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer

     //Api işlemleri için
    .getUsersDetail(id)    
    .then(response => {
     //State güncelleme  
      dispatch(actions.userForEdit(response.data.data.users));
      return true
    })
    .catch(error => {      
     //Hata gönderme      
      dispatch(actions.catchError({ error, callType: callTypes.list }));
      return false
    });
  
};
export const addUsersCrud = (data,setAlertField) => dispatch => {  
   dispatch(actions.startCall({ callType: callTypes.action }));
   return requestFromServer    
    .addUsers(data)  
    .then(response => { 
      if(response.data.success){
        setAlertField({
          title: "Success",
          text: response.data.message,
          show: true,
          color: "green"
        })
        dispatch(actions.userAdd(response.data.data));
        return response.data.message

      }
      else{
        setAlertField({
          title: "Fail",
          text: response.data.message,
          show: true,
          color: "blue"
        })
      }
     
    })
    .catch(error => {      
     //Hata gönderme    
      dispatch(actions.catchError({ error, callType: callTypes.action }));
      return   false
      
    });
  };
export const deleteUsersCrud = (data,token) => dispatch => {
  
   dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer

     //Api işlemleri için
    .deleteUsers(data,token)    
    .then(response => {
      if(response.data.success){
        dispatch(actions.userDelete(data));
        return response.data.message 

      }
         
    
    })
    .catch(error => {      
     //Hata gönderme    
      dispatch(actions.catchError({ error, callType: callTypes.list }));
      return ResultShowModal(false,error)
    });
  
};
export const updateUserCrud = (data,token) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer

     //Api işlemleri için
    .updateUsers(data,token)    
    .then(response => {
     //State güncelleme 
     
     dispatch(actions.userUpdate(response.data.data));
    })
    .catch(error => {      
     //Hata gönderme
    //  ResultShowModal(false,error,setAlertField)
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
  
};

 function ResultShowModal(result,message,setAlertField)
{
  if(!result)
  {      
      setAlertField({
        title: "Fail",
        text: message,
        show: true,
        color: "white"
      })
      return false
  }
  else
  {
    setAlertField({
      title: "Success",
      text: message,
      show: true,
      color: "white"
    })

    return true
  }
}



 