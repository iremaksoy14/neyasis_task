import React from 'react';
import { works } from '../../../data/works';
import './postingjobs.css'
function index(props) {
    return (
        <div className='postingContainer'>
            <h>Sizin için iş ilanları</h>
            <div>
                {
                    works.map((item)=>{
                        return(
                            <article>
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