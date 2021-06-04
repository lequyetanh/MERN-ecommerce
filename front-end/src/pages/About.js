import React, {Fragment} from 'react';
import Header from './../component/header/Header';
import About from '../component/content/about/About';
import Footer from './../component/footer/Footer';

function AboutPage () {
  return (
    <Fragment>
      <Header></Header>
      <About></About>
      <Footer></Footer>
    </Fragment>
  );
}

export default AboutPage ;