import React from 'react'
import './companies.css'
import {company} from '../../../data/company'

export default function index() {
  return (
    <div className='Mask'>
         <div className='images_container'>
         {
           
           company.map((item,index)=>
         
             <img className='images_child' key={item.index}  width={item.width} height={item.height} src={item.img}/>
           )
       }
         </div>
       
    </div>
  )
}
