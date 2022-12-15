import React from 'react'
import './jobs.css'
import {job} from '../../../data/job'
import Slider from './Slider'
import { jobs } from '../../../data/jobsData'
export default function index (){
  
  return(
    <div className='jobContainer'>
      <label>
        Popüler Aramalar
      </label>
      <div>
        {
          jobs.map((item)=>{
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
