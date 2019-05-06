import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

class Card extends Component {
  render() {
    return (
      <Link className="cardGroup" to={`/project/${this.props.cardSlug}`}>
      <div className="Card">
          <div>
            <div className="project-image" style={{backgroundImage: `url(${this.props.cardImgSrc})`}}>
            </div>
          </div>
          <div className="columns is-desktop">
            <div className="project-info is-full column">
              <div className="project-title column is-half-desktop is-full-tablet">
                <h3>
                  {this.props.cardType.map((cardType, index) => <span>{cardType} {index < this.props.cardType.length - 1 && ' | '}</span>)}
                </h3>
                <h1>{this.props.cardTitle}</h1>
              </div>
              <div className="project-description">
                <p>{this.props.cardDescription}</p>
                <Link to={`/project/${this.props.cardSlug}`} className="project-btn">view project</Link>
              </div>
            </div>
          </div>
      </div>
      </Link>
    );
  }
}

export default Card;
