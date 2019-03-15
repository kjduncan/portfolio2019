import React, { Component } from 'react';
import { Link } from "react-router-dom";
import mail from '../images/mail.svg';
import linkedIn from '../images/linkedin.svg';
import github from '../images/github.svg';
import '../App.css';
import 'bulma';

class NewProject extends Component {
  rawHtml = (htmlString) => {
    return {__html: htmlString}
  }
  render() {
    return (
      <div className="newProject Project">
        <div className="container">
          <div className="columns">
            <div className="column is-7 is-offset-5 ">
              <ul className="menu">
                <li>
                  <a href="https://drive.google.com/open?id=1aOa1IHc5hr92wdlKwThYCk4a-wuCY-lx" target="_blank">Resume</a>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link className="nav-home" to="/">Katelyn Duncan</Link>
                </li>
              </ul>
            </div>
            <div className="column">
              <div className="project-title">
                <h1>{this.props.project.title}</h1>
                <h3> {this.props.project.attributes.type}</h3>
              </div>
              <div className="project-description-lg column is-8 is-offset-2">
                <p>{this.props.project.attributes.description}</p>
              </div>
              <img className="column is-8 is-offset-2 shadowNone" src={this.props.project.attributes.imgTop}/>
              <img className="column is-4 is-offset-4 shadowNone" src={this.props.project.attributes.imgTopSm}/>

              <div className="project-title">
                <h1>Project Summary</h1>
              </div>
              <div className="column is-10 is-offset-1 summary">

                <p className="summary" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.summary)} />

              </div>
              <div className="column is-12 details">
                <h3 className="column is-3">Problem Space</h3>
                <div className="challenge column is-8">
                <p className="problem is-8" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.problem)} />
                </div>
              </div>
              <div className="column is-12 details">
                <h3 className="column is-3">Challenges</h3>
                <div className="challenge column is-8">
                  <p className="problem is-8" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.challenges)} />
                  <p className="problem is-8" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.challengesTwo)} />
                </div>
              </div>

              <div className="project-title">
                <h1>Result</h1>
              </div>
              <div className="column is-10 is-offset-1">
                <p className="summary" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.result)}></p>
              </div>
              <div className="columns is-variable is-7 processGroup">
                <div className="column is-6 process-image">
                  <img src={this.props.project.attributes.resultOne}/>
                  <img className="shadowNone" src={this.props.project.attributes.resultOneSm}/>

                </div>
                <div className="column is-6">
                <h3 className="resultOneInfo" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.resultOneInfo)}></h3>
                <p className="resultOneInfoS" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.resultOneInfoS)}>

                </p>
                </div>
              </div>


              <div className="columns is-variable is-7 processGroup">
                <div className="column is-6 process-image">
                  <img src={this.props.project.attributes.summaryOne}/>
                </div>
                <div className="column is-6">
                <h3 className="resultTwoInfo" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.resultTwoInfo)}></h3>
                <p className="resultTwoInfoS" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.resultTwoInfoS)}></p>
                </div>
              </div>

              <div className="columns is-variable is-7 processGroup">
                <div className="column is-6 process-image">
                  <img src={this.props.project.attributes.resultThree}/>
                </div>
                <div className="column is-6">
                <h3 className="resultThreeInfo" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.resultThreeInfo)}></h3>
                <p className="resultThreeInfoS" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.resultThreeInfoS)}></p>
                </div>
              </div>

              <div className="columns is-variable is-7 processGroup">
                <div className="column is-6 process-image">
                  <img src={this.props.project.attributes.resultFour}/>
                </div>
                <div className="column is-6">
                <p className="resultFourInfoS" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.resultFourInfoS)}></p>
                </div>
              </div>


              <div className="columns is-variable is-7 processGroup">
                <div className="column is-6 process-image">
                  <img src={this.props.project.attributes.resultFive}/>
                </div>
                <div className="column is-6">
                <h3 className="resultFiveInfo" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.resultFiveInfo)}></h3>
                <p className="resultFiveInfoS" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.resultFiveInfoS)}></p>
                <p className="resultFiveInfoSTwo" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.resultFiveInfoSTwo)}></p>

                </div>
              </div>
              <div className="columns is-variable is-7 processGroup">
                <div className="column is-6 process-image">
                  <img src={this.props.project.attributes.resultSix}/>
                </div>
                <div className="column is-6">
                <p className="resultFourInfoS" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.resultSixInfoS)}></p>
                </div>
              </div>

              <div className="project-title">
                <h1>Process</h1>
              </div>
              <div className="column is-10 is-offset-1">
                <p className="summary" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.process)}></p>
              </div>
              <div className="column is-12 details researchMargin">
                <h3 className="column is-3">Background Research</h3>
                <div className="challenge column is-8">
                  <p className="problem research is-8" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.research)} />
                  <p className="problem researchS is-8" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.researchS)} />
                </div>
              </div>

              <div className="columns is-variable is-7 processGroup">
                <div className="column is-6">
                  <p className="processOneInfoS" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.processOneInfo)}></p>

                </div>
                <div className="column process-image is-6">
                  <img className="img-padding" src={this.props.project.attributes.processOne}/>
                </div>
                <div className="column is-12 process-image margin-bottom">
                  <img src={this.props.project.attributes.processOneS}/>
                </div>

              </div>


              <div className="columns is-variable is-7 processGroup">
                <div className="column is-6">
                  <p className="processTwo" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.processTwoInfo)}></p>
                </div>
                <div className="column is-4 process-image">
                  <img className="shadowNone" src={this.props.project.attributes.processTwo}/>
                </div>

              </div>

              <div className="columns is-variable is-7 processGroup">
                <div className="column is-6">
                  <p className="processThreeInfo" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.processThreeInfo)}></p>
                </div>
                <div className="column is-6 process-image processThree">
                  <img src={this.props.project.attributes.processThree}/>
                </div>

              </div>
              <div className="columns is-variable is-7 processGroup">
                <div className="column is-6">
                  <p className="processThreeInfo" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.processFourInfo)}></p>
                </div>
                <div className="column is-6 process-image processThree">
                  <p className="processThreeInfo" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.processFour)}></p>
                </div>

              </div>

              <div className="column is-4 is-offset-4 browse">
                    <Link className="projectLink" to="/">Back to Projects</Link>
              </div>



            </div>
          </div>
          </div>
          <div className="columns footer">
            <div className="is-two-fifths column">
              <div className="landing-info">
                <Link className="nav-home" to="/">Katelyn Duncan</Link>
                <ul className="social">
                  <li>
                    <a href="mailto:duncan.katelynj@gmail.com"><img className="shadowNone" src={mail}/></a>
                  </li>
                  <li>
                    <a href="https://github.com/kjduncan"><img className="shadowNone" src={github}/></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/duncankatelyn/"><img className="shadowNone" src={linkedIn}/></a>
                  </li>

                </ul>
              </div>
            </div>
            <div className="footer-solid column is-three-fifths">
              <ul className="menu">
                <li>
                  <a href="https://drive.google.com/open?id=1aOa1IHc5hr92wdlKwThYCk4a-wuCY-lx" target="_blank">Resume</a>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
      </div>
    );
  }
}

export default NewProject;
