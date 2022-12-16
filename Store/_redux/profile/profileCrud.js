import axios from "axios";
import {apiUrl} from "../../BaseUrl" 
 
 

//Api ile işlem yapmak için

export function getUsersCrud() {
  

  var config = {
    method: 'get',
    url: "http://localhost:3000/works",
   
  };   
  return  axios(config)   
}


export function addUser(data) {
  var config = {
    method: 'post',
    url: "",
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };  
  return  axios(config)   
}

export function updateUuser(data) {
  var config = {
    method: 'put',
    url: "",
    headers: { 
     
    },
    data : data
  }; 
   
  return axios(config)   
 }

 export function deleteUsers(data) {
  var config = {
    method: 'delete',
    url:"",
    
     
  }; 
  return axios(config)   
 }