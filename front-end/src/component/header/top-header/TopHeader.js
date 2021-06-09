// @flow 
import React, {Fragment, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as userAction  from './../../../actions/userActions'
import * as typeProductAction  from './../../../actions/typeProductAction'

export const TopHeader = () => {

  const dispatch = useDispatch();
  
  const userInforReducer = useSelector((state)=>state.userInfor)
  const { loadingUserInfor, userInfor, errorInfor } = userInforReducer
  // console.log(userInfor)

  useEffect(() => {
    dispatch(userAction.getUserFromToken());
  }, [])

  const logOut = () => {
    dispatch(userAction.userLogOut())
  }

  return (
    <Fragment>
      	<div className="agile-main-top">
          <div className="container-fluid">
            <div className="row main-top-w3l py-2">
              <div className="col-lg-4 header-most-top">
                <p className="text-white text-lg-left text-center">Offer Zone Top Deals & Discounts
                  <i className="fas fa-shopping-cart ml-1"></i>
                </p>
              </div>
              <div className="col-lg-8 header-right mt-lg-0 mt-2">
                <ul>
                  <li className="text-center border-right text-white">
                    <a className="play-icon popup-with-zoom-anim text-white" href="#small-dialog1">
                      <i className="fas fa-map-marker mr-2"></i>Select Location</a>
                  </li>
                  <li className="text-center border-right text-white">
                    <a href="#" data-toggle="modal" data-target="#exampleModal" className="text-white">
                      <i className="fas fa-truck mr-2"></i>Track Order</a>
                  </li>
                  <li className="text-center border-right text-white">
                    <i className="fas fa-phone mr-2"></i> 001 234 5678
                  </li>

                  { userInfor ? 
                    <Fragment>
                    <li className="text-center border-right text-white">
                        <div data-toggle="modal" data-target="#exampleModal" className="text-white">
                          <i className="fas fa-sign-in-alt mr-2"></i> {userInfor.user.name} </div>
                      </li>
                      <li className="text-center text-white pointer">
                        <div onClick={() => logOut()} data-toggle="modal" data-target="#exampleModal2" className="text-white">
                          <i className="fas fa-sign-out-alt mr-2"></i>Log Out</div>
                      </li>
                    </Fragment>
                    :
                  <Fragment>
                      <li className="text-center border-right text-white">
                        <Link to="/login" data-toggle="modal" data-target="#exampleModal" className="text-white">
                          <i className="fas fa-sign-in-alt mr-2"></i> Log In </Link>
                      </li>
                      <li className="text-center text-white">
                        <Link to="/signin" data-toggle="modal" data-target="#exampleModal2" className="text-white">
                          <i className="fas fa-sign-out-alt mr-2"></i>Register </Link>
                      </li>
                  </Fragment>
                  }

                </ul>
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  );
};