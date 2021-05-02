import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a target="_blank" title="ORCID" href="https://orcid.org/0000-0003-0243-9124"><i class="ai ai-orcid"></i></a></li>
              <li><a target="_blank" title="ResearchGate" href="https://www.researchgate.net/profile/Aritra-Roy-5"><i class="ai ai-researchgate"></i></a></li>
              <li><a target="_blank" title="Publons" href="https://publons.com/researcher/4403476/aritra-roy/"><i class="ai ai-publons"></i></a></li>
              <li><a target="_blank" title="Academia" href="https://pudhcp.academia.edu/AritraRoy"><i class="ai ai-academia"></i></a></li>
              {networks}
            </ul>

            <ul>
              <li>Made with ❤️ by <span id="footer_name">Aritra Roy</span></li>
            </ul>

            <ul className="copyright">
              {/* <li>&copy; All credit goes to Tim Baker - Copyright 2017 Tim Baker</li> */}
              {/* <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li> */}
            </ul>

          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
        </div>
        {/* <a href="https://www.webfreecounter.com/" target="_blank"><img src="https://www.webfreecounter.com/hit.php?id=gfpcxo&nd=5&style=15" border="0" alt="free counter" /></a> */}
      </footer>
    );
  }
}

export default Footer;
