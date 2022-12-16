import React,{useEffect} from 'react';

import { useDispatch,useSelector } from 'react-redux';
import * as homeAction from '../../../Store/_redux/home/homeAction'

import './postingjobs.css'
function index(props) {
    const dispatch=useDispatch()
    const worksData =useSelector((state)=>state.home.works)
    // const works=useSelector((state)=>state.home.works)
   useEffect(()=>{
    dispatch(homeAction.getWorks())
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
   },[])
   console.log(worksData)
    return (
        <div className='postingContainer'>
            <h>Sizin için iş ilanları</h>
            <div>
                {
                    worksData.map((item,index)=>{
                        return(
                            <article key={index}>
                                <label>{item.category}</label>
                                {
                                    item.content.map((content)=>{
                                        return(
                                            <label>
                                                {content.name}
                                            </label>
                                        )
                                    })
                                }
                            </article>
                        )
                    })
                }
               
            </div>

        </div>
    );
}

export default index;