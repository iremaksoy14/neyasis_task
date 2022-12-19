import React from 'react';
import './profile.css'
import isveren from '../../../assets/images/isveren.png'
import ara from '../../../assets/images/ara.png'
import Link from 'next/link'
function index(props) {
    return (
        <div className='profileContainer'>
            <Link
            href={{
              pathname: '/about',
             
            }}
          >
             <article>
                <img   className='firstProfile' src={ara}></img>
            </article>
          </Link>
           
            <article>
                <img className='secondProfile' src={isveren}></img>
            </article>
        </div>
    );
}

export default index;