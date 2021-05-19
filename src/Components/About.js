import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var site = this.props.data.site;
         var orcidID = this.props.data.orcid;
         var resumeDownload = this.props.data.resumedownload;
         var orcidQR = "images/" + this.props.data.orcidqr;
      }

      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src={profilepic} alt="Aritra Roy Profile Pic" />
               </div>
               <div className="nine columns main-col">
                  <h2>About Me</h2>

                  <p>{bio}</p>
                  <div className="row">
                     <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                           <span>{name}</span><br />
                           <span>{street}<br />
                              {city} {state}, {zip}
                           </span><br />
                           <span>{phone}</span><br />
                           <span>{email}</span><br />
                           <span>{site}</span><br />
                           {/* ORCID id is changed by Lintree username, but attributes are kept same */}
                           <span>{orcidID}</span>
                        </p>
                     </div>
                     <div className="columns download">
                        <p>
                           <a href={resumeDownload} target="_blank" className="button"><i className="fa fa-download"></i>Download CV</a>
                        </p>
                        {/* ORCID QR is changed by Lintree QR, but attributes are kept same */}
                        <div className="orcidSection">
                           <img id="orcidQR" src={orcidQR} alt="ORCID QR" />
                           <p>Linktree Page QR Code</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </section>
      );
   }
}

export default About;
