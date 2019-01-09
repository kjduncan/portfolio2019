import React, { Component } from 'react';
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
                    <a href="">Resume</a>
                  </li>
                  <li>
                    <a onClick={() => {this.props.router("about")}}>About</a>
                  </li>
                </ul>
              </div>
              <div className="is-two-fifths column">
                <div className="landing-info">
                  <a className="nav-home" onClick={() => {this.props.router("home")}}>Katelyn Duncan</a>
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
            <div className="columns">
                {this.props.projects.map((card, index) => {
                  console.log('yo yo yo', card);
                  return (
                    <div className="column is-half">
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

export default Home;
