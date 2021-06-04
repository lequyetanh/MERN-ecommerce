import React, {Fragment} from 'react';
import Header from './../component/header/Header';
import Contact from '../component/content/contact/Contact';
import Footer from './../component/footer/Footer';

function ContactPage () {
  return (
    <Fragment>
      <Header></Header>
      <Contact></Contact>
      <Footer></Footer>
    </Fragment>
  );
}

export default ContactPage ;