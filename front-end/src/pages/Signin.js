import React, {Fragment} from 'react';
import Header from './../component/header/Header';
import Signin from '../component/content/signin/Signin';
import Footer from './../component/footer/Footer';

function SigninPage () {
  return (
    <Fragment>
      <Header></Header>
      <Signin></Signin>
      <Footer></Footer>
    </Fragment>
  );
}

export default SigninPage ;