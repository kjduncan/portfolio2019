import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma';
import Home from './pages/home.js';
import Project from './pages/project.js';
import sideDoor from './images/sdlarge.png';
import space from './images/space.png';
import veritas from './images/veritas.png';
import transport from './images/knightBus.png';
import credit from './images/creditfreezeform1.jpg';
import _ from 'lodash';


let projects = [
  {
    title: 'SideDoor Inc',
    slug: 'sidedoor',
    attributes: {
        description: 'An online marketplace for all things realestate',
        type: 'UX | UI | Design | Frontend Code',
        imgSrc: sideDoor
    }
  },
  {
    title: 'Space Exploration Project',
    slug: 'space',
    attributes: {
      description: 'A single page application for learning about space',
      type: 'UI | UX | Design | React Code',
      imgSrc: space
    }
  },
  {
    title: 'Worble of Veritas',
    slug: 'veritas',
    attributes: {
      description: 'A native ios game in response to misinformation spread through social networks',
      type: 'Game Design | User Research | Illustration | React Native Code',
      imgSrc: veritas
    }
  },
  {
    title: 'Nimbus 05610',
    slug: 'cmutransport',
    attributes: {
      description: 'Reimagining the marketing of CMU transportation through an interactive orientation scavenger hunt',
      type: 'UX | User Research | Illustration',
      imgSrc: transport
    }
  },
  {
    title: 'Credit Freeze',
    slug: 'creditfreeze',
    attributes: {
      description: 'A one stop shop to manage and freeze your credit online',
      type: 'UI | UX | User Research',
      imgSrc: credit

    }
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'home'
    }
  }

  updateRoute = (routeName) => {
    console.log(routeName);
    this.setState({
        route: routeName
      });
  }
  render() {
    console.log(_.find);
    return (
      <div className="App">
        {this.state.route === 'home' ?
          <Home projects={projects} router={this.updateRoute}></Home>:
          <Project project={_.find(projects, ['slug', this.state.route])}></Project>
        }
      </div>
    );
  }
}

export default App;
