import React, { Component } from 'react';
import mail from '../images/mail.svg';
import linkedIn from '../images/linkedin.svg';
import github from '../images/github.svg';

class Project extends Component {
  render() {
    return (
      <div className="Project">
        <div className="container">
          <div className="columns">
            <div className="column is-7 is-offset-5 ">
              <ul className="menu">
                <li>
                  <a href="">Resume</a>
                </li>
                <li>
                  <a onClick={() => {this.props.router("about")}}>About</a>
                </li>
                <li>
                  <a className="nav-home" onClick={() => {this.props.router("home")}}>Katelyn Duncan</a>
                </li>
              </ul>
            </div>
            <div className="column">
              <div className="project-title">
                <h1>{this.props.project.title}</h1>
                <h3> {this.props.project.attributes.type}</h3>
              </div>
              <div className="project-description-lg column is-6 is-offset-3">
                <p>{this.props.project.attributes.description}</p>
              </div>
              <img className="column is-8 is-offset-2" src={this.props.project.attributes.imgTop}/>
              <img className="column is-4 is-offset-4" src={this.props.project.attributes.imgTopSm}/>

              <div className="project-title">
                <h1>Project Summary</h1>
              </div>
              <div className="column is-8 is-offset-2 summary">

                <p className="summary">{this.props.project.attributes.summary}</p>
                <a className="projectLink" href={this.props.project.attributes.siteLink}>{this.props.project.attributes.site}</a>
                <a className="projectLink projectLinkSecondary" href="{this.props.project.attributes.siteLinkO}">{this.props.project.attributes.siteO}</a>
              </div>

              <div className="columns is-variable is-7">
                <div className="column is-6 process-image">
                  <img src={this.props.project.attributes.summaryOne}/>
                  <img src={this.props.project.attributes.summaryOption}/>
                  <img src={this.props.project.attributes.summaryTwo}/>
                </div>
                <div className="column is-6 process-image">
                  <img src={this.props.project.attributes.summaryThree}/>
                </div>
              </div>
              <div className="project-title">
                <h1>Process</h1>
              </div>
              <div className="column is-8 is-offset-2">
                <p className="summary">{this.props.project.attributes.process}</p>
              </div>
              <div className="columns is-variable is-7">
                <div className="column is-4 process-image">
                  <img src={this.props.project.attributes.processOne}/>
                </div>
                <div className="column is-4 process-image">
                  <img src={this.props.project.attributes.processTwo}/>
                </div>
                <div className="column is-4 process-image">
                  <img src={this.props.project.attributes.processThree}/>
                </div>
              </div>
              <div className="columns is-variable is-7">
                <div className="column is-7 process-image">
                  <img src={this.props.project.attributes.processFour}/>
                </div>
                <div className="column is-4">
                  <p className="summary processSecondary">{this.props.project.attributes.processSecondary}</p>
                </div>
                <div className="column is-3 is-offset-3 process-image">
                  <img src={this.props.project.attributes.processFourO}/>
                </div>
                <div className="column is-4">
                  <p className="summary processSecondary">{this.props.project.attributes.processSecondaryO}</p>
                </div>

              </div>
              <div className="project-title">
                <h1>Result</h1>
              </div>
              <div className="column is-8 is-offset-2">
                <p className="summary">{this.props.project.attributes.result}</p>
              </div>
              <img className="process-image" src={this.props.project.attributes.imgSrc}/>
              <div className="columns is-variable is-7">
                <div className="column is-6 process-image">
                  <img src={this.props.project.attributes.resultOne}/>
                </div>
                <div className="column is-6 process-image">
                  <img src={this.props.project.attributes.resultTwo}/>
                </div>
              </div>
              <div className="columns is-variable is-7">
                <div className="column is-6">
                  <img className="process-image" src={this.props.project.attributes.resultThree}/>
                </div>
                <div className="column is-6">
                  <img className="process-image" src={this.props.project.attributes.resultFour}/>
                </div>
              </div>
              <div className="column is-6 is-offset-3">
                    <a className="projectLink" onClick={() => {this.props.router("home")}}>Back to Projects</a>
              </div>
              <div className="columns is-variable is-7">
                <div className="column is-4 process-image">
                  <img src={this.props.project.attributes.resultFive}/>
                </div>
                <div className="column is-4 process-image">
                  <img src={this.props.project.attributes.resultSix}/>
                </div>
                <div className="column is-4 process-image">
                  <img src={this.props.project.attributes.resultSeven}/>
                </div>
              </div>



            </div>
          </div>
          </div>
          <div className="columns footer">
            <div className="is-two-fifths column">
              <div className="landing-info">
                <a className="nav-home" onClick={() => {this.props.router("home")}}>Katelyn Duncan</a>
                <ul className="social">
                  <li>
                    <a href="mailto:duncan.katelynj@gmail.com"><img src={mail}/></a>
                  </li>
                  <li>
                    <a href="https://github.com/kjduncan"><img src={github}/></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/duncankatelyn/"><img src={linkedIn}/></a>
                  </li>

                </ul>
              </div>
            </div>
            <div className="footer-solid column is-three-fifths">
              <ul className="menu">
                <li>
                  <a href="">Resume</a>
                </li>
                <li>
                  <a onClick={() => {this.props.router("about")}}>About</a>
                </li>
              </ul>
            </div>
          </div>
      </div>
    );
  }
}

export default Project;
