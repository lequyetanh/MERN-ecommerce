import Axios from 'axios';
import * as userConstant from './../constants/userConstant';
import * as userService from './../services/userService';

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays){
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000 * 10)); //10 day
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export const getUserFromToken = () => async(dispatch) => {
  // console.log("ahihi")
  dispatch({type: userConstant.USER_GET_USER_FROM_TOKEN_REQUEST});
  try {
    let cookie = getCookie('token');
    // console.log(cookie)
    if(cookie){
      let { data } = await userService.getUserFromToken({token: cookie});
      // console.log(data)
      dispatch({type: userConstant.USER_GET_USER_FROM_TOKEN_SUCCESS, payload: data});
    }
  } catch(error){
    dispatch({
      type: userConstant.USER_GET_USER_FROM_TOKEN_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
}

export const userLogIn = (userInfor) => async(dispatch) => {
  dispatch({ type: userConstant.USER_LOGIN_REQUEST});
  try{
    let { data } = await userService.userLogIn(userInfor);
    // console.log(data)
    setCookie('token', data.token, 1);
    let { data } = await userService.getUserFromToken({token: data.token})
    dispatch({type: userConstant.USER_LOGIN_SUCCESS, payload: data});
  }catch(error){
    dispatch({
      type: userConstant.USER_LOGIN_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const updateUser = (id, userInfor) => async(dispatch) => {
  dispatch({ type: userConstant.USER_UPDATE_USER_FROM_ID_REQUEST});
  try{
    let cookie = getCookie('token');
    await userService.updateUser(id, userInfor);
    const { data  } = await userService.getUserFromToken({token: cookie})
    // console.log(data)
    dispatch({type: userConstant.USER_UPDATE_USER_FROM_ID_SUCCESS, payload: data});
  }catch(error){
    dispatch({
      type: userConstant.USER_UPDATE_USER_FROM_ID_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const deleteUser = (id) => async(dispatch) => {
  dispatch({ type: userConstant.USER_DELETE_USER_FROM_ID_REQUEST});
  try{
    await userService.deleteUser(id);
    let { data } = await userService.getAllUser();
    dispatch({type: userConstant.USER_DELETE_USER_FROM_ID_SUCCESS, payload: data});
  }catch(error){
    dispatch({
      type: userConstant.USER_DELETE_USER_FROM_ID_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}