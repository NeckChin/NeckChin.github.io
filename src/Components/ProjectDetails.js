import React, { Component } from "react";
class ProjectDetails extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = "images/portfolio/" + projects.image;
        return (
          <div key={projects.title} className='columns portfolio-item'>
            <div className='item-wrap'>
              <a href={projects.url} title={projects.title}>
                <img alt={projects.title} src={projectImage} />
                <div className='overlay'>
                  <div className='portfolio-item-meta'>
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
                <div className='link-icon'>
                  <i className='fa fa-link'></i>
                </div>
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <div>
        <section id='projectDetails'>
          {this.props.data &&
            this.props.data.projects.map((project) => (
              <div className='row work'>
                <div className='three columns header-col'>
                  <h1>
                    <span>{project.title}</span>
                  </h1>
                  <ul style={{ listStyleType: "circle" }}>
                    {project.technologies.map((technology) => (
                      <li>{technology}</li>
                    ))}
                  </ul>
                </div>

                <div className='nine columns main-col'>
                  <div className='row item'>
                    <div className='twelve columns'>
                      <div key={project.header}>
                        <h3>{project.header}</h3>
                        <p className='info'>
                          {project.repository != "" && (
                            <React.Fragment>
                              <a href={project.repository}>repository</a>
                              <span>&bull;</span>{" "}
                            </React.Fragment>
                          )}
                          {project.link != "" && (
                            <React.Fragment>
                              <a href={project.link}>link</a>
                              <span>&bull;</span>{" "}
                            </React.Fragment>
                          )}
                          {project.moreinfo != "" && (
                            <React.Fragment>
                              <a href={project.moreinfo}>more info</a>
                              <span>&bull;</span>{" "}
                            </React.Fragment>
                          )}
                          <em className='date'>{project.date}</em>
                        </p>
                        <p>{project.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </section>
      </div>
    );
  }
}

export default ProjectDetails;
