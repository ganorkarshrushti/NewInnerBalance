
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="about-acm" style={{ height: '375px', backgroundColor: 'black' }}>
      <div className="container">
        <div className="row">
          <div className="design-team" style={{ backgroundColor: 'rgb(21, 21, 21)' }}>
            <div className="container text-center text-white">
              <div className="row">
                <div className="col-md-4">
                  <h4><b>Address</b></h4>
                  <h6 style={{ color: 'rgb(255, 246, 246)' }}>ST. Vincent Pallotti College Of Engineering & Technology,Gavsi Manapur, Wardha Road, Nagpur : 441108</h6>
                  <br />
                  <div className="share">
                    <a className="link" href=""><i className="fa fa-facebook p-3" aria-hidden="true"></i></a>
                    <a className="link" href=""><i className="fa fa-instagram p-3" aria-hidden="true"></i></a>
                    <a className="link" href=""><i className="fa fa-linkedin  p-3" aria-hidden="true"></i></a>
                    <a className="link" href=""><i className="fa fa-whatsapp  p-3" aria-hidden="true"></i></a>
                    <a className="link" href=""><i className="fa fa-envelope  p-3" aria-hidden="true"></i></a>
                  </div>
                </div>

                <div className="col-md-4 quick-links">
                  <h4>Quick Links</h4>
                  <div className="footer-imp-links text-info" id="vs" data-aos="fade-down">
                    <a className="link" href="visits.html">Visits</a><br />
                    <a className="link" href="gallery.html">Gallery</a><br />
                    <a className="link" href="project.html">Projects</a><br />
                    <a className="link" href="contact-us.html">Contact Us</a>
                  </div>
                </div>

                <div className="col-md-4 location">
                  <h4>Location</h4>
                  <div className="location-map" data-aos="fade-up">
                    { <iframe style={{ width: '250px', height: 'auto' }}
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.699716753677!2d79.04554451488298!3d21.004670786011374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bdc6b03bfded%3A0x51964eb66fa3ec5e!2sSt.%20Vincent%20Pallotti%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1666528069153!5m2!1sen!2sin"
                      width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"></iframe> }
                  </div>
                </div>
              </div>
              <div className="foot" style={{ backgroundColor: '#f18930', fontSize: '20px', padding: '10px' }}>
                <h6>Copyright © 2022 All right reserved | SVPCET</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

