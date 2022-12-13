import axios from "axios";
import {apiUrl} from "../../BaseUrl" 
 
 

//Api ile işlem yapmak için

export function addUsers(data) {
  

  var config = {
    method: 'post',
    url: apiUrl+'/Account/user',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+localStorage.getItem('@authToken')
    },
    data : data
  };   
  return  axios(config)   
}

export function updateUsers(data,token) {
  var config = {
    method: 'put',
    url: "",
    headers: { 
      'Authorization': 'Bearer '+localStorage.getItem('@authToken'),
      'Content-Type': 'application/json'
    },
    data : data
  }; 
   
  return axios(config)   
 }

 export function deleteUsers(data,token) {
  var config = {
    method: 'delete',
    url:"",
    headers: { 
      'Authorization': 'Bearer '+localStorage.getItem('@authToken'),
      'Content-Type': 'application/json'
    },
     
  }; 
  return axios(config)   
 }
  
export function getUsers(customerid) {
    
  var config = {
    method: 'get',
    url:"",
    headers: { 
    
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+localStorage.getItem('@authToken')
    },
     
  };   
  return axios(config)  
 }

 export function getUsersDetail(customerid) {
    
  var config = {
    method: 'get',
    url:"",
    headers: { 
      'Authorization': 'Bearer '+localStorage.getItem('@authToken'),
      'Content-Type': 'application/json'
    },
     
  };   
  
  return axios(config)  
 }
 