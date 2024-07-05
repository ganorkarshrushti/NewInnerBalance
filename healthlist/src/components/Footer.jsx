import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Address</h4>
            <p>ST. Vincent Pallotti College Of Engineering & Technology, Gavsi Manapur, Wardha Road, Nagpur : 441108</p>
            <div className="share">
              <a className="link" href="#"><i className="fa fa-facebook p-3" aria-hidden="true"></i></a>
              <a className="link" href="#"><i className="fa fa-instagram p-3" aria-hidden="true"></i></a>
              <a className="link" href="#"><i className="fa fa-linkedin p-3" aria-hidden="true"></i></a>
              <a className="link" href="#"><i className="fa fa-whatsapp p-3" aria-hidden="true"></i></a>
              <a className="link" href="#"><i className="fa fa-envelope p-3" aria-hidden="true"></i></a>
            </div>
          </div>
          <div className="col-md-4 quick-links">
            <h4>Quick Links</h4>
            <div className="footer-imp-links" id="vs" data-aos="fade-down">
              
              <a className="" href="contact-us.html">Contact Us</a>
            </div>
          </div>
          <div className="col-md-4 location">
            <h4>Location</h4>
            <div className="location-map" data-aos="fade-up">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.699716753677!2d79.04554451488298!3d21.004670786011374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bdc6b03bfded%3A0x51964eb66fa3ec5e!2sSt.%20Vincent%20Pallotti%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1666528069153!5m2!1sen!2sin"
                width="250" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 All rights reserved | SVPCET</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
