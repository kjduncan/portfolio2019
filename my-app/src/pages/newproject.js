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
              <ul className="menu menu-secondary">
                <li>
                  <a href="https://drive.google.com/file/d/1tXVV4rQDXK1agCFioc6v2JrrlikpZqwq/view?usp=sharing" target="_blank">Resume</a>
                </li>
                <li>
                  <a href="https://medium.com/@duncan.katelynj" target="_blank">Blog</a>
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
              <div className="project-title-large">
                <h1>{this.props.project.title}</h1>
                <h3>
                  {this.props.project.attributes.type.map((cardType, index) => <span>{cardType} {index < this.props.project.attributes.type.length - 1 && ' | '}</span>)}
                </h3>
              </div>
              <div className="project-description-lg column is-8 is-offset-2">
                <p>{this.props.project.attributes.description}</p>
              </div>
              <div className="columns is-variable is-12">
                  <div className="column is-6">
                    <img className="column is-12 shadowNone" src={this.props.project.attributes.imgTop}/>
                    <img className="column is-10 is-offset-1 shadowNone" src={this.props.project.attributes.imgTopSm}/>
                  </div>
                  <div className="column is-6">
                      <div className="project-title">
                        <h1>Project Summary</h1>
                      </div>
                      <div className=" summary">

                        <p dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.summary)} />

                      </div>
                  </div>

              </div>
              <div className="column is-6 is-offset-6 details">
                <h3 className="column is-12 padL">Problem Space</h3>
              </div>
              <div className="column is-6 is-offset-6 details">
                <div className="challenge column is-12 padL">
                  <p className="problem research is-12" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.problem)} />
                </div>
              </div>
              <div className="column is-6 is-offset-6 details">
                <h3 className="column is-12 padL">Challenges</h3>
              </div>
              <div className="column is-6 is-offset-6 details">
                <div className="challenge column is-12 padL">
                  <p className="problem research is-12" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.challenges)} />
                  <p className="problem researchS is-12" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.challengesTwo)} />
                </div>
              </div>
              <div className="columns">
                <div className="column is-6">
                </div>
                <div className="column is-6">
                    <div className="project-title">
                      <h1>Result</h1>
                    </div>
                    <div className="summary">
                      <p dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.result)}></p>
                    </div>
                </div>
              </div>

              <div className="columns is-variable processGroup">
                <div className="column is-6 process-image">
                  <img src={this.props.project.attributes.resultOne}/>
                  {this.props.project.attributes.resultOneSm &&
                  <img className="shadowNone" src={this.props.project.attributes.resultOneSm}/>
                }
                </div>
                <div className="column is-6">
                <h3 className="resultOneInfo" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.resultOneInfo)}></h3>
                <p className="resultOneInfoS" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.resultOneInfoS)}>

                </p>
                </div>
              </div>


              <div className="columns is-variable processGroup">
                <div className="column is-6 process-image">
                  <img src={this.props.project.attributes.summaryOne}/>
                </div>
                <div className="column is-6">
                <h3 className="resultTwoInfo" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.resultTwoInfo)}></h3>
                <p className="resultTwoInfoS" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.resultTwoInfoS)}></p>
                <p className="resultTwoInfoSTwo" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.resultTwoInfoSTwo)}></p>

                </div>
              </div>

              <div className="columns is-variable processGroup">
                <div className="column is-6 process-image">
                  <img src={this.props.project.attributes.resultThree}/>
                </div>
                <div className="column is-6">
                <h3 className="resultThreeInfo" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.resultThreeInfo)}></h3>
                <p className="resultThreeInfoS" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.resultThreeInfoS)}></p>
                </div>
              </div>

              {this.props.project.attributes.resultFourInfoS && this.props.project.attributes.resultFour &&
                <div className="columns is-variable processGroup">
                  <div className="column is-6 process-image">
                    <img src={this.props.project.attributes.resultFour}/>
                  </div>
                  <div className="column is-6">
                  <h3 className="resultFourInfo" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.resultFourInfo)}></h3>
                  <p className="resultFourInfoS" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.resultFourInfoS)}></p>
                  </div>
                </div>
              }

              {this.props.project.attributes.resultFive && this.props.project.attributes.resultFiveInfo && this.props.project.attributes.resultFiveInfoS && this.props.project.attributes.resultFiveInfoSTwo &&
                <div className="columns is-variable processGroup">
                  <div className="column is-6 process-image">
                    <img src={this.props.project.attributes.resultFive}/>
                  </div>
                  <div className="column is-6">
                  <h3 className="resultFiveInfo" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.resultFiveInfo)}></h3>
                  <p className="resultFiveInfoS" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.resultFiveInfoS)}></p>
                  <p className="resultFiveInfoSTwo" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.resultFiveInfoSTwo)}></p>

                  </div>
                </div>
              }
              {this.props.project.attributes.resultSix && this.props.project.attributes.resultSixInfoS &&
              <div className="columns is-variable processGroup">
                <div className="column is-6 process-image">
                  <img src={this.props.project.attributes.resultSix}/>
                </div>
                <div className="column is-6">
                <h3 className="resultSixInfo" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.resultSixInfo)}></h3>
                <p className="resultSixInfoS" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.resultSixInfoS)}></p>
                <p className="resultSixInfoSTwo" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.resultSixInfoSTwo)}></p>
                </div>
              </div>
            }
            <div className="columns">
              <div className="column is-6">
              </div>
                <div className="column is-6">
                    <div className="project-title">
                      <h1>Process</h1>
                    </div>
                    <div className="summary">
                      <p dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.process)}></p>
                    </div>
                </div>
              </div>
              <div className="column is-6 is-offset-6 details">
                <h3 className="column is-12 padL">Background Research</h3>
              </div>
              <div className="column is-6 is-offset-6 details researchMargin">
                <div className="challenge column is-12 padL">
                  <p className="problem research is-12" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.research)} />
                  <p className="problem researchS is-12" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.researchS)} />
                </div>
              </div>
{this.props.project.attributes.processOne &&
              <div className="columns is-variable processGroup">
              <div className="column process-image is-6">
                <img className="shadowNone" src={this.props.project.attributes.processOne}/>

              </div>
                <div className="column is-6">
                  <p className="processOneInfoS" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.processOneInfo)}></p>

                </div>

                <div className="column is-6 process-image margin-bottom">
                  <img className="shadowNone" src={this.props.project.attributes.processOneS}/>
                </div>

              </div>
            }


{this.props.project.attributes.insightPOne &&
              <div className="columns is-variable is-full processGroup">
                <div className="column process-image is-6">
                  <img className="shadowNone" src={this.props.project.attributes.insightPOne}/>
                  <img className="shadowNone" src={this.props.project.attributes.insightPThree}/>
                </div>
                <div className="column is-6">
                  <p className="processOneInfoS" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.processOneInfoSub)}></p>
                </div>
              </div>
            }
            {this.props.project.attributes.insightPThree &&
              <div className="columns is-variable is-full processGroup">
                <div className="column process-image is-6">
                  <img className="shadowNone" src={this.props.project.attributes.insightPTwo}/>
                  <img className="shadowNone" src={this.props.project.attributes.insightPFour}/>
                </div>
              </div>
            }

            {this.props.project.attributes.insightOne &&

              <div className="columns is-variable is-full processGroup">
                <div className="column process-image is-6 is-offset-6">
                  <h3 className="title"> Key Findings</h3>
                  <ul className="findings">
                    <li>

                      <div className="column is-12 padL">
                        <p className="title">Finding 1.</p>
                        <p className="title" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.insightOne)}></p>
                        <p dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.insightOneInfo)}></p>
                        <p dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.insightOneInfoQ)}></p>
                      </div>
                    </li>
                    <li>
                      <div className="column is-12 padL">
                        <p className="title">Finding 2.</p>
                        <p className="title" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.insightTwo)}></p>
                        <p dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.insightTwoInfo)}></p>
                        <p dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.insightTwoInfoQ)}></p>
                      </div>
                    </li>
                    <li>
                      <div className="column is-12 padL">
                        <p className="title">Finding 3.</p>
                        <p className="title" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.insightThree)}></p>
                        <p dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.insightThreeInfo)}></p>
                        <p dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.insightThreeInfoQ)}></p>
                      </div>
                    </li>
                    <li>
                      <div className="column is-12 padL">
                        <p className="title">Finding 4.</p>
                        <p className="title" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.insightFour)}></p>
                        <p dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.insightFourInfo)}></p>
                        <p dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.insightFourInfoQ)}></p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            }
            {this.props.project.attributes.insightFive &&
              <div className="columns is-variable is-full processGroup">
                <div className="column process-image is-6 title mTop">
                  <img className="shadowNone" src={this.props.project.attributes.insightFiveP}/>
                  <img className="shadowNone" src={this.props.project.attributes.insightFivePS}/>
                  {this.props.project.attributes.insightFivePT &&
                  <img className="shadowNone" src={this.props.project.attributes.insightFivePT}/>
                }

                </div>
                <div className="column is-6">
                  <h3 className="title" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.insightFive)}></h3>
                  <p dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.insightFiveInfo)}></p>
                  </div>
                </div>
            }
            {this.props.project.attributes.insightSix &&
              <div className="columns is-variable is-full processGroup">
                <div className="column process-image is-6 title mTop">
                  <img className="shadowNone" src={this.props.project.attributes.insightSixP}/>
                </div>
                <div className="column is-6">
                  <h3 className="title" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.insightSix)}></h3>
                  <p dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.insightSixInfo)}></p>
                </div>
              </div>
            }
            {this.props.project.attributes.insightSixPS &&
            <div className="columns is-variable is-full processGroup">
              <div className="column process-image is-6 title mTop">
                <img className="shadowNone" src={this.props.project.attributes.insightSixPS}/>
                <img className="shadowNone" src={this.props.project.attributes.insightSixPT}/>
                <img className="shadowNone" src={this.props.project.attributes.insightSixPTh}/>
              </div>
              <div className="column is-6 mTop">
                <p dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.insightSixInfoS)}></p>
              </div>
            </div>
          }
          {this.props.project.attributes.insightSevenInfoS &&
            <div className="columns is-variable is-full processGroup">
            <div className="column is-6">
              <img src={this.props.project.attributes.insightSevenInfoP}/>
              <p className="caption" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.insightSevenInfoS)}></p>
              <img src={this.props.project.attributes.insightSevenInfoPS}/>
              <p className="caption" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.insightSevenInfoT)}></p>
              <img src={this.props.project.attributes.insightSevenInfoPTh}/>
              <p className="caption" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.insightSevenInfoTh)}></p>
            </div>
              <div className="column is-6">
                <h3 dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.insightSeven)}></h3>
                <p dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.insightSevenInfo)}></p>
              </div>
            </div>
          }
          {this.props.project.attributes.insightEight &&
            <div className="columns is-variable is-full processGroup">
            <div className="column is-6">
              <img src={this.props.project.attributes.insightEightP}/>
            </div>
              <div className="column is-6">
                <h3 dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.insightEight)}></h3>
                <p dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.insightEightInfo)}></p>
              </div>
            </div>
          }

          {this.props.project.attributes.decisionOne &&

            <div className="columns is-variable is-full processGroup">

              <div className="column is-12">
                <ul className="findings">
                  <li className="columns is-variable">
                    <div className="column is-3 is-offset-1 is-8-mobile">
                      <img className="shadowNone" src={this.props.project.attributes.decisionOneP}/>
                    </div>
                    <div className="column is-6 is-offset-2 padL">
                      <div className="column is-4">
                        <p className="title">Priority 1.</p>
                      </div>
                      <div className="column is-12">
                        <p className="title" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.decision)}></p>
                        <p dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.decisionInfo)}></p>
                      </div>
                      </div>
                  </li>
                  <li className="columns is-variable">
                    <div className="column is-3 is-offset-1 is-8-mobile">
                      <img className="shadowNone" src={this.props.project.attributes.decisionTwoP}/>
                    </div>
                    <div className="column is-6 is-offset-2 padL">
                      <div className="column is-4  is-8-mobile">
                        <p className="title">Priority 2.</p>
                      </div>
                      <div className="column is-12">
                        <p className="title" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.decisionTwo)}></p>
                        <p dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.decisionTwoInfo)}></p>
                      </div>
                    </div>
                  </li>
                  <li className="columns is-variable">
                    <div className="column is-3 is-offset-1  is-8-mobile">
                      <img className="shadowNone" src={this.props.project.attributes.decisionThreeP}/>
                    </div>
                    <div className="column is-6 is-offset-2 padL">
                      <div className="column is-4 is-full-mobile">
                        <p className="title">Priority 3.</p>
                      </div>
                      <div className="column is-12">
                        <p className="title" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.decisionThree)}></p>
                        <p dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.decisionThreeInfo)}></p>
                        <p dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.decisionThreeInfoQ)}></p>
                      </div>
                    </div>
                  </li>

                {this.props.project.attributes.decisionFourP &&
                  <li className="columns is-variable">
                    <div className="column is-3 is-offset-1 is-8-mobile">
                      <img className="shadowNone" src={this.props.project.attributes.decisionFourP}/>
                    </div>
                    <div className="column is-6 is-offset-2 padL">
                      <div className="column is-4 is-full-mobile">
                        <p className="title">Priority 4.</p>
                      </div>
                      <div className="column is-12">
                        <p className="title" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.decisionFour)}></p>
                        <p dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.decisionFourInfo)}></p>
                        <p dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.decisionFourInfoQ)}></p>
                      </div>
                    </div>
                  </li>
                }
                </ul>
              </div>
            </div>
          }


          {this.props.project.attributes.processTwo && this.props.project.attributes.processTwoInfo &&
              <div className="columns is-variable processGroup">
                <div className="column is-6 process-image">
                  <img className="shadowNone" src={this.props.project.attributes.processTwo}/>
                </div>
                <div className="column is-6">
                  <p className="processTwo" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.processTwoInfo)}></p>
                </div>


              </div>
            }
            {this.props.project.attributes.processThree && this.props.project.attributes.processThreeInfo &&

              <div className="columns is-variable processGroup">
                <div className="column is-6 process-image processThree">
                  <img className="shadowNone" src={this.props.project.attributes.processThree}/>
                </div>
                <div className="column is-6">
                  <p className="processThreeInfo" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.processThreeInfo)}></p>
                </div>


              </div>
            }
              <div className="columns is-variable processGroup">
                <div className="column is-6 process-image processFour">
                  <img className="shadowNone" src={this.props.project.attributes.processFive}/>
                  <img className="column is-10" src={this.props.project.attributes.processFiveS}/>
                </div>
                <div className="column is-6">
                  <p className="processFourInfo" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.processFourInfo)}></p>

                </div>

                <div className="columns is-variable processGroup">
                  <div className="column is-4 process-image">
                    <img className="shadowNone" src={this.props.project.attributes.processSix}/>
                  </div>
                  <div className="column is-6">
                    <p className="processSix" dangerouslySetInnerHTML={this.rawHtml(this.props.project.attributes.processSixInfo)}></p>
                  </div>


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
                  <a href="https://drive.google.com/file/d/1tXVV4rQDXK1agCFioc6v2JrrlikpZqwq/view?usp=sharing" target="_blank">Resume</a>
                </li>
                <li>
                  <a href="https://medium.com/@duncan.katelynj" target="_blank">Blog</a>
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
