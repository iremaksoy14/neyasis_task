import React from 'react';
import './header.css'
import logo from '../../../assets/images/find_logo.png'
import header from '../../../assets/images/header-text.png'
import home from '../../../assets/images/home.png'
import find from '../../../assets/images/find.png'
function index(props) {
    return (
        <nav  style={{ backgroundImage:`url(${home})`,backgroundRepeat:'round' }}>
         
            <div className='buttonsFrame'>
                <button>
                    Kayıt Ol
                </button>
                <button>
                    Giriş Yap
                </button>
            </div>
            <div className='centerFrame'>
                <img className='centerImageFirst' src={logo} />
                <img className='centerImageSecond' src={header} />
                <div className='searchFrame'>
                    <input placeholder='İş Ara  | İş, Şirket, Anahtar Kelime'>
                    </input>
                    <button>
                    <img src={find}/>
                    </button>
                </div>
                <div className='bottomLinkFrame'>
                    <a>Detaylı Arama</a>
                </div>
            </div>
        </nav>
    );
}

export default index;