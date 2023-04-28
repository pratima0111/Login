import React from 'react';
import './Login.css';
import Capture from './Capture.PNG';
import Auth from './Auth';

function Login(){
    return(
        <div className='outer-div'>
            <div className='inner-div'>
                <div className='left'>
                    <img src={Capture} alt='display'/>
                </div>
                <div className='right'>
                    <Auth/>
                </div>
            </div>
        </div>
    )
}


export default Login;