import React, {Fragment, useState, useEffect} from 'react';
import './TypePackage.scss';
import {Link, useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import * as productAction  from './../../../actions/productAction'
import * as userAction  from './../../../actions/userActions'

function TypePackage(props) {
  window.scrollTo({ left: 0, top: 0 });
  const dispatch = useDispatch();

  const nameTypeProduct = useParams().typeProduct;
  const page = parseInt(useParams().page);
  const direction = useParams().direction;
  const id = parseInt(useParams().id)
  // console.log(nameTypeProduct);
  const productFromTypeProduct = useSelector((state) => state.productFromTypeProduct)
  const allTypeProductReducer = useSelector((state) => state.allTypeProduct);
  const userInforReducer = useSelector((state) => state.userInfor);

  const { loading: loadingAllTypeProduct, typeProduct, error: errorAllTypeProduct } = allTypeProductReducer
  const {loading: loadingUserInfor, userInfor, error: errorUserInfor} = userInforReducer
  const { loading, product, error} = productFromTypeProduct;
  const newProduct=[];

  useEffect(() => {
    dispatch(productAction.getProductsFromTypeProduct(nameTypeProduct, page, direction,id))
  }, [nameTypeProduct, page, direction, id])

  useEffect(() => {
    // console.log(product)
    // if(product){
    //   for(let i=0; i<product.length; i++){
    //     if(i == product.length - 1 ){
    //       break;
    //     }
    //     newProduct.push(product[i]);
    //   }
    //   // console.log(newProduct)
    // }
  }, [product])

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

        <div className="ads-grid py-sm-5 py-4">
          <div className="container py-xl-4 py-lg-2">
            <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
              <span>{nameTypeProduct && nameTypeProduct}</span>
              {/* <span>&</span>
              <span>C</span>omputers */}
            </h3>
            {page && <h2>Trang: {page}</h2>}
            <div className="row">

              {product ?
                <div className="agileinfo-ads-display col-lg-9 pad-20">
                  <div className="wrapper">
                    <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                      <div className="row">
                        {product.map(product => (
                          <div key={product.id} className="col-md-4 product-men mt-5">
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
                      <div className="page mart-40 marr-40 marl-40 flexbox-center-between">
                            {product && 
                              <Fragment>
                                {page == 1 && <input
                                  type="submit"
                                  name="submit"
                                  value="Trang Trước"
                                  className="button cursor-default"/>}
                                { page > 1 && <Link to={`/typeProduct/${nameTypeProduct}/${page-1}/previous/${product[0].id}`} className="button flexbox-center-center">Trang Trước</Link>}

                                { product.length <= 20 && <input
                                  type="submit"
                                  name="submit"
                                  value="Trang Sau"
                                  className="button cursor-default"/>}
                                { product.length == 21 && <Link to={`/typeProduct/${nameTypeProduct}/${page+1}/next/${product[product.length - 1].id}`} className="button flexbox-center-center">Trang Sau</Link>}
                              </Fragment>
                            }
                          </div>
                    </div>
                    <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                      <div className="row">
                        <div className="col-md-4 product-men">
                          <div className="men-pro-item simpleCart_shelfItem">
                            <div className="men-thumb-item text-center">
                              <img src="/assets/images/mk1.jpg" alt="" />
                              <div className="men-cart-pro">
                                <div className="inner-men-cart-pro">
                                  <a href="single.html" className="link-product-add-cart">Quick View</a>
                                </div>
                              </div>
                            </div>
                            <div className="item-info-product text-center border-top mt-4">
                              <h4 className="pt-1">
                                <a href="single.html">Infinix Hot S3</a>
                              </h4>
                              <div className="info-product-price my-2">
                                <span className="item_price">$300.00</span>
                                <del>$320.00</del>
                              </div>
                              <span className="product-new-top">New</span>
                              <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                <form action="#" method="post">
                                  <fieldset>
                                    <input type="hidden" name="cmd" value="_cart" />
                                    <input type="hidden" name="add" value="1" />
                                    <input type="hidden" name="business" value=" " />
                                    <input type="hidden" name="item_name" value="Infinix Hot S3" />
                                    <input type="hidden" name="amount" value="300.00" />
                                    <input type="hidden" name="discount_amount" value="1.00" />
                                    <input type="hidden" name="currency_code" value="USD" />
                                    <input type="hidden" name="return" value=" " />
                                    <input type="hidden" name="cancel_return" value=" " />
                                    <input type="submit" name="submit" value="Add to cart" className="button btn" />
                                  </fieldset>
                                </form>
                              </div>

                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 product-men mt-md-0 mt-5">
                          <div className="men-pro-item simpleCart_shelfItem">
                            <div className="men-thumb-item text-center">
                              <img src="/assets/images/mk2.jpg" alt="" />
                              <div className="men-cart-pro">
                                <div className="inner-men-cart-pro">
                                  <a href="single.html" className="link-product-add-cart">Quick View</a>
                                </div>
                              </div>

                            </div>
                            <div className="item-info-product text-center border-top mt-4">
                              <h4 className="pt-1">
                                <a href="single.html">Moto X4 (6 GB)</a>
                              </h4>
                              <div className="info-product-price my-2">
                                <span className="item_price">$233.00</span>
                                <del>$240.00</del>
                              </div>
                              <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                <form action="#" method="post">
                                  <fieldset>
                                    <input type="hidden" name="cmd" value="_cart" />
                                    <input type="hidden" name="add" value="1" />
                                    <input type="hidden" name="business" value=" " />
                                    <input type="hidden" name="item_name" value="Moto X4 (6 GB)" />
                                    <input type="hidden" name="amount" value="233.00" />
                                    <input type="hidden" name="discount_amount" value="1.00" />
                                    <input type="hidden" name="currency_code" value="USD" />
                                    <input type="hidden" name="return" value=" " />
                                    <input type="hidden" name="cancel_return" value=" " />
                                    <input type="submit" name="submit" value="Add to cart" className="button btn" />
                                  </fieldset>
                                </form>
                              </div>

                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 product-men mt-md-0 mt-5">
                          <div className="men-pro-item simpleCart_shelfItem">
                            <div className="men-thumb-item text-center">
                              <img src="/assets/images/mk3.jpg" alt="" />
                              <div className="men-cart-pro">
                                <div className="inner-men-cart-pro">
                                  <a href="single.html" className="link-product-add-cart">Quick View</a>
                                </div>
                              </div>
                            </div>
                            <div className="item-info-product text-center border-top mt-4">
                              <h4 className="pt-1">
                                <a href="single.html">iVooMi i Series</a>
                              </h4>
                              <div className="info-product-price my-2">
                                <span className="item_price">$249.00</span>
                                <del>$260.00</del>
                              </div>
                              <span className="product-new-top">New</span>
                              <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                <form action="#" method="post">
                                  <fieldset>
                                    <input type="hidden" name="cmd" value="_cart" />
                                    <input type="hidden" name="add" value="1" />
                                    <input type="hidden" name="business" value=" " />
                                    <input type="hidden" name="item_name" value="iVooMi i Series" />
                                    <input type="hidden" name="amount" value="249.00" />
                                    <input type="hidden" name="discount_amount" value="1.00" />
                                    <input type="hidden" name="currency_code" value="USD" />
                                    <input type="hidden" name="return" value=" " />
                                    <input type="hidden" name="cancel_return" value=" " />
                                    <input type="submit" name="submit" value="Add to cart" className="button btn" />
                                  </fieldset>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mt-4">
                      <div className="row">
                        <div className="col-md-4 product-men">
                          <div className="men-pro-item simpleCart_shelfItem">
                            <div className="men-thumb-item text-center">
                              <img src="/assets/images/mk4.jpg" alt="" className="img-fluid" />
                              <div className="men-cart-pro">
                                <div className="inner-men-cart-pro">
                                  <a href="single.html" className="link-product-add-cart">Quick View</a>
                                </div>
                              </div>
                            </div>
                            <div className="item-info-product text-center border-top mt-4">
                              <h4 className="pt-1">
                                <a href="single.html">Dell Vostro Laptop</a>
                              </h4>
                              <div className="info-product-price my-2">
                                <span className="item_price">$252.00</span>
                                <del>$260.00</del>
                              </div>
                              <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                <form action="#" method="post">
                                  <fieldset>
                                    <input type="hidden" name="cmd" value="_cart" />
                                    <input type="hidden" name="add" value="1" />
                                    <input type="hidden" name="business" value=" " />
                                    <input type="hidden" name="item_name" value="Dell Vostro Laptop" />
                                    <input type="hidden" name="amount" value="252.00" />
                                    <input type="hidden" name="discount_amount" value="1.00" />
                                    <input type="hidden" name="currency_code" value="USD" />
                                    <input type="hidden" name="return" value=" " />
                                    <input type="hidden" name="cancel_return" value=" " />
                                    <input type="submit" name="submit" value="Add to cart" className="button btn" />
                                  </fieldset>
                                </form>
                              </div>

                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 product-men mt-md-0 mt-5 mt-5">
                          <div className="men-pro-item simpleCart_shelfItem">
                            <div className="men-thumb-item text-center">
                              <img src="/assets/images/mk5.jpg" alt="" className="img-fluid" />
                              <div className="men-cart-pro">
                                <div className="inner-men-cart-pro">
                                  <a href="single.html" className="link-product-add-cart">Quick View</a>
                                </div>
                              </div>
                            </div>
                            <div className="item-info-product text-center border-top mt-4">
                              <h4 className="pt-1">
                                <a href="single.html">Acer Laptop</a>
                              </h4>
                              <div className="info-product-price my-2">
                                <span className="item_price">$240.00</span>
                                <del>$260.00</del>
                              </div>
                              <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                <form action="#" method="post">
                                  <fieldset>
                                    <input type="hidden" name="cmd" value="_cart" />
                                    <input type="hidden" name="add" value="1" />
                                    <input type="hidden" name="business" value=" " />
                                    <input type="hidden" name="item_name" value="Acer Laptop" />
                                    <input type="hidden" name="amount" value="240.00" />
                                    <input type="hidden" name="discount_amount" value="1.00" />
                                    <input type="hidden" name="currency_code" value="USD" />
                                    <input type="hidden" name="return" value=" " />
                                    <input type="hidden" name="cancel_return" value=" " />
                                    <input type="submit" name="submit" value="Add to cart" className="button btn" />
                                  </fieldset>
                                </form>
                              </div>

                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 product-men mt-md-0 mt-5 mt-5">
                          <div className="men-pro-item simpleCart_shelfItem">
                            <div className="men-thumb-item text-center">
                              <img src="/assets/images/mk6.jpg" alt="" className="img-fluid" />
                              <div className="men-cart-pro">
                                <div className="inner-men-cart-pro">
                                  <a href="single.html" className="link-product-add-cart">Quick View</a>
                                </div>
                              </div>
                            </div>
                            <div className="item-info-product text-center border-top mt-4">
                              <h4 className="pt-1">
                                <a href="single.html">Lenovo </a>
                              </h4>
                              <div className="info-product-price my-2">
                                <span className="item_price">$300.00</span>
                                <del>$320.00</del>
                              </div>
                              <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                <form action="#" method="post">
                                  <fieldset>
                                    <input type="hidden" name="cmd" value="_cart" />
                                    <input type="hidden" name="add" value="1" />
                                    <input type="hidden" name="business" value=" " />
                                    <input type="hidden" name="item_name" value="Alcatel Tablet" />
                                    <input type="hidden" name="amount" value="300.00" />
                                    <input type="hidden" name="discount_amount" value="1.00" />
                                    <input type="hidden" name="currency_code" value="USD" />
                                    <input type="hidden" name="return" value=" " />
                                    <input type="hidden" name="cancel_return" value=" " />
                                    <input type="submit" name="submit" value="Add to cart" className="button btn" />
                                  </fieldset>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mt-4">
                      <div className="row">
                        <div className="col-md-4 product-men">
                          <div className="men-pro-item simpleCart_shelfItem">
                            <div className="men-thumb-item text-center">
                              <img src="/assets/images/mk7.jpg" alt="" className="img-fluid" />
                              <div className="men-cart-pro">
                                <div className="inner-men-cart-pro">
                                  <a href="single.html" className="link-product-add-cart">Quick View</a>
                                </div>
                              </div>
                            </div>
                            <span className="product-new-top">New</span>
                            <div className="item-info-product text-center border-top mt-4">
                              <h4 className="pt-1">
                                <a href="single.html">Intex Power Bank</a>
                              </h4>
                              <div className="info-product-price my-2">
                                <span className="item_price">$100.00</span>
                                <del>$200.00</del>
                              </div>
                              <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                <form action="#" method="post">
                                  <fieldset>
                                    <input type="hidden" name="cmd" value="_cart" />
                                    <input type="hidden" name="add" value="1" />
                                    <input type="hidden" name="business" value=" " />
                                    <input type="hidden" name="item_name" value="Intex Power Bank" />
                                    <input type="hidden" name="amount" value="100.00" />
                                    <input type="hidden" name="discount_amount" value="1.00" />
                                    <input type="hidden" name="currency_code" value="USD" />
                                    <input type="hidden" name="return" value=" " />
                                    <input type="hidden" name="cancel_return" value=" " />
                                    <input type="submit" name="submit" value="Add to cart" className="button btn" />
                                  </fieldset>
                                </form>
                              </div>

                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 product-men mt-md-0 mt-5 mt-5">
                          <div className="men-pro-item simpleCart_shelfItem">
                            <div className="men-thumb-item text-center">
                              <img src="/assets/images/mk8.jpg" alt="" className="img-fluid" />
                              <div className="men-cart-pro">
                                <div className="inner-men-cart-pro">
                                  <a href="single.html" className="link-product-add-cart">Quick View</a>
                                </div>
                              </div>
                            </div>
                            <span className="product-new-top">New</span>
                            <div className="item-info-product text-center border-top mt-4">
                              <h4 className="pt-1">
                                <a href="single.html">HP Wireless Printer</a>
                              </h4>
                              <div className="info-product-price my-2">
                                <span className="item_price">$243.00</span>
                                <del>$250.00</del>
                              </div>
                              <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                <form action="#" method="post">
                                  <fieldset>
                                    <input type="hidden" name="cmd" value="_cart" />
                                    <input type="hidden" name="add" value="1" />
                                    <input type="hidden" name="business" value=" " />
                                    <input type="hidden" name="item_name" value="HP Wireless Printer" />
                                    <input type="hidden" name="amount" value="243.00" />
                                    <input type="hidden" name="discount_amount" value="1.00" />
                                    <input type="hidden" name="currency_code" value="USD" />
                                    <input type="hidden" name="return" value=" " />
                                    <input type="hidden" name="cancel_return" value=" " />
                                    <input type="submit" name="submit" value="Add to cart" className="button btn" />
                                  </fieldset>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 product-men mt-md-0 mt-5 mt-5">
                          <div className="men-pro-item simpleCart_shelfItem">
                            <div className="men-thumb-item text-center">
                              <img src="/assets/images/mk9.jpg" alt="" className="img-fluid" />
                              <div className="men-cart-pro">
                                <div className="inner-men-cart-pro">
                                  <a href="single.html" className="link-product-add-cart">Quick View</a>
                                </div>
                              </div>
                            </div>
                            <div className="item-info-product text-center border-top mt-4">
                              <h4 className="pt-1">
                                <a href="single.html">Alcatel Tablet</a>
                              </h4>
                              <div className="info-product-price my-2">
                                <span className="item_price">$320.00</span>
                                <del>$350.00</del>
                              </div>
                              <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                <form action="#" method="post">
                                  <fieldset>
                                    <input type="hidden" name="cmd" value="_cart" />
                                    <input type="hidden" name="add" value="1" />
                                    <input type="hidden" name="business" value=" " />
                                    <input type="hidden" name="item_name" value="Alcatel Tablet" />
                                    <input type="hidden" name="amount" value="320.00" />
                                    <input type="hidden" name="discount_amount" value="1.00" />
                                    <input type="hidden" name="currency_code" value="USD" />
                                    <input type="hidden" name="return" value=" " />
                                    <input type="hidden" name="cancel_return" value=" " />
                                    <input type="submit" name="submit" value="Add to cart" className="button btn" />
                                  </fieldset>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                :
                <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              }

              <div className="col-lg-3 mt-lg-0 mt-4 p-lg-0">
                <div className="side-bar p-sm-4 p-3">
                  <div className="search-hotel border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">Brand</h3>
                    <form action="#" method="post">
                      <input type="search" placeholder="Search Brand..." name="search" required="" />
                      <input type="submit" value=" " />
                    </form>
                    <div className="left-side py-2">
                      <ul>
                        <li>
                          <input type="checkbox" className="checked" />
                          <span className="span">Samsung</span>
                        </li>
                        <li>
                          <input type="checkbox" className="checked" />
                          <span className="span">Red Mi</span>
                        </li>
                        <li>
                          <input type="checkbox" className="checked" />
                          <span className="span">Apple</span>
                        </li>
                        <li>
                          <input type="checkbox" className="checked" />
                          <span className="span">Nexus</span>
                        </li>
                        <li>
                          <input type="checkbox" className="checked" />
                          <span className="span">Motorola</span>
                        </li>
                        <li>
                          <input type="checkbox" className="checked" />
                          <span className="span">Micromax</span>
                        </li>
                        <li>
                          <input type="checkbox" className="checked" />
                          <span className="span">Lenovo</span>
                        </li>
                        <li>
                          <input type="checkbox" className="checked" />
                          <span className="span">Oppo</span>
                        </li>
                        <li>
                          <input type="checkbox" className="checked" />
                          <span className="span">Sony</span>
                        </li>
                        <li>
                          <input type="checkbox" className="checked" />
                          <span className="span">LG</span>
                        </li>
                        <li>
                          <input type="checkbox" className="checked" />
                          <span className="span">One Plus</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="left-side border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">Ram</h3>
                    <ul>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Less than 512 MB</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">512 MB - 1 GB</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">1 GB</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">2 GB</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">3 GB</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">5 GB</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">6 GB</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">6 GB & Above</span>
                      </li>
                    </ul>
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
                        <input type="checkbox" className="checked" />
                        <span className="span">5% or More</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">10% or More</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">20% or More</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">30% or More</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">50% or More</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">60% or More</span>
                      </li>
                    </ul>
                  </div>
                  <div className="left-side border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">Offers</h3>
                    <ul>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Exchange Offer</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">No Cost EMI</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Special Price</span>
                      </li>
                    </ul>
                  </div>
                  <div className="left-side border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">Cash On Delivery</h3>
                    <ul>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Eligible for Cash On Delivery</span>
                      </li>
                    </ul>
                  </div>
                  <div className="left-side border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">New Arrivals</h3>
                    <ul>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Last 30 days</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Last 90 days</span>
                      </li>
                    </ul>
                  </div>
                  <div className="left-side py-2">
                    <h3 className="agileits-sear-head mb-3">Availability</h3>
                    <ul>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Exclude Out of Stock</span>
                      </li>
                    </ul>
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
