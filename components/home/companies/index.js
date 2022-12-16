import React ,{useEffect}from 'react'
import './companies.css'
import {useSelector,useDispatch} from 'react-redux'
import  * as homeAction from '../../../Store/_redux/home/homeAction';
import {company} from '../../../data/company'

export default function index() {
  const dispatch=useDispatch()
  
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
