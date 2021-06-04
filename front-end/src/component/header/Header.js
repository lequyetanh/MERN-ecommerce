import React, {Fragment, useState, useEffect} from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as userAction  from './../../actions/userActions'
import * as typeProductAction  from './../../actions/typeProductAction'

function Header() {
  const dispatch = useDispatch();

  const userInforReducer = useSelector((state)=>state.userInfor)
  const { loadingUserInfor, userInfor, error } = userInforReducer
  // console.log(userInfor)
  const allTypeProduct = useSelector((state) => state.allTypeProduct)
  const { loadingAllTypeProduct, typeProduct, errorAllTypeProduct} = allTypeProduct;

  useEffect(() => {
    dispatch(typeProductAction.getAllTypeProduct());
    dispatch(userAction.getUserFromToken());
  }, [])

  return (
    <Fragment>
      	<div class="agile-main-top">
          <div class="container-fluid">
            <div class="row main-top-w3l py-2">
              <div class="col-lg-4 header-most-top">
                <p class="text-white text-lg-left text-center">Offer Zone Top Deals & Discounts
                  <i class="fas fa-shopping-cart ml-1"></i>
                </p>
              </div>
              <div class="col-lg-8 header-right mt-lg-0 mt-2">
                <ul>
                  <li class="text-center border-right text-white">
                    <a class="play-icon popup-with-zoom-anim text-white" href="#small-dialog1">
                      <i class="fas fa-map-marker mr-2"></i>Select Location</a>
                  </li>
                  <li class="text-center border-right text-white">
                    <a href="#" data-toggle="modal" data-target="#exampleModal" class="text-white">
                      <i class="fas fa-truck mr-2"></i>Track Order</a>
                  </li>
                  <li class="text-center border-right text-white">
                    <i class="fas fa-phone mr-2"></i> 001 234 5678
                  </li>
                  <li class="text-center border-right text-white">
                    <a href="#" data-toggle="modal" data-target="#exampleModal" class="text-white">
                      <i class="fas fa-sign-in-alt mr-2"></i> Log In </a>
                  </li>
                  <li class="text-center text-white">
                    <a href="#" data-toggle="modal" data-target="#exampleModal2" class="text-white">
                      <i class="fas fa-sign-out-alt mr-2"></i>Register </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default Header;
