import React from 'react';
import './profile.css'
import isveren from '../../../assets/images/isveren.png'
import ara from '../../../assets/images/ara.png'
function index(props) {
    return (
        <div className='profileContainer'>
            <article>
                <img  className='firstProfile' src={ara}></img>
            </article>
            <article>
                <img className='secondProfile' src={isveren}></img>
            </article>
        </div>
    );
}

export default index;