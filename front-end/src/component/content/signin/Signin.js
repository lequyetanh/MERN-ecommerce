import React, {Fragment, useState, useEffect} from 'react';
// import * as service from './../../services/dataService';
import './Signin.scss';
import {Link} from 'react-router-dom';

function Signin() {

  return (
    <Fragment>
      	<div className="container">
          <div id="content">
            
            <form method="post" className="beta-form-checkout">
              <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                  <h4>Đăng kí</h4>
                  <div className="space20">&nbsp;</div>

                  
                  <div className="form-block">
                    <label for="email">Email address*</label>
                    <input type="email" id="email" required />
                  </div>

                  <div className="form-block">
                    <label for="your_last_name">Fullname*</label>
                    <input type="text" id="your_last_name" required />
                  </div>

                  <div className="form-block">
                    <label for="adress">Address*</label>
                    <input type="text" id="adress" value="Street Address" required />
                  </div>


                  <div className="form-block">
                    <label for="phone">Phone*</label>
                    <input type="text" id="phone" required />
                  </div>
                  <div className="form-block">
                    <label for="phone">Password*</label>
                    <input type="text" id="phone" required />
                  </div>
                  <div className="form-block">
                    <label for="phone">Re password*</label>
                    <input type="text" id="phone" required />
                  </div>
                  <div className="form-block">
                    <button type="submit" className="btn btn-primary">Register</button>
                  </div>
                </div>
                <div className="col-sm-3"></div>
              </div>
            </form>
          </div>
        </div>
    </Fragment>
  );
}

export default Signin;
