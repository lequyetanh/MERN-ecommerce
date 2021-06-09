import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as userReducer from './../reducers/userReducers';
import * as productReducer from './../reducers/productReducers';
import * as typeProductReducer from './../reducers/typeProductReducers';

const reducer = combineReducers({
  userInfor: userReducer.userInforReducer,
  userSignIn: userReducer.userSignInReducer,
  userDelete: userReducer.deleteUserReducer,

  newProduct: productReducer.newProductReducer,
  topProduct: productReducer.topProductReducer,
  productRelative: productReducer.productRelativeReducer,
  productFromId: productReducer.productFromIdReducer,
  productFromTypeProduct: productReducer.productFromTypeProductReducer,
  allProduct: productReducer.allProductReducer,
  createProduct: productReducer.createProductReducer,
  updateProduct: productReducer.updatedProductReducer,
  deleteProduct: productReducer.deleteProductReducer,

  allTypeProduct: typeProductReducer.allTypeProductReducer,
  createTypeProduct: typeProductReducer.createTypeProductReducer,
  updateTypeProduct: typeProductReducer.updateTypeProductReducer,
  deleteTypeProduct: typeProductReducer.deleteTypeProductReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;