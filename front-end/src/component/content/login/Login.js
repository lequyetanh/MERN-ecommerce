import React, {Fragment, useState, useEffect} from 'react';
import './Login.scss';
import {Link, Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import * as userAction  from './../../../actions/userActions'

function Login() {

  let history = useHistory()
  const dispatch = useDispatch();

  const [email, setEmail] = useState('lequyetanh@gmail.com');
  const [password, setPassword] = useState('12345678');
  const userLogin = useSelector((state) => state.userInfor)
  const { loading, userInfor, error} = userLogin
  // console.log(userLogin)


  useEffect(() => {
    dispatch(userAction.getUserFromToken());
  }, [])
  
  // cho thằng này lên trước useEffect thì bị lỗi
  if(userInfor){
    // console.log(userLogin)
    return <Redirect to='/'/>
  }

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(email, password)
    dispatch(userAction.userLogIn({email: email, password: password}))
    //   if(response.data){
    //     // console.log(userLogin)
        return history.push("/")
    //   }
    // });
  };

  return (
    <Fragment>
      	<div className="container">
          <div id="content">
            
            <form onSubmit={submitHandler} className="beta-form-checkout">
              <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                  <h4>Đăng nhập</h4>
                  <div className="space20">&nbsp;</div>

                  
                  <div className="form-block">
                    <label for="email">Email address*</label>
                    <input type="email" id="email" value={email}  required onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                  <div className="form-block">
                    <label for="password">Password*</label>
                    <input type="text" value="12345678" id={password} required onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                  <div className="form-block">
                    <button type="submit" className="btn btn-primary">Login</button>
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

export default Login;
