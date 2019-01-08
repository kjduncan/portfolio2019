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
import sideDoorLg from './images/sdfull.png';
import propertySearch from './images/summaryOne.png';
import propertyProfile from './images/propertyProfileL.png';
import filter from './images/filter.png';
import siteMap from './images/sitemap.png';
import sdWire from './images/sdwire.png';
import sdStyle from './images/sdStyle.png';
import sdElements from './images/sdComponent.png';
import sdBuy from './images/sdBuy.png';
import sdCust from './images/sdCust.png';
import sdMobileCalc from './images/sdMobileCalc.png';
import sdMobileProfile from './images/sdMobileProfile.png';
import sdMobileS from './images/sdMobileS.png';
import sdNegotiate from './images/sdNegotiate.png';
import sdSave from './images/sdSave.png';
import sdSell from './images/sdSell.png';
import sdShow from './images/sdShow.png';
import sdSimple from './images/sdSimple.png';
import sdDash from './images/sdDash.png';


let projects = [
  {
    title: 'SideDoor Inc',
    slug: 'sidedoor',
    attributes: {
        description: 'An online marketplace for all things real estate',
        type: 'UX | UI | Design | Frontend Code',
        imgSrc: sideDoor,
        imgTop: sideDoorLg,
        summary: 'The ultimate goal of SideDoor was to empower users in the real estate market to complete transactions on their own, ultimately saving around 6% of their home value. My role was to design and develop the UI alongside one backend developer. We used Bootstrap, LESS, CakePhp, Illustrator, and Photoshop.',
        summaryOne: propertySearch,
        summaryTwo: filter,
        summaryThree: propertyProfile,
        process: 'We started with key informational pages and a very light version of the property search page, creating a general sitemap to determine user flow. I would begin each page design with a lofi sketch of the layout, then move to digital wireframes. Finally, I would integrate content, brand colors, and UI details for final review and testing. Once designs were finalized, I began building the frontend of each page, passing them along to the backend before pushing to production.',
        processOne: siteMap,
        processTwo: sdStyle,
        processThree: sdWire,
        processFour: sdElements,
        processSecondary: 'We created a living style guide on the web for this project from which we could pull components for our project. I started by creating a styleguide in illustrator that included typography, iconography, image sizes, and UI specifications. We then built it on the web and utilized these components throughout the project. ',
        result: 'The result was an easy-to-use platform that effectively enabled users to buy and sell homes and to be connected with helpful resources throughout the process. The SideDoor user base increased consistently after implementing these changes and continued to grow over the course of the following year. ',
        resultOne: sdCust,
        resultTwo: sdShow,
        resultThree: sdDash,
        resultFour: sdBuy

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
