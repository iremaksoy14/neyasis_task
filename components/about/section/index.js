import React from 'react';
import LeftSection from './LeftSection/index'
import RightSection from './RightSection/index'
import './index.css'

function index(props) {
    return (
        <div className='sectionContainer'>
            <LeftSection />
            <RightSection />
            
        </div>

    );
}

export default index;