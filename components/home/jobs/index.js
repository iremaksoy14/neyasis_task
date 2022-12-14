import React from 'react'
import './jobs.css'
import {job} from '../../../data/job'
import Slider from './Slider'

export default function index() {
  return (
    <div class="Rectangle">
{/* {
    job.map((item,index)=>(
        <div className='jobs_container'  key={index}  >
           <span class="IT-Mdr">{item.name}</span>
           <span class="Bosch"> {item.company}</span>
            <img width={item.width} height={item.height} src={item.img}/>

        </div>
        
    ))
} */}
<Slider/>

    </div>
  )
}
