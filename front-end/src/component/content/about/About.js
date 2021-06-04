import React, {Fragment, useState, useEffect} from 'react';
// import * as service from './../../services/dataService';
import './About.scss';
import { Link } from 'react-router-dom';

function About() {

  return (
    <Fragment>
      <div className="container">
        <div id="content">
          <div className="our-history">
            <h2 className="text-center wow fadeInDown">Our History</h2>
            <div className="space35">&nbsp;</div>

            <div className="history-slider">
              <div className="history-navigation">
                <a data-slide-index="0" className="circle"><span className="auto-center">2003</span></a>
                <a data-slide-index="1" className="circle"><span className="auto-center">2004</span></a>
                <a data-slide-index="2" className="circle"><span className="auto-center">2005</span></a>
                <a data-slide-index="3" className="circle"><span className="auto-center">2007</span></a>
                <a data-slide-index="4" className="circle"><span className="auto-center">2009</span></a>
                <a data-slide-index="5" className="circle"><span className="auto-center">2011</span></a>
                <a data-slide-index="6" className="circle"><span className="auto-center">2014</span></a>
              </div>

              <div className="history-slides">
                <div> 
                  <div className="row">
                  <div className="col-sm-5">
                    <img src="assets/dest/images/history.jpg" alt="" />
                  </div>
                  <div className="col-sm-7">
                    <h5 className="other-title">Birth.</h5>
                    <p>
                      Suite 127 / 267 – 277 Brussel St,<br />
                      62 Croydon, NYC<br />
                      New York
                    </p>
                    <div className="space20">&nbsp;</div>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.</p>
                  </div>
                  </div> 
                </div>
                <div> 
                  <div className="row">
                  <div className="col-sm-5">
                    <img src="assets/dest/images/history.jpg" alt="" />
                  </div>
                  <div className="col-sm-7">
                    <h5 className="other-title">Web Design</h5>
                    <p>
                      Suite 127 / 267 – 277 Brussel St,<br />
                      62 Croydon, NYC<br />
                      New York
                    </p>
                    <div className="space20">&nbsp;</div>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.</p>
                  </div>
                  </div> 
                </div>
                <div> 
                  <div className="row">
                  <div className="col-sm-5">
                    <img src="assets/dest/images/history.jpg" alt="" />
                  </div>
                  <div className="col-sm-7">
                    <h5 className="other-title">Web Development</h5>
                    <p>
                      Suite 127 / 267 – 277 Brussel St,<br />
                      62 Croydon, NYC<br />
                      New York
                    </p>
                    <div className="space20">&nbsp;</div>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.</p>
                  </div>
                  </div> 
                </div>
                <div> 
                  <div className="row">
                  <div className="col-sm-5">
                    <img src="assets/dest/images/history.jpg" alt="" />
                  </div>
                  <div className="col-sm-7">
                    <h5 className="other-title">Photoshop</h5>
                    <p>
                      Suite 127 / 267 – 277 Brussel St,<br />
                      62 Croydon, NYC<br />
                      New York
                    </p>
                    <div className="space20">&nbsp;</div>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.</p>
                  </div>
                  </div> 
                </div>
                <div> 
                  <div className="row">
                  <div className="col-sm-5">
                    <img src="assets/dest/images/history.jpg" alt="" />
                  </div>
                  <div className="col-sm-7">
                    <h5 className="other-title">Skill</h5>
                    <p>
                      Suite 127 / 267 – 277 Brussel St,<br />
                      62 Croydon, NYC<br />
                      New York
                    </p>
                    <div className="space20">&nbsp;</div>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.</p>
                  </div>
                  </div> 
                </div>
                <div> 
                  <div className="row">
                  <div className="col-sm-5">
                    <img src="assets/dest/images/history.jpg" alt="" />
                  </div>
                  <div className="col-sm-7">
                    <h5 className="other-title">Project.</h5>
                    <p>
                      Suite 127 / 267 – 277 Brussel St,<br />
                      62 Croydon, NYC<br />
                      New York
                    </p>
                    <div className="space20">&nbsp;</div>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.</p>
                  </div>
                  </div> 
                </div>
                <div> 
                  <div className="row">
                  <div className="col-sm-5">
                    <img src="assets/dest/images/history.jpg" alt="" />
                  </div>
                  <div className="col-sm-7">
                    <h5 className="other-title">Coffe</h5>
                    <p>
                      Suite 127 / 267 – 277 Brussel St,<br />
                      62 Croydon, NYC<br />
                      New York
                    </p>
                    <div className="space20">&nbsp;</div>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.</p>
                  </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>

          <div className="space50">&nbsp;</div>
          <hr />
          <div className="space50">&nbsp;</div>
          <h2 className="text-center wow fadeInDown">Our Passion for What We Do Transfers Into Our Services</h2>
          <div className="space20">&nbsp;</div>
          <p className="text-center wow fadeInLeft">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          <div className="space35">&nbsp;</div>

          <div className="row">
            <div className="col-sm-2 col-sm-push-2">
              <div className="beta-counter">
                <p className="beta-counter-icon"><i className="fa fa-user"></i></p>
                <p className="beta-counter-value timer numbers" data-to="19855" data-speed="2000">19855</p>
                <p className="beta-counter-title">Clients Satisfied</p>
              </div>
            </div>

            <div className="col-sm-2 col-sm-push-2">
              <div className="beta-counter">
                <p className="beta-counter-icon"><i className="fa fa-picture-o"></i></p>
                <p className="beta-counter-value timer numbers" data-to="3568" data-speed="2000">3568</p>
                <p className="beta-counter-title">Amazing Works</p>
              </div>
            </div>

            <div className="col-sm-2 col-sm-push-2">
              <div className="beta-counter">
                <p className="beta-counter-icon"><i className="fa fa-clock-o"></i></p>
                <p className="beta-counter-value timer numbers" data-to="258934" data-speed="2000">258934</p>
                <p className="beta-counter-title">Support Hours</p>
              </div>
            </div>

            <div className="col-sm-2 col-sm-push-2">
              <div className="beta-counter">
                <p className="beta-counter-icon"><i className="fa fa-pencil"></i></p>
                <p className="beta-counter-value timer numbers" data-to="150" data-speed="2000">150</p>
                <p className="beta-counter-title">New Projects</p>
              </div>
            </div>
          </div>

          <div className="space50">&nbsp;</div>
          <hr />
          <div className="space50">&nbsp;</div>

          <h2 className="text-center wow fadeInDownwow fadeInDown">Our Amaizing Team</h2>
          <div className="space20">&nbsp;</div>
          <h5 className="text-center other-title wow fadeInLeft">Founders</h5>
          <p className="text-center wow fadeInRight">Nemo enims voluptatem quia volupas sit aspe aut odit aut fugit, sed quia <br />consequuntur magni dolores.</p>
          <div className="space20">&nbsp;</div>
          <div className="row">
            <div className="col-sm-6 wow fadeInLeft">
              <div className="beta-person media">
              
                <img className="pull-left" src="assets/dest/images/person2.jpg" alt="" />
              
                <div className="media-body beta-person-body">
                  <h5>Bob Robertson</h5>
                  <p className="font-large">Founder</p>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit asatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque por quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.</p>
                  <a >View projects <i className="fa fa-chevron-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 wow fadeInRight">
              <div className="beta-person media ">
              
                <img className="pull-left" src="assets/dest/images/person3.jpg" alt="" />
              
                <div className="media-body beta-person-body">
                  <h5>Mike Greenwood</h5>
                  <p className="font-large">Founder</p>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit asatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque por quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.</p>
                  <a >View projects <i className="fa fa-chevron-right"></i></a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space60">&nbsp;</div>
          <h5 className="text-center other-title wow fadeInDown">The Best of Professionals</h5>
          <p className="text-center wow fadeInUp">Nemo enims voluptatem quia volupas sit aspe aut odit aut fugit, sed quia <br />consequuntur magni dolores.</p>
          <div className="space20">&nbsp;</div>
          <div className="row">
            <div className="col-sm-3">
              <div className="beta-person beta-person-full">
            <div className="bets-img-hover">
                <img src="assets/dest/images/person1.jpg" alt="" />
            </div>
                <div className="beta-person-body">
                  <h5>Mark Priston</h5>
                  <p className="font-large">Web developer</p>
                  <p>Nemo enims voluptatem quia volupas sit aspe aut odit aut fugit, sed quia consequuntur magni dolores.</p>
                  <a >View projects <i className="fa fa-chevron-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="beta-person beta-person-full">
              <div className="bets-img-hover">
                <img src="assets/dest/images/person2.jpg" alt="" />
              </div>
                <div className="beta-person-body">
                  <h5>Bob Robertson</h5>
                  <p className="font-large">Web developer</p>
                  <p>Nemo enims voluptatem quia volupas sit aspe aut odit aut fugit, sed quia consequuntur magni dolores.</p>
                  <a >View projects <i className="fa fa-chevron-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="beta-person beta-person-full">
              <div className="bets-img-hover">
                <img src="assets/dest/images/person3.jpg" alt="" />
              </div>
                <div className="beta-person-body">
                  <h5>Mike Greenwood</h5>
                  <p className="font-large">Web developer</p>
                  <p>Nemo enims voluptatem quia volupas sit aspe aut odit aut fugit, sed quia consequuntur magni dolores.</p>
                  <a >View projects <i className="fa fa-chevron-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="beta-person beta-person-full">
              <div className="bets-img-hover">	
                <img src="assets/dest/images/person4.jpg" alt="" />
              </div>
                <div className="beta-person-body">
                  <h5>David Black</h5>
                  <p className="font-large">Web developer</p>
                  <p>Nemo enims voluptatem quia volupas sit aspe aut odit aut fugit, sed quia consequuntur magni dolores.</p>
                  <a >View projects <i className="fa fa-chevron-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </Fragment>
  );
}

export default About;
