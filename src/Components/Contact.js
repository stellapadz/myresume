import React, { Component } from 'react';
import * as emailjs from 'emailjs-com'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Contact extends Component {
   constructor(props) {
      super(props);
      this.state = {
         contactName: '',
         contactEmail: '',
         contactSubject: '',
         contactMessage: '',
      }
   }
   handleChange = input => e => {
      this.setState({
         [input]: e.target.value
      });
   }

   submitForm = (e) => {
      // console.log(this.state);
      e.preventDefault();
      const {
         contactEmail,
         contactSubject,
         contactMessage
      } = this.state;
      let templateParams = {
         from_name: contactEmail,
         to_name: 'padugastella@gmail.com',
         subject: contactSubject,
         message_html: contactMessage,
      }
      // emailjs.send('gmail', 'template_gd2ylDCs', templateParams, 'user_VMgZ7Mt6zLGIPZ8cplGCm')
      //    .then(function (response) {
      //       toast.success(response.text);
      //    }, function (error) {
      //       toast.error("FAILED", error);
      //       // console.log('FAILED...', error);
      //    });
      emailjs.send(
         'gmail',
         'template_gd2ylDCs',
         templateParams,
         'user_VMgZ7Mt6zLGIPZ8cplGCm'
      )
      toast.success('SUCCESS');
      this.resetForm()

   }
   resetForm() {
      this.setState({
         contactName: '',
         contactEmail: '',
         contactSubject: '',
         contactMessage: '',
      })
   }
   render() {
      const {
         contactName,
         contactEmail,
         contactSubject,
         contactMessage
      } = this.state;
      if (this.props.data) {
         var phone = this.props.data.phone;
         var name = this.props.data.name;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var zip = this.props.data.address.zip;
      }
      return (
         <section id="contact">
            <div className="row section-head">
               <div className="two columns header-col">
                  <h1><span>Get In Touch.</span></h1>
               </div>
               <div className="ten columns">
                  <p className="lead">
                  </p>
               </div>
            </div>
            <div className="row">
               <div className="eight columns">
                  <form onSubmit={this.submitForm}>
                     <fieldset>
                        <div>
                           <label htmlFor="contactName">Name <span className="required">*</span></label>
                           <input type="text" size="35" id="contactName" value={contactName} onChange={this.handleChange('contactName')} required />
                        </div>
                        <div>
                           <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                           <input type="email" size="35" id="contactEmail" value={contactEmail} onChange={this.handleChange('contactEmail')} required />
                        </div>
                        <div>
                           <label htmlFor="contactSubject">Subject</label>
                           <input type="text" size="35" id="contactSubject" value={contactSubject} onChange={this.handleChange('contactSubject')} required />
                        </div>
                        <div>
                           <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                           <textarea cols="50" rows="15" id="contactMessage" value={contactMessage} onChange={this.handleChange('contactMessage')} required></textarea>
                        </div>
                        <div>
                           <button type="submit" className="submit">Submit</button>
                           <ToastContainer autoClose={2000} />
                           {/* <span id="image-loader">
                              <img alt="" src="images/loader.gif" />
                           </span> */}
                        </div>
                     </fieldset>
                  </form>
                  <div id="message-warning"> Error boy</div>
                  <div id="message-success">
                     <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                  </div>
               </div>
               <aside className="four columns footer-widgets">
                  <div className="widget widget_contact">
                     <h4>Address and Phone</h4>
                     <p className="address">
                        {name}<br />
                        {street} <br />
                        {city} , {zip}<br />
                        <span>{phone}</span>
                     </p>
                  </div>
               </aside>
            </div>
         </section>
      );
   }
}

export default Contact;
