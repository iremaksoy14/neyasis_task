import React from 'react';
import './search.css'
import find from '../../../assets/images/find.png'
import inputSeach from '../../../assets/images/input-search.png'
function index(props) {
    return (
        <div className='searchFrame'>
            <form className='nosubmit'>
            <input className='nosubmit' placeholder='İş Ara | İş, Şirket, Anathar Kelime'></input>
            </form>
           
            <button><img src={find}/></button>
        </div>
    );
}

export default index;