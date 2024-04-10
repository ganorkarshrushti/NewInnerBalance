
/*9 APR
import React, { useState } from 'react';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        alert('Email sent successfully:', result.text);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        alert('Email sending failed:', error.text);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6" style={{ backgroundImage: `url('https://t4.ftcdn.net/jpg/05/08/85/65/360_F_508856527_j47VSpWgbNbECuiOa9kSUllJBuZ2V1hF.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="contact-info bg-light p-4 rounded">
            <h2>Contact Us</h2>
            <div className="address">
              <div className="icon">
                <a href="https://maps.app.goo.gl/s2nv5jDxxppvi5Z6A" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-map-marker"></i>
                </a>
              </div>
              <p>Jaypee Institute of Information Technology</p>
            </div>
            <div className="address">
              <div className="icon">
                <i className="fa fa-phone"></i>
              </div>
              <p>+91 xxxxxxxx67</p>
            </div>
            <div className="address">
              <div className="icon">
                <i className="fa fa-envelope"></i>
              </div>
              <p>sukoon@gmail.com</p>
            </div>
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/sukoonformentalhealth/" target="_blank" rel="noopener noreferrer" className="icon">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6" style={{ backgroundImage: `url('https://t4.ftcdn.net/jpg/05/08/85/65/360_F_508856527_j47VSpWgbNbECuiOa9kSUllJBuZ2V1hF.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="contact-form bg-light p-4 rounded">
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
*/
//good 9 apr
import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        alert('Email sent successfully:', result.text);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        alert('Email sending failed:', error.text);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container-fluid p-0" style={{ backgroundImage: `url('https://t4.ftcdn.net/jpg/05/08/85/65/360_F_508856527_j47VSpWgbNbECuiOa9kSUllJBuZ2V1hF.jpg')`, backgroundSize: 'cover', backgroundPosition: 'absolute', minHeight: '100vh' }}>
      <div className="container mt-5" style={{ backgroundImage: `url('bg_image_for_contact_section.jpg')`, backgroundSize: 'cover', backgroundPosition: 'absolute', minHeight: '100vh' }}>
        <div className="row">
          <div className="col-md-6" style={{ marginTop: '50px' }}>
            <div className="contact-info bg-light p-4 rounded">
              <h2>Contact Us</h2>
              <div className="address">
                <div className="icon">
                  <a href="https://maps.app.goo.gl/s2nv5jDxxppvi5Z6A" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-map-marker"></i>
                  </a>
                </div>
                <p>St. Vincent Pallotti College of Engineering and Technology</p>
              </div>
              <div className="address">
                <div className="icon">
                  <i className="fa fa-phone"></i>
                </div>
                <p>+91 xxxxxxxx67</p>
              </div>
              <div className="address">
                <div className="icon">
                  <i className="fa fa-envelope"></i>
                </div>
                <p>innerbalance@gmail.com</p>
              </div>
              <div className="social-icons">
                <a href="#" className="icon">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/sukoonformentalhealth/" target="_blank" rel="noopener noreferrer" className="icon">
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6" style={{ marginTop: '50px' }}>
            <div className="contact-form bg-light p-4 rounded">
              <h3>Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
/*
import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        alert('Email sent successfully:', result.text);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        alert('Email sending failed:', error.text);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container-fluid p-0" style={{ backgroundImage: `url('https://t4.ftcdn.net/jpg/05/08/85/65/360_F_508856527_j47VSpWgbNbECuiOa9kSUllJBuZ2V1hF.jpg')`, backgroundSize: 'cover', backgroundPosition: 'absolute', minHeight: '100vh' }}>
      <div className="container mt-5" style={{ backgroundImage: `url('https://www.designyourway.net/blog/wp-content/uploads/2018/11/pastel-background-goo.jpg')`, backgroundSize: 'cover', backgroundPosition: 'absolute', minHeight: '100vh' }}>
        <div className="row">
          <div className="col-md-6" style={{ marginTop: '50px' }}>
            <div className="contact-info bg-light p-4 rounded">
              <h2>Contact Us</h2>
              <div className="address">
                <div className="icon">
                  <a href="https://maps.app.goo.gl/s2nv5jDxxppvi5Z6A" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-map-marker"></i>
                  </a>
                </div>
                <p>Jaypee Institute of Information Technology</p>
              </div>
              <div className="address">
                <div className="icon">
                  <i className="fa fa-phone"></i>
                </div>
                <p>+91 xxxxxxxx67</p>
              </div>
              <div className="address">
                <div className="icon">
                  <i className="fa fa-envelope"></i>
                </div>
                <p>sukoon@gmail.com</p>
              </div>
              <div className="social-icons">
                <a href="#" className="icon">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/sukoonformentalhealth/" target="_blank" rel="noopener noreferrer" className="icon">
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5" style={{ backgroundImage: `url('https://www.designyourway.net/blog/wp-content/uploads/2018/11/pastel-background-goo.jpg')`, backgroundSize: 'cover', backgroundPosition: 'absolute', minHeight: '100vh' }}>
        <div className="row">
          <div className="col-md-6" style={{ marginTop: '50px' }}>
            <div className="contact-form bg-light p-4 rounded">
              <h3>Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
*/