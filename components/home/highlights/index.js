import React,{useEffect,useState} from 'react';
import { job } from '../../../data/job';
import './highlights.css'
import * as homeAction from '../../../Store/_redux/home/homeAction'
import {useSelector,useDispatch} from 'react-redux'
function index(props) {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(homeAction.getCompanies())
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    },[])
    const companies=useSelector((state)=>state.home.companies)

    console.log(companies)
    return (
        <div className='highlightsContainer'>
            <label className='titleTxt'>
                Öne çıkan iş ilanları
            </label>
            <div>
                {
                    job.map((item,index) => {
                        return (
                            <article key={item.id} style={{borderRightStyle:index!=job.length-1 ? 'solid':'none'}}>
                                <span >
                                    {item.name}
                                </span>
                                <label>
                                    {item.company}
                                </label>
                                <img width={item.width} height={item.height} src={item.img}>
                                </img>
                            </article>
                        )
                    })
                }

            </div>
        </div>
    );
}

export default index;