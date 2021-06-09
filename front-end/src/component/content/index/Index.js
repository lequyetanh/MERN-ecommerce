import React, {Fragment, useState, useEffect} from 'react';
import styles from './Index.scss';
import * as productAction from './../../../actions/productAction'
import * as userAction from './../../../actions/userActions'
import {Link} from 'react-router-dom'
import Slide from './slide/Slide'
import {useDispatch, useSelector} from 'react-redux';

function Index() {
  window.scrollTo({ left: 0, top: 0 });
  const dispatch = useDispatch();

  const newProduct = useSelector((state) => state.newProduct);
  const userInforReducer = useSelector((state) => state.userInfor);
  const topProductReducer = useSelector(state => state.topProduct);
  const allTypeProductReducer = useSelector(state => state.allTypeProduct);
  // console.log(newProduct)
  const {loading, product, error} = newProduct;
  const {loading: loadingTopProduct, product: topProduct, error: errorTopProduct} = topProductReducer;
  const {loading: loadingUserInfor, userInfor, error: errorUserInfor} = userInforReducer
  const {loading: loadingTypeProduct, typeProduct, error: errorTypeProduct} = allTypeProductReducer

  useEffect(() => {
    dispatch(productAction.get8NewProduct());
    dispatch(productAction.get8TopProduct());
  }, [])
  // console.log(phimle)

  const addProductToCart = (product) => {
    if (!userInfor) {
      alert("Bạn phải đăng nhập để sử dụng chức năng này");
      return false;
    }
    let equal = false;
    // event.preventDefault();
    userInfor
      .user
      .package
      .map(itemPackage => {
        if (itemPackage.id == product.id) {
          equal = true;
          alert("Bạn đã có sản phẩm trong giỏ hàng");
        }
      })
    if (equal == true) {
      return false;
    } else {
      userInfor
        .user
        .package
        .push({
          ...product,
          quatity: 1
        });
      // console.log(id, product) console.log(userInfor.user.package)
      dispatch(userAction.updateUser(userInfor.user.id, userInfor.user));
    }
  }

  return (
    <Fragment>
      <Slide></Slide>
      <div className="ads-grid py-sm-5 py-4">
        <div className="container py-xl-4 py-lg-2">
          <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
            <span>O</span>ur
            <span>N</span>ew
            <span>P</span>roducts</h3>
          <div className="row">
            <div className="agileinfo-ads-display col-lg-9">
              <div className="wrapper">
                <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                  <h3 className="heading-tittle text-center font-italic">New Product</h3>
                  <div className="row">
                    {product && product.map(product => (
                      <div className="col-md-4 product-men mt-5">
                        <div className="men-pro-item simpleCart_shelfItem">
                          <div className="men-thumb-item text-center">
                            <Link to={`/productItem/${product.id}`}>
                              <img src={product.image[0]} alt={product.name}/>
                              <div className="men-cart-pro">
                                <div className="inner-men-cart-pro">
                                  <div className="link-product-add-cart">Quick View</div>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <span className="product-new-top">New</span>
                          <div className="item-info-product text-center border-top mt-4">
                            <h4 className="pt-1 name-product">
                              <Link to={`/productItem/${product.id}`}>{product.name}</Link>
                            </h4>
                            <div className="info-product-price my-2">
                              <span className="item_price">{product.old_price}
                                VND</span>
                              <del className="fs-13">{product.new_price}
                                VND</del>
                            </div>
                            <div
                              className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button btn"
                                onClick={() => addProductToCart(product)}/>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                  <h3 className="heading-tittle text-center font-italic">Top Product</h3>
                  <div className="row">
                    {topProduct && topProduct.map(product => (
                      <div className="col-md-4 product-men mt-5">
                        <div className="men-pro-item simpleCart_shelfItem">
                          <div className="men-thumb-item text-center">
                            <Link to={`/productItem/${product.id}`}>
                              <img src={product.image[0]} alt={product.name}/>
                              <div className="men-cart-pro">
                                <div className="inner-men-cart-pro">
                                  <div className="link-product-add-cart">Quick View</div>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div className="item-info-product text-center border-top mt-4">
                            <h4 className="pt-1 name-product">
                              <a href="single.html">{product.name}</a>
                            </h4>
                            <div className="info-product-price my-2">
                              <span className="item_price">{product.old_price}
                                VND</span>
                              <del className="fs-13">{product.new_price}
                                VND</del>
                            </div>
                            <div
                              className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button btn"
                                onClick={() => addProductToCart(product)}/>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="product-sec1 product-sec2 px-sm-5 px-3">
                  <div className="row">
                    <h3 className="col-md-4 effect-bg">Summer Carnival</h3>
                    <p className="w3l-nut-middle">Get Extra 10% Off</p>
                    <div className="col-md-8 bg-right-nut">
                      <img src="/assets/images/image1.png" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mt-lg-0 mt-4 p-lg-0">
              <div className="side-bar p-sm-4 p-3">
                <div className="search-hotel border-bottom py-2">
                  <h3 className="agileits-sear-head mb-3">Search Here..</h3>
                  <form action="#" method="post">
                    <input type="search" placeholder="Product name..." name="search" required=""/>
                    <input type="submit" value=" "/>
                  </form>
                </div>
                <div className="range border-bottom py-2">
                  <h3 className="agileits-sear-head mb-3">Price</h3>
                  <div className="w3l-range">
                    <ul>
                      <li>
                        <a href="#">Under $1,000</a>
                      </li>
                      <li className="my-1">
                        <a href="#">$1,000 - $5,000</a>
                      </li>
                      <li>
                        <a href="#">$5,000 - $10,000</a>
                      </li>
                      <li className="my-1">
                        <a href="#">$10,000 - $20,000</a>
                      </li>
                      <li>
                        <a href="#">$20,000 $30,000</a>
                      </li>
                      <li className="mt-1">
                        <a href="#">Over $30,000</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="left-side border-bottom py-2">
                  <h3 className="agileits-sear-head mb-3">Discount</h3>
                  <ul>
                    <li>
                      <input type="checkbox" className="checked"/>
                      <span className="span">5% or More</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked"/>
                      <span className="span">10% or More</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked"/>
                      <span className="span">20% or More</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked"/>
                      <span className="span">30% or More</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked"/>
                      <span className="span">50% or More</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked"/>
                      <span className="span">60% or More</span>
                    </li>
                  </ul>
                </div>
                <div className="customer-rev border-bottom left-side py-2">
                  <h3 className="agileits-sear-head mb-3">Customer Review</h3>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span>5.0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span>4.0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half"></i>
                        <span>3.5</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span>3.0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half"></i>
                        <span>2.5</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="left-side border-bottom py-2">
                  <h3 className="agileits-sear-head mb-3">Electronics</h3>
                  <ul>

                      {typeProduct && typeProduct.map(typeProductItem => (
                        <li key={typeProductItem.id}>
                          <Link to={`/typeProduct/${typeProductItem.name}/1/next/0`}>
                            <span className="span">{typeProductItem.name}</span>
                          </Link>
                        </li>
                      ))}

                  </ul>
                </div>
                <div className="left-side border-bottom py-2">
                  <h3 className="agileits-sear-head mb-3">Cash On Delivery</h3>
                  <ul>
                    <li>
                      <input type="checkbox" className="checked"/>
                      <span className="span">Eligible for Cash On Delivery</span>
                    </li>
                  </ul>
                </div>
                <div className="left-side border-bottom py-2">
                  <h3 className="agileits-sear-head mb-3">New Arrivals</h3>
                  <ul>
                    <li>
                      <input type="checkbox" className="checked"/>
                      <span className="span">Last 30 days</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked"/>
                      <span className="span">Last 90 days</span>
                    </li>
                  </ul>
                </div>
                <div className="f-grid py-2">
                  <h3 className="agileits-sear-head mb-3">Best Seller</h3>
                  <div className="box-scroll">
                    <div className="scroll">
                      <div className="row">
                        <div className="col-lg-3 col-sm-2 col-3 left-mar">
                          <img src="/assets/images/k1.jpg" alt="" className="img-fluid"/>
                        </div>
                        <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                          <a href="">Samsung Galaxy On7 Prime (Gold, 4GB RAM + 64GB Memory)</a>
                          <a href="" className="price-mar mt-2">$12,990.00</a>
                        </div>
                      </div>
                      <div className="row my-4">
                        <div className="col-lg-3 col-sm-2 col-3 left-mar">
                          <img src="/assets/images/k2.jpg" alt="" className="img-fluid"/>
                        </div>
                        <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                          <a href="">Haier 195 L 4 Star Direct-Cool Single Door Refrigerator</a>
                          <a href="" className="price-mar mt-2">$12,499.00</a>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-sm-2 col-3 left-mar">
                          <img src="/assets/images/k3.jpg" alt="" className="img-fluid"/>
                        </div>
                        <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                          <a href="">Ambrane 13000 mAh Power Bank (P-1310 Premium)</a>
                          <a href="" className="price-mar mt-2">$1,199.00
                          </a>
                        </div>
                      </div>
                    </div>
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
