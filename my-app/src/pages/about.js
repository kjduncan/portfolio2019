import React, { Component } from 'react';
import mail from '../images/mail.svg';
import linkedIn from '../images/linkedin.svg';
import github from '../images/github.svg';

class About extends Component {
  render() {
    return (
      <div className="About">
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
            <div className="column is-10 is-offset-1">
              <h1 className="hello">Hi, Im Katelyn</h1>

              <p className="aboutMe">I am a digital designer with over 3 years of experience designing and building digitally-focused prodcuts and services. I am currently based in Pittsburgh studying human computer interaction at Carnegie Mellon University.</p>
              <p className="aboutMe">
              My specialty is app and web design, user research, prototyping, and frontend development. I appreciate charmingly simple interfaces and funky design. I am constantly learning and am always ready to try my hand at new technologies.
              </p>
              <p className="aboutMe">I am always looking to work on exciting projects that solve complex problems in new and creative ways. I would love to work with you!</p>
              <p className="aboutMe">Reach out - <a className="projectLink" href="mailto:duncan.katelynj@gmail.com">duncan.katelynj@gmail.com</a></p>
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

export default About;
