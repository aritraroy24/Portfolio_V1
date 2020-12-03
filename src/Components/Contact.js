import React from "react";

export default class MyForm extends React.Component {
   constructor(props, data) {
      super(props);
      this.submitForm = this.submitForm.bind(this);
      this.state = {
         status: ""
      };
   }

   render() {
      const { status } = this.state;
      return (
         <section id="contact">
            <div className="row">
               <div className="eight columns">
                  <form id="contactForm" onSubmit={this.submitForm}
                     action="https://formspree.io/mvowenaj"
                     method="POST"
                  >
                     <fieldset>
                        <div>
                           <label>Name <span className="required">*</span></label>
                           <input type="text" autoComplete="none" defaultValue="" size="35" id="contactName" name="contactName" />
                        </div>
                        <div>
                           <label>Phone No <span className="required">*</span></label>
                           <input type="text" autoComplete="none" defaultValue="" size="35" id="contactSubject" name="contactSubject" />
                        </div>
                        <div>
                           <label>Email <span className="required">*</span></label>
                           <input type="email" defaultValue="" size="35" id="contactEmail" name="contactEmail" />
                        </div>
                        <div>
                           <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                           <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                        </div>
                        {status === "SUCCESS" ? <p id="thankSubmit">Thanks for contacting! I'll reach you soon.</p> : <button className="submit">Submit</button>}
                        {status === "ERROR" && <p>Ooops! There was an error.</p>}
                     </fieldset>
                  </form>
               </div>
               <div className="row section-head">
                  <aside className="four columns footer-widgets">
                     <div className="widget widget_contact">
                        <h4>Address</h4>
                        <h6>Permanent Address</h6>
                        <p className="address">
                           512, Pirtala, Poramatala Road,<br />
                           Nabadwip, Nadia, West Bengal, India<br />
                           Pin - 741302<br />
                        </p>
                        <h6>Present Address</h6>
                        <p className="address">
                           Room No. 117, Sri Aurobinda Hostel,<br/>
                           Pondicherry University,<br />
                           Kalapet, Pondicherry<br />
                           Pin - 605014<br />
                        </p>
                     </div>
                     <div className="widget widget_tweets">
                     <h4>Phone Number &amp; Email Id</h4>
                     <span>Phone No : +91 98512 57150</span><br/>
                     <span>Email Id : aritraroy24@gmail.com</span>
                     </div>
                  </aside>
               </div>
            </div>
         </section>
      );
   }

   submitForm(ev) {
      ev.preventDefault();
      const form = ev.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
         if (xhr.readyState !== XMLHttpRequest.DONE) return;
         if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
         } else {
            this.setState({ status: "ERROR" });
         }
      };
      xhr.send(data);
   }
}