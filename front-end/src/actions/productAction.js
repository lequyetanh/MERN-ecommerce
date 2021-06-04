import Axios from 'axios';
import * as productConstant from './../constants/productConstant';
import * as productService from './../services/productService';

export const getAllProduct = () => async(dispatch) => {
  dispatch({ type: productConstant.PRODUCT_GET_ALL_REQUEST});
  try{
    const { data } = await productService.getAllProduct();
    dispatch({type: productConstant.PRODUCT_GET_ALL_SUCCESS, payload: data});
  }catch(error){
    dispatch({
      type: productConstant.PRODUCT_GET_ALL_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const getProductsFromTypeProduct = (typeProduct) => async(dispatch) => {
  dispatch({ type: productConstant.PRODUCT_GET_PRODUCT_FROM_TYPEPRODUCT_REQUEST});
  try{
    const { data } = await productService.getProductsFromTypeProduct(typeProduct);
    // console.log(data)
    dispatch({type: productConstant.PRODUCT_GET_PRODUCT_FROM_TYPEPRODUCT_SUCCESS, payload: data});
  }catch(error){
    dispatch({
      type: productConstant.PRODUCT_GET_PRODUCT_FROM_TYPEPRODUCT_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const getProductFromId = (id) => async(dispatch) => {
  dispatch({ type: productConstant.PRODUCT_GET_PRODUCT_FROM_ID_REQUEST});
  try{
    const { data } = await productService.getProductFromId(id);
    console.log(data)
    dispatch({type: productConstant.PRODUCT_GET_PRODUCT_FROM_ID_SUCCESS, payload: data});
  }catch(error){
    dispatch({
      type: productConstant.PRODUCT_GET_PRODUCT_FROM_ID_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const get8TopProduct = () => async(dispatch) => {
  dispatch({ type: productConstant.PRODUCT_GET_8_TOP_PRODUCT_REQUEST});
  try{
    const { data } = await productService.get8TopProduct();
    dispatch({type: productConstant.PRODUCT_GET_8_TOP_PRODUCT_SUCCESS, payload: data});
  }catch(error){
    dispatch({
      type: productConstant.PRODUCT_GET_8_TOP_PRODUCT_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const get8NewProduct = () => async(dispatch) => {
  dispatch({ type: productConstant.PRODUCT_GET_8_NEW_PRODUCT_REQUEST});
  try{
    const { data } = await productService.get8NewProduct();
    dispatch({type: productConstant.PRODUCT_GET_8_NEW_PRODUCT_SUCCESS, payload: data});
  }catch(error){
    dispatch({
      type: productConstant.PRODUCT_GET_8_NEW_PRODUCT_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const get8ProductRelative = (typeProduct) => async(dispatch) => {
  dispatch({ type: productConstant.PRODUCT_GET_8_PRODUCT_RELATIVE_REQUEST});
  try{
    const { data } = await productService.get8ProductRelative(typeProduct);
    dispatch({type: productConstant.PRODUCT_GET_8_PRODUCT_RELATIVE_SUCCESS, payload: data});
  }catch(error){
    dispatch({
      type: productConstant.PRODUCT_GET_8_PRODUCT_RELATIVE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const createProduct = (product) => async(dispatch) => {
  dispatch({ type: productConstant.PRODUCT_CREATE_PRODUCT_REQUEST});
  try{
    const { data } = await productService.createProduct(product);
    dispatch({type: productConstant.PRODUCT_CREATE_PRODUCT_SUCCESS, payload: data});
  }catch(error){
    dispatch({
      type: productConstant.PRODUCT_CREATE_PRODUCT_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const updateProduct = (id, product) => async(dispatch) => {
  dispatch({ type: productConstant.PRODUCT_UPDATE_PRODUCT_FROM_ID_REQUEST});
  try{
    const { data } = await productService.updateProduct(id, product);
    dispatch({type: productConstant.PRODUCT_UPDATE_PRODUCT_FROM_ID_SUCCESS, payload: data});
  }catch(error){
    dispatch({
      type: productConstant.PRODUCT_UPDATE_PRODUCT_FROM_ID_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const deleteProduct = (id) => async(dispatch) => {
  dispatch({ type: productConstant.PRODUCT_DELETE_PRODUCT_FROM_ID_REQUEST});
  try{
    const { data } = await productService.deleteProduct(id);
    dispatch({type: productConstant.PRODUCT_DELETE_PRODUCT_FROM_ID_SUCCESS, payload: data});
  }catch(error){
    dispatch({
      type: productConstant.PRODUCT_DELETE_PRODUCT_FROM_ID_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

