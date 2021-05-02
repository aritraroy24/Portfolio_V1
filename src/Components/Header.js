import React, { Component } from 'react';

class Header extends Component {
   render() {
      var BuyCoffe = 'images/buycoffee.png'

      if (this.props.data) {
         var name = this.props.data.name;
         var occupation = this.props.data.occupation;
         var place = this.props.data.place;
         var description = this.props.data.description;
         // var city= this.props.data.address.city;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a target="_blank" title={network.title} href={network.url}><i className={network.className}></i></a></li>
         })
      }

      return (
         <header id="home">

            <nav id="nav-wrap">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#resume">Academic Info</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Projects & Blogs</a></li>
                  <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                  <li><a className="smoothscroll" href="#contact">Contact</a></li>
               </ul>

            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline">I'm {name}.</h1>
                  <h3>I'm a <span>{occupation}</span> at <span>{place}</span>. {description}</h3>
                  <hr />
                  <ul className="social">                     
                     <li><a target="_blank" title="ORCID" href="https://orcid.org/0000-0003-0243-9124"><i class="ai ai-orcid"></i></a></li>
                     <li><a target="_blank" title="ResearchGate" href="https://www.researchgate.net/profile/Aritra-Roy-5"><i class="ai ai-researchgate"></i></a></li>
                     <li><a target="_blank" title="Publons" href="https://publons.com/researcher/4403476/aritra-roy/"><i class="ai ai-publons"></i></a></li>
                     <li><a target="_blank" title="Academia" href="https://pudhcp.academia.edu/AritraRoy"><i class="ai ai-academia"></i></a></li>
                     {networks}
                  </ul>
                  <a href="https://www.buymeacoffee.com/aritraroy24" target="_blank"><img id="BuyCoffee" src={BuyCoffe}></img></a>
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      );
   }
}

export default Header;
