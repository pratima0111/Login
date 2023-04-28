import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Auth.css';

export default function Auth() {
  return (
    <div className='Auth-form-container'>
      <form className='Auth-form'>
      <div className='head'>
                <div className='alignleft'>ALREADY MEMBERS</div>
                <div className='alignright'>Need help?</div>
            </div>
        <div className='Auth-form-content'>
           
          <div className='form-group mt-3'>
            <input
              type='email'
              className='form-control mt-1'
              placeholder='Enter your email'
            />
          </div>
          <div className='form-group mt-3'>
            <input
              type='password'
              className='form-control mt-1'
              placeholder='Enter your password'
            />
          </div>
          <div className='d-grid gap-2 '>
            <button type='submit' className='btn btn-primary' size='lg'>
              SIGN IN
            </button>
          </div>
        </div>
      </form>

      <div className="textdiv">
        <div className="texta"> Don't have an account yet?</div>
        <div> <a href="#" className="textb"> Create an account </a> </div>
      </div>
    </div>
  );
}
