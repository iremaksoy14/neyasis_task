import React from 'react';
import './header.css'
import headerphoto from '../../../assets/images/find_logo.png'
function index(props) {
    const user = {
        name:"Eray Karakullukçu",
        job : "Findtalent'de kurucu"
    }
    return (
        <header>
            <div>
                <img src={headerphoto}/>
                <article>
                    <div className='profileInfo'>
                        <span>
                            {user.name}
                        </span>
                        <span>
                            {user.job}
                        </span>
                    </div>
                    <img/>
                </article>
            </div>
        </header>
    );
}

export default index;