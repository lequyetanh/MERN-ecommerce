import React, {Fragment, useState, useEffect} from 'react';
import './Checkout.scss';
import {Link, Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import * as userAction  from './../../../actions/userActions'

function Checkout() {

  const dispatch = useDispatch();
  let history = useHistory();

  let userInforReducer = useSelector((state) => state.userInfor)
  const { loading, userInfor, error } = userInforReducer

  useEffect(()=>{
    dispatch(userAction.getUserFromToken())
  }, [])

  return (
    <Fragment>
      <div className="container">
        <div id="content">

          { userInfor ?
             <form action="#" method="post" className="beta-form-checkout">
              <div className="row">
                <div className="col-sm-6">
                  <h4>Đặt hàng</h4>
                  <div className="space20">&nbsp;</div>
                  <div className="form-block">
                    <label for="name">Họ tên*</label>
                    <input type="text" id="name" placeholder={userInfor.user.name} required/>
                  </div>
                  <div className="form-block">
                    <label>Giới tính
                    </label>
                    <input
                      id="gender"
                      type="radio"
                      className="input-radio"
                      name="gender"
                      value="nam"
                      checked="checked"
                      style={{
                      width: "10%"
                    }}/>
                    <span style={{marginRight: "10%"}}>Nam</span>
                    <input
                      id="gender"
                      type="radio"
                      className="input-radio"
                      name="gender"
                      value="nữ"
                      style={{
                      width: "10%"
                    }}/>
                    <span>Nữ</span>
  
                  </div>
  
                  <div className="form-block">
                    <label for="email">Email*</label>
                    <input type="email" id="email" required placeholder={userInfor.user.email}/>
                  </div>
  
                  <div className="form-block">
                    <label for="adress">Địa chỉ*</label>
                    <input type="text" id="adress" placeholder="Street Address" required/>
                  </div>
  
                  <div className="form-block">
                    <label for="phone">Điện thoại*</label>
                    <input type="text" id="phone" required placeholder={userInfor.user.phone_number}/>
                  </div>
  
                  <div className="form-block">
                    <label for="notes">Ghi chú</label>
                    <textarea id="notes"></textarea>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="your-order">
                    <div className="your-order-head">
                      <h5>Đơn hàng của bạn</h5>
                    </div>
                    <div className="your-order-body" style={{padding: "0px 10px"}}>
                      <div className="your-order-item">
                        <div>
                          <div className="media">
                            <img
                              width="25%"
                              src="/assets/dest/images/shoping1.jpg"
                              alt=""
                              className="pull-left"/>
                            <div className="media-body">
                              <p className="font-large">Men's Belt</p>
                              <span className="color-gray your-order-info">Color: Red</span>
                              <span className="color-gray your-order-info">Size: M</span>
                              <span className="color-gray your-order-info">Qty: 1</span>
                            </div>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                      <div className="your-order-item">
                        <div className="pull-left">
                          <p className="your-order-f18">Tổng tiền:</p>
                        </div>
                        <div className="pull-right">
                          <h5 className="color-black">$235.00</h5>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                    <div className="your-order-head">
                      <h5>Hình thức thanh toán</h5>
                    </div>
  
                    <div className="your-order-body">
                      <ul className="payment_methods methods">
                        <li className="payment_method_bacs">
                          <input
                            id="payment_method_bacs"
                            type="radio"
                            className="input-radio"
                            name="payment_method"
                            value="COD"
                            checked="checked"
                            data-order_button_text=""/>
                          <label for="payment_method_bacs">Thanh toán khi nhận hàng
                          </label>
                          <div
                            className="payment_box payment_method_bacs"
                            style={{
                            display: "block"
                          }}>
                            Cửa hàng sẽ gửi hàng đến địa chỉ của bạn, bạn xem hàng rồi thanh toán tiền cho
                            nhân viên giao hàng
                          </div>
                        </li>
  
                        <li className="payment_method_cheque">
                          <input
                            id="payment_method_cheque"
                            type="radio"
                            className="input-radio"
                            name="payment_method"
                            value="ATM"
                            data-order_button_text=""/>
                          <label for="payment_method_cheque">Chuyển khoản
                          </label>
                          <div
                            className="payment_box payment_method_cheque"
                            style={{
                              display: " none"
                            }}>
                            Chuyển tiền đến tài khoản sau:
                            <br/>- Số tài khoản: 123 456 789
                            <br/>- Chủ TK: Nguyễn A
                            <br/>- Ngân hàng ACB, Chi nhánh TPHCM
                          </div>
                        </li>
  
                      </ul>
                    </div>
  
                    <div className="text-center">
                      <a className="beta-btn primary" href="#">Đặt hàng
                        <i className="fa fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            :
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          }
        </div>
      </div>
    </Fragment>
  );
}

export default Checkout;
