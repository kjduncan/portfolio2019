import React, { Component } from 'react';
import { Link } from "react-router-dom";
import mail from '../images/mail.svg';
import linkedIn from '../images/linkedin.svg';
import github from '../images/github.svg';
import '../App.css';
import 'bulma';
import kate from '../images/myProfile.png';

class About extends Component {
  render() {
    return (
      <div className="About">
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
                  <Link to="about">About</Link>
                </li>
                <li>
                  <Link className="nav-home" to="/">Katelyn Duncan</Link>
                </li>
              </ul>
            </div>
            <div className="column is-10 is-offset-1 is-mobile">
              <div className="columns profile">
                <div className="column is-4 is-three-quarters-mobile">
                <img src={kate}></img>
                </div>
                <div className="column is-6 is-offset-2 is-full-mobile">
                <h1 className="hello">Hi, Im Katelyn</h1>
                <p className="aboutMe">I am a product designer with over 4 years of experience designing and building digitally-focused products and services. I am currently based in Boulder, Colorado.</p>
                <p className="aboutMe">
                My specialty is UI/UX design, product strategy, user research, and frontend development in both mobile and web-based applications. I appreciate charmingly simple interfaces that really nail accessibility and enhance the user experience with micro-interactions that pack a punch. I love getting in the weeds with complex problems, am constantly learning and am always ready to try my hand at new technologies.
                </p>
                <p className="aboutMe">I am looking for full time design work with a human-centered team focused on exploring tough human challenges. I would love to work with you!</p>
                <p className="aboutMe">Reach out - <a className="projectLink" href="mailto:duncan.katelynj@gmail.com">duncan.katelynj@gmail.com</a></p>
                </div>
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
                  <a href="https://drive.google.com/file/d/1tXVV4rQDXK1agCFioc6v2JrrlikpZqwq/view?usp=sharing" target="_blank">Resume</a>
                </li>
                <li>
                  <a href="https://medium.com/@duncan.katelynj" target="_blank">Blog</a>
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

export default About;
