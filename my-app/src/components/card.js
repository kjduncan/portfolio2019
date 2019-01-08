import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="Card">
          <div>
            <div className="project-image" style={{backgroundImage: `url(${this.props.cardImgSrc})`}}>
            </div>
          </div>
          <div className="columns">
            <div className="project-info is-full column">
              <div className="project-title column is-half">
                <h3> {this.props.cardType}</h3>
                <h1>{this.props.cardTitle}</h1>
              </div>
              <div className="project-description">
                <p>{this.props.cardDescription}</p>
                <button className="project-btn" onClick={() => {console.log(this.props); this.props.router(this.props.cardSlug)}}>view project</button>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Card;
