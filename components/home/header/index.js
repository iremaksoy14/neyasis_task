import React from 'react';
import './header.css'
import logo from '../../../assets/images/find_logo.png'
import header from '../../../assets/images/header-text.png'

function index(props) {
    return (
        <nav>
            <div className='buttonsFrame'>
                <button>
                    Kayıt Ol
                </button>
                <button>
                    Giriş Yap
                </button>
            </div>
            <div className='centerFrame'>
                <img src={logo} />
                <img src={header} />
                <div className='searchFrame'>
                    <input>
                    </input>
                    <button>
                        find
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