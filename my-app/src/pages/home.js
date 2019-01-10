import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bulma';

import Card from '../components/card';
import mail from '../images/mail.svg';
import linkedIn from '../images/linkedin.svg';
import github from '../images/github.svg';



class Home extends Component {

  render() {
    return (
      <div className="Home">
        <div className="columns">
            <div className="gif-stuff column is-three-fifths">
                <ul className="menu">
                  <li>
                    <a href="https://drive.google.com/open?id=1aOa1IHc5hr92wdlKwThYCk4a-wuCY-lx" target="_blank">Resume</a>
                  </li>
                  <li>
                    <Link to="about">About</Link>
                  </li>
                </ul>
              </div>
              <div className="is-two-fifths column">
                <div className="landing-info">
                  <Link className="nav-home" to="/">Katelyn Duncan</Link>
                  <h1>Interaction Design</h1>
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
          </div>
          <div className="container">
            <div className="columns is-variable is-7 card-wrapper">
                {this.props.projects.map((card, index) => {
                  return (
                    <div className="column is-half is-10-mobile is-offset-1-mobile">
                        <Card key={index} cardTitle={card.title} cardDescription={card.attributes.description} cardType={card.attributes.type} cardImgSrc={card.attributes.imgSrc} router={this.props.router} cardSlug={card.slug}></Card>
                    </div>
                  )
                })}
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
                  <a href="https://drive.google.com/open?id=1aOa1IHc5hr92wdlKwThYCk4a-wuCY-lx" target="_blank">Resume</a>
                </li>
                <li>
                  <Link to="about">About</Link>
                </li>
              </ul>
            </div>
          </div>

      </div>
    );
  }
}

export default Home;
