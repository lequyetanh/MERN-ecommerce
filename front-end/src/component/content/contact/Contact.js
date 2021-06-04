import React, {Fragment, useState, useEffect} from 'react';
// import * as service from './../../services/dataService';
import './Contact.scss';
import {Link} from 'react-router-dom';

function Contact() {

  return (
    <Fragment>
      <div class="beta-map">

        <div class="abs-fullwidth beta-map wow flipInX">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3678.0141923553406!2d89.551518!3d22.801938!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff8ff8ef7ea2b7%3A0x1f1e9fc1cf4bd626!2sPranon+Pvt.+Limited!5e0!3m2!1sen!2s!4v1407828576904"></iframe>
        </div>
      </div>
      <div className="container">
        <div id="content" className="space-top-none">

          <div className="space50">&nbsp;</div>
          <div className="row">
            <div className="col-sm-8">
              <h2>Contact Form</h2>
              <div className="space20">&nbsp;</div>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit ani m
                id est laborum.</p>
              <div className="space20">&nbsp;</div>
              <form method="post" className="contact-form">
                <div className="form-block">
                  <input name="your-name" type="text" placeholder="Your Name (required)"/>
                </div>
                <div className="form-block">
                  <input name="your-email" type="email" placeholder="Your Email (required)"/>
                </div>
                <div className="form-block">
                  <input name="your-subject" type="text" placeholder="Subject"/>
                </div>
                <div className="form-block">
                  <textarea name="your-message" placeholder="Your Message"></textarea>
                </div>
                <div className="form-block">
                  <button type="submit" className="beta-btn primary">Send Message
                    <i className="fa fa-chevron-right"></i>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-sm-4">
              <h2>Contact Information</h2>
              <div className="space20">&nbsp;</div>

              <h6 className="contact-title">Address</h6>
              <p>
                Suite 127 / 267 – 277 Brussel St,<br/>
                62 Croydon, NYC
                <br/>
                Newyork
              </p>
              <div className="space20">&nbsp;</div>
              <h6 className="contact-title">Business Enquiries</h6>
              <p>
                Doloremque laudantium, totam rem aperiam,
                <br/>
                inventore veritatio beatae.
                <br/>
                <a href="mailto:biz@betadesign.com">biz@betadesign.com</a>
              </p>
              <div className="space20">&nbsp;</div>
              <h6 className="contact-title">Employment</h6>
              <p>
                We’re always looking for talented persons to
                <br/>
                join our team.
                <br/>
                <a href="hr@betadesign.com">hr@betadesign.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Contact;
