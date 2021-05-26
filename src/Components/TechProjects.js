import React, { Component } from 'react';

class TechProjects extends Component {
  render() {

    if (this.props.data) {
      var techprojects = this.props.data.techprojects.map(function (techprojects) {
        var techImage = 'images/tech/' + techprojects.image;
        return <div key={techprojects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a target="_blank" href={techprojects.url} title={techprojects.title}>
              <img alt={techprojects.title} src={techImage} id="techimg"/>
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{techprojects.title}</h5>
                  <p>{techprojects.category}</p>
                </div>
              </div>
              <div className="link-icon"><i className="fa fa-link"></i>
                <div className="blogdate">{techprojects.date}</div>
              </div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Consider My Programming Projects</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {techprojects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TechProjects;
