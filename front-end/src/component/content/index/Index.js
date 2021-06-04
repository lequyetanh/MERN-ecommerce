import React, {Fragment, useState, useEffect} from 'react';
import styles from './Index.scss';
import * as productAction from './../../../actions/productAction'
import * as userAction from './../../../actions/userActions'
import {Link} from 'react-router-dom'
import Slide from './slide/Slide'
import { useDispatch , useSelector} from 'react-redux';

function Index() {
  const dispatch = useDispatch();

  const newProduct = useSelector((state)=>state.newProduct);
  const userInforReducer = useSelector((state) => state.userInfor)
  // console.log(newProduct)
  const {loading, product, error} = newProduct;
  const { loadingUserInfor, userInfor, errorUserInfor } = userInforReducer

  useEffect(() => {
    dispatch(productAction.get8NewProduct());
    dispatch(userAction.getUserFromToken())
  }, [])
  // console.log(phimle)

  const addProductToCart = (product) => {
    if(!userInfor){
      alert("Bạn phải đăng nhập để sử dụng chức năng này");
      return false;
    }
    let equal= false;
    // event.preventDefault();
    userInfor.user.package.map(itemPackage => {
      if(itemPackage.id == product.id){
        equal= true;
        alert("Bạn đã có sản phẩm trong giỏ hàng");
      }
    })
    if(equal == true){
      return false;
    }else{
      userInfor.user.package.push({...product, quatity: 1});
      // console.log(id, product)
      // console.log(userInfor.user.package)
      dispatch(userAction.updateUser(userInfor.user.id, userInfor.user));
    }
  }

  return (
    <Fragment>
      <Slide></Slide>
      <div className="container">
        <div id="content" className="space-top-none">
          <div className="main-content">
            <div className="space60">&nbsp;</div>
            <div className="row">
              <div className="col-sm-12">
                <div className="beta-products-list">
                  <h4>New Products</h4>
                  <div className="beta-products-details">
                    <p className="pull-left">438 styles found</p>
                    <div className="clearfix"></div>
                  </div>

                  <div className="row">
                    { product && product.map(item => (
                      <Link to={`/productItem/${item.id}`} key ={item.id} className="col-sm-3">
                        <div className="single-item">
                          <div className="single-item-header">
                            <a><img src={item.image[0]} alt=""/></a>
                          </div>
                          <div className="single-item-body">
                            <p className="single-item-title">{item.name}</p>
                            <p className="single-item-price">
                              <span>{item.new_price}</span>
                            </p>
                          </div>
                          <div className="single-item-caption">
                           {
                             userInfor &&  
                             <a className="add-to-cart pull-left" onClick={() => addProductToCart(item)}>
                                <i className="fa fa-shopping-cart"></i>
                              </a>
                           }
                            <a className="beta-btn primary">Details
                              <i className="fa fa-chevron-right"></i>
                            </a>
                            <div className="clearfix"></div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space50">&nbsp;</div>

                <div className="beta-products-list">
                  <h4>Top Products</h4>
                  <div className="beta-products-details">
                    <p className="pull-left">438 styles found</p>
                    <div className="clearfix"></div>
                  </div>
                  <div className="row">
                  { product && product.map(item => (
                      <Link to={`/packageItem/${item.id}`} key ={item.id} className="col-sm-3">
                        <div className="single-item">
                          <div className="single-item-header">
                            <a><img src={item.image[0]} alt=""/></a>
                          </div>
                          <div className="single-item-body">
                            <p className="single-item-title">{item.name}</p>
                            <p className="single-item-price">
                              <span>{item.new_price}</span>
                            </p>
                          </div>
                          <div className="single-item-caption">
                            <a className="add-to-cart pull-left">
                              <i className="fa fa-shopping-cart"></i>
                            </a>
                            <a className="beta-btn primary">Details
                              <i className="fa fa-chevron-right"></i>
                            </a>
                            <div className="clearfix"></div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Index;
