import React from 'react';
import { job } from '../../../data/job';
import './highlights.css'
function index(props) {
    return (
        <div className='highlightsContainer'>
            <label className='titleTxt'>
                Öne çıkan iş ilanları
            </label>
            <div>
                {
                    job.map((item,index) => {
                        return (
                            <article style={{borderRightStyle:index!=job.length-1 ? 'solid':'none'}}>
                                <span>
                                    {item.name}
                                </span>
                                <label>
                                    {item.company}
                                </label>
                                <img src={item.img}>
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