import axios from 'axios';
import * as config from './url';

export function getAllProduct() {
  return axios({
      url: `${config.PRODUCT_URL}`,
      method: 'GET',
  }).catch(err => {
      console.log(err);
  })
};

export function getProductsFromTypeProduct(typeProduct) {
  return axios({
      url: `${config.PRODUCT_URL}/typeProduct/${typeProduct}`,
      method: 'GET',
  }).catch(err => {
      console.log(err);
  })
};

export function get8TopProduct() {
  return axios({
      url: `${config.PRODUCT_URL}/get8TopProduct`,
      method: 'GET',
  }).catch(err => {
      console.log(err);
  })
};

export function get8NewProduct() {
  return axios({
      url: `${config.PRODUCT_URL}/get8NewProduct`,
      method: 'GET',
  }).catch(err => {
      console.log(err);
  })
}; 

export function get8ProductRelative(typeProduct) {
  return axios({
      url: `${config.PRODUCT_URL}/get8ProductRelative/${typeProduct}`,
      method: 'GET',
  }).catch(err => {
      console.log(err);
  })
};

export function getProductFromId(id) {
  return axios({
      url: `${config.PRODUCT_URL}/product/${id}`,
      method: 'GET',
  }).catch(err => {
      console.log(err);
  })
};

export function createProduct(data) {
  return axios({
      url: `${config.PRODUCT_URL}/create`,
      method: 'POST',
      data
  }).catch(err => {
      console.log(err);
  })
};

export function updateProduct(id,data) {
  return axios({
      url: `${config.PRODUCT_URL}/update/${id}`,
      method: 'PUT',
      data
  }).catch(err => {
      console.log(err);
  })
};

export function deleteProduct(id) {
  return axios({
      url: `${config.PRODUCT_URL}/delete/${id}`,
      method: 'Delete'
  }).catch(err => {
      console.log(err);
  })
};

// redux thunk ~ obseverble subscribe