import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import './jobs.css'

import Slider from './Slider'

import* as  homeAction from '../../../Store/_redux/home/homeAction'
export default function index (){
  const dispatch=useDispatch()
const jobsData =useSelector((state)=>state.home.jobs)
  useEffect(()=>{
    dispatch(homeAction.getJobs())
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
  },[])

console.log(jobsData)
  return(
    <div className='jobContainer'>
      <label>
        Popüler Aramalar
      </label>
      <div className='scrollmenu'>
        {
          jobsData.map((item)=>{
            return(
              <button>
                  {item.title}
              </button>
            )
          })
        }
      </div>
    </div>
  )
}
