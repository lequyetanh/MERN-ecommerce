import React, {Fragment} from 'react';
import Header from './../component/header/Header';
import Login from '../component/content/login/Login';
import Footer from './../component/footer/Footer';

function LoginPage() {
  return (
    <Fragment>
      <Header></Header>
      <Login></Login>
      <Footer></Footer>
    </Fragment>
  );
}

export default LoginPage;