import axios from "axios";
 import {apiUrl} from '../../BaseUrl'
//Api ile işlem yapmak için

 export function getJobsCrud() {
  var config = {
    method: 'get',
    url: apiUrl+"/jobs",
    
      }; 
  return axios(config)   
 }
  
export function getWorksCrud() {
    
  var config = {
    method: 'get',
    url:apiUrl+"/works",
    };   
  return axios(config)  
 }
 export function getCopaniesCrud() {
    
  var config = {
    method: 'get',
    url:apiUrl+"/company",
    };   
  return axios(config)  
 }
 
 
