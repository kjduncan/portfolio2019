import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bulma';
import _ from 'lodash';

import Card from '../components/card';
import mail from '../images/mail.svg';
import linkedIn from '../images/linkedin.svg';
import github from '../images/github.svg';



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategories: []
    };
  }
  allCategories = ['Design', 'Code', 'Case Study']


  toggleCategory = (category) => {
    const clickedCategoryIndex = _.findIndex(this.state.selectedCategories, (selectedCategory) => selectedCategory === category);
    if (clickedCategoryIndex === -1) {
      const updatedCategories = _.clone(this.state.selectedCategories);
      updatedCategories.push(category);

      this.setState({
        selectedCategories: _.clone(updatedCategories)
      });
    } else {
      const updatedCategories = _.clone(this.state.selectedCategories);
      updatedCategories.splice(clickedCategoryIndex, 1);

      this.setState({
        selectedCategories: _.clone(updatedCategories)
      });
    }
  }

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
                    <a href="https://medium.com/@duncan.katelynj" target="_blank">Blog</a>
                  </li>
                  <li>
                    <Link to="about">About</Link>
                  </li>

                </ul>
                <div class="chev-wrap">
                    <div class="chevron"></div>


                </div>
              </div>
              <div className="is-two-fifths column">
                <div className="landing-info">
                  <h1>Katelyn Duncan</h1>
                  <h2>Experience Designer</h2>
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
            <ul className="filter-buttons">
              {this.allCategories.map(
                (category, index) => <li key={index + '_category_buttons'}><button className={this.state.selectedCategories.indexOf(category) >= 0 ? 'active' : 'inactive'} onClick={() => {this.toggleCategory(category)}}>{category}</button></li>
              )}
            </ul>

            <div className="columns is-variable is-7 card-wrapper">
                {this.props.projects.map((card, index) => {
                  if (card.categories.some(r=> this.state.selectedCategories.indexOf(r) >= 0) || this.state.selectedCategories.length < 1) {
                    return (
                      <div className="column is-half is-10-mobile is-offset-1-mobile">
                          <Card key={index} cardTitle={card.title} cardDescription={card.attributes.description} cardType={card.attributes.type} cardImgSrc={card.attributes.imgSrc} router={this.props.router} cardSlug={card.slug}></Card>
                      </div>
                    )
                  }
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

export default Home;
