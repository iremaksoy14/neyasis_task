import axios from "axios";
 
//Api ile işlem yapmak için

 export function getJobs() {
  var config = {
    method: 'get',
    url:"",
    headers: { 
     
      'Content-Type': 'application/json'
    },
     
  }; 
  return axios(config)   
 }
  
export function getCompanies() {
    
  var config = {
    method: 'get',
    url:"",
    headers: { 
    
      'Content-Type': 'application/json',
    
    },
     
  };   
  return axios(config)  
 }

