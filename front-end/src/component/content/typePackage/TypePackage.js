import React, {Fragment, useState, useEffect} from 'react';
import './TypePackage.scss';
import {Link, useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import * as productAction  from './../../../actions/productAction'

function TypePackage(props) {
  const dispatch = useDispatch();

  const nameTypeProduct = useParams().typeProduct;
  // console.log(nameTypeProduct);
  const productFromTypeProduct = useSelector((state) => state.productFromTypeProduct)
  // console.log(productFromTypeProduct)
  const { loading, product, error} = productFromTypeProduct;

  useEffect(() => {
    dispatch(productAction.getProductsFromTypeProduct(nameTypeProduct))
  }, [])

  return (
    <Fragment>
      	<div className="container">
          <div id="content" className="space-top-none">
            <div className="main-content">
              <div className="space60">&nbsp;</div>
              <div className="row">
                <div className="col-sm-3">
                  <ul className="aside-menu">
                    <li><a href="#">Typography</a></li>
                    <li><a href="#">Buttons</a></li>
                    <li><a href="#">Dividers</a></li>
                    <li><a href="#">Columns</a></li>
                    <li><a href="#">Icon box</a></li>
                    <li><a href="#">Notifications</a></li>
                    <li><a href="#">Progress bars and Skill meter</a></li>
                    <li><a href="#">Tabs</a></li>
                    <li><a href="#">Testimonial</a></li>
                    <li><a href="#">Video</a></li>
                    <li><a href="#">Social icons</a></li>
                    <li><a href="#">Carousel sliders</a></li>
                    <li><a href="#">Custom List</a></li>
                    <li><a href="#">Image frames &amp; gallery</a></li>
                    <li><a href="#">Google Maps</a></li>
                    <li><a href="#">Accordion and Toggles</a></li>
                    <li className="is-active"><a href="#">Custom callout box</a></li>
                    <li><a href="#">Page section</a></li>
                    <li><a href="#">Mini callout box</a></li>
                    <li><a href="#">Content box</a></li>
                    <li><a href="#">Computer sliders</a></li>
                    <li><a href="#">Pricing &amp; Data tables</a></li>
                    <li><a href="#">Process Builders</a></li>
                  </ul>
                </div>
                <div className="col-sm-9">
                  <div className="beta-products-list">
                    <h4>{nameTypeProduct}</h4>
                    <div className="beta-products-details">
                      <p className="pull-left">{product && product.length} Found</p>
                      <div className="clearfix"></div>
                    </div>

                    <div className="row">

                      { product ? product.map(product => (
                        <div className="col-sm-4">
                          <div className="single-item">
                            <div className="single-item-header">
                              <Link className="beta-btn primary" to={`/product/${product.id}`}><img src={product.image[0]} alt="" /></Link>
                            </div>
                            <div className="single-item-body">
                              <p className="single-item-title">{product.name}</p>
                              <p className="single-item-price">
                                <span>{product.new_price}</span>
                              </p>
                            </div>
                            <div className="single-item-caption">
                              <a className="add-to-cart pull-left" href="shopping_cart.html"><i className="fa fa-shopping-cart"></i></a>
                              <Link className="beta-btn primary" to={`/product/${product.id}`}>Details <i className="fa fa-chevron-right"></i></Link>
                              <div className="clearfix"></div>
                            </div>
                          </div>
                        </div>
                      )) : 
                      <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>}
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
                      <div className="col-sm-4">
                        <div className="single-item">
                          <div className="single-item-header">
                            <a href="product.html"><img src="/assets/dest/images/products/1.jpg" alt="" /></a>
                          </div>
                          <div className="single-item-body">
                            <p className="single-item-title">Sample Woman Top</p>
                            <p className="single-item-price">
                              <span>$34.55</span>
                            </p>
                          </div>
                          <div className="single-item-caption">
                            <a className="add-to-cart pull-left" href="shopping_cart.html"><i className="fa fa-shopping-cart"></i></a>
                            <a className="beta-btn primary" href="product.html">Details <i className="fa fa-chevron-right"></i></a>
                            <div className="clearfix"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="single-item">
                          <div className="single-item-header">
                            <a href="product.html"><img src="/assets/dest/images/products/1.jpg" alt="" /></a>
                          </div>
                          <div className="single-item-body">
                            <p className="single-item-title">Sample Woman Top</p>
                            <p className="single-item-price">
                              <span>$34.55</span>
                            </p>
                          </div>
                          <div className="single-item-caption">
                            <a className="add-to-cart pull-left" href="shopping_cart.html"><i className="fa fa-shopping-cart"></i></a>
                            <a className="beta-btn primary" href="product.html">Details <i className="fa fa-chevron-right"></i></a>
                            <div className="clearfix"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="single-item">
                          <div className="single-item-header">
                            <a href="product.html"><img src="/assets/dest/images/products/1.jpg" alt="" /></a>
                          </div>
                          <div className="single-item-body">
                            <p className="single-item-title">Sample Woman Top</p>
                            <p className="single-item-price">
                              <span>$34.55</span>
                            </p>
                          </div>
                          <div className="single-item-caption">
                            <a className="add-to-cart pull-left" href="shopping_cart.html"><i className="fa fa-shopping-cart"></i></a>
                            <a className="beta-btn primary" href="product.html">Details <i className="fa fa-chevron-right"></i></a>
                            <div className="clearfix"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space40">&nbsp;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default TypePackage;
