import axios from 'axios';
import * as config from './url';

const accessToken = 'helloworld'
const apiUrl = 'http://localhost:3001/api'

const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  }
})

export function getAllProduct() {
  return authAxios({
      url: `${config.PRODUCT_URL}`,
      method: 'GET',
  }).catch(err => {
      console.log(err);
  })
};

export function getAllProduct() {
  return axios({
      url: `${config.PRODUCT_URL}`,
      method: 'GET',
  }).catch(err => {
      console.log(err);
  })
};

export function getProductsFromTypeProduct(typeProduct, page, direction, id) {
  return axios({
      url: `${config.PRODUCT_URL}/typeProduct/${typeProduct}/${page}/${direction}/${id}`,
      method: 'GET',
  }).catch(err => {
      console.log(err);
  })
};

export function getProductsFromSearch(search) {
  return axios({
      url: `${config.PRODUCT_URL}/search/${search}`,
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

export function get8ProductRelative(typeProduct, id) {
  return axios({
      url: `${config.PRODUCT_URL}/get8ProductRelative/${typeProduct}/${id}`,
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
