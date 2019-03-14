import React, { Component } from 'react';
import './App.css';
import 'bulma';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from "react-router";


import Home from './pages/home.js';
import Project from './pages/project.js';
import NewProject from './pages/newproject.js';
import About from './pages/about.js';
import sideDoor from './images/sdlarge.png';
import space from './images/space.png';
import veritas from './images/veritas.jpg';
import transport from './images/knightBus.jpg';
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
import spaceLand from './images/spaceLand.png';
import spaceShip from './images/spaceshipFlame.svg';
import sun from './images/sun.svg';
import spaceLandTwo from './images/spaceLandTwo.png';
import spaceLandThree from './images/spaceLandThree.png';
import planetLow from './images/planetLow.png';
import planetMid from './images/spaceSketchT.JPG';
import planetMidT from './images/spaceSketchR.JPG';
import planetHigh from './images/spaceHigh.png';
import veritasUI from './images/veritasHome.png';
import ari from './images/Ari.svg';
import veritasEgg from './images/veritasEgg.png';
import veritasInbox from './images/veritasInbox.png';
import veripedia from './images/veripedia.jpg';
import worble from './images/worble.svg';
import egg from './images/egg.svg';
import ideas from './images/ideas.JPG';
import testOne from './images/testO.JPG';
import testTwo from './images/testT.jpg';
import react from './images/veritasReact.png';
import creditOne from './images/creditfreezeformF.jpg';
import creditTwo from './images/creditfreezeformT.jpg';
import creditThree from './images/creditfreezeformR.jpg';
import creditTask from './images/creditTask.png';
import creditThink from './images/creditThink.png';
import creditCurrent from './images/creditCurrent.png';
import creditMobile from './images/creditfreezeformMobile.jpg';
import cathedral from './images/cathedralOfLearning.jpg';
import welcome from './images/scavHuntWelcome.jpg';
import transitMap from './images/transitMap.png';
import draw from './images/draw.jpg';
import affinity from './images/affinity.png';
import storyboard from './images/storyboard.png';
import rules from './images/rules.jpg';
import huntResultOne from './images/huntResultOne.jpg';
import huntResultTwo from './images/huntResultTwo.jpg';
import sdProject from './images/sdproject.png';
import worbleProject from './images/worbleproject.png';
import transportProject from './images/transportproject.png';
import spaceProject from './images/spaceprojectsolid.png';
import cfProject from './images/creditfreezeproject.png';
import sdSold from './images/sellSD.png';
import sdList from './images/createListing.png';
import sdProfile from './images/userProfile.png';
import journeyMap from './images/CustomerJourneyMap.jpg';


let projects = [
  {
    title: 'SideDoor Inc',
    slug: 'sidedoor',
    attributes: {
        description: 'An online marketplace for all things real estate',
        type: 'UX | UI | Design | Frontend Code',
        imgSrc: sdProject,
        imgTop: sideDoorLg,
        summary: 'The ultimate goal of SideDoor was to <strong>empower users in the real estate market to complete transactions on their own</strong>, ultimately saving around 6% of their home value. My role was to design and develop the UI alongside one backend developer. We used Bootstrap, LESS, CakePhp, Illustrator, and Photoshop.',
        problem: 'The average home owner pays a real estate agent 6% of their home value when selling their home. <strong>On a $250,000 house sale, sellers would pay roughly $15,000</strong>. In contrast, sellers who choose to use a real estate attorney, who are able to handle the legal transaction, pay around $1,000. Many buyers want to maximize profits when selling their home, but are intimidated by the process and potential risks of selling on their own. SideDoor was created to <strong>empower homeowners as they go through the process of selling their home</strong> by connecting them with buyers and other resources such as real estate attorneys, title companies, and mortgage lenders.',
        challenges: 'A significant barrier that SideDoor was facing in the real estate market was the status quo and the present mindset around how real estate transactions should take place. <strong>Real estate agents  have a hold on the market</strong>, often being the only ones with access to the MLS, where most properties for sale are listed. And because most buyers use real estate agents, <strong>home owners are only able to obtain visibility by going through a realtor.</strong>',
        challengesTwo: 'When I was hired, the company was facing three major challenges with their platform. Based on insights uncovered from analytics data related to drop off rates, <strong>users were having trouble creating listings, searching for new listings, and more generally lacked understanding about the purpose of SideDoor and what they were able to do on the site as a whole.</strong>',
        summaryOne: propertySearch,
        summaryTwo: filter,
        summaryThree: propertyProfile,
        process: 'I started by conducting some secondary research about the real estate market in Colorado. As we began to ideate, I created a general sitemap to determine user flow. <strong>I would begin each page design with a lofi sketch of the layout, then move to digital wireframes.</strong> Finally, I would integrate content, brand colors, and UI details for final review and testing. Once designs were finalized, I began building the frontend of each page, passing them along to the backend before pushing to production.',
        research: 'For the research phase, I focused on analytics data that SideDoor had when I was hired. <strong>I paid particular attention to drop off points</strong> where users were leaving the site and tried to determine what problems they could be running into.',
        researchS: 'Another part of research was conducting competitive analysis. I wanted to get a clear understanding of the problem state and what others were doing to address this problem. I looked closely at Redfin, Zillow, and Trelora which were all attempting to aid buyers and sellers in non traditional ways. <strong>There wasn’t anyone that took on the same unique approach that SideDoor is attempting; which is to connect buyers with sellers directly without the need for real estate agents throughout the entire process.</strong>',
        processOne: siteMap,
        processOneS: journeyMap,
        processOneInfo: 'After understanding the problem space a little more clearly, I set out to design the experience. <strong>I created a general site map and customer journey maps to determine how users would flow through our site as a buyer, a seller, and an affiliate partner.</strong>',
        processTwo: sdWire,
        processTwoInfo: 'I created low fidelity wireframes for each page before moving on to mid and high fidelity mockups. I followed this process to obtain feedback early and iterate based on that feedback quickly.<strong> Medium and high fidelity mockups were created based on feedback from low fidelity wireframes.</strong>',
        processThree: sdStyle,
        processThreeInfo: '<strong>We created a living style guide on the web for this project from which we could pull components for our project.</strong> I started by creating a styleguide in illustrator that included typography, iconography, image sizes, and UI specifications. We then built it on the web and utilized these components throughout the project.',
        processFour: sdElements,
        result: 'The result was an easy-to-use platform that effectively enabled users to buy and sell homes and to be connected with helpful resources throughout the process. The SideDoor user base increased consistently after implementing these changes and continued to grow over the course of the following year. ',
        resultOne: sdSold,
        resultOneInfo: 'Information for Users',
        resultOneInfoS: 'I began with informational pages to address the issue of users not knowing what SideDoor was and what could be done on the site. <strong>These pages guided users through the process of buying and selling with SideDoor</strong>, including potential savings they could have.',
        resultTwoInfo: 'Searching for Properties',
        resultTwoInfoS: 'When creating the property search page, I focused on presenting key information without overwhelming the user with options. <strong>I included a detailed filter option list that reflected the variety of property features available in the market at that time.</strong> I used clear visual cues to draw users attention to key details such as price and an icon for users to save the property to their favorites list. ',
        resultTwo: sdShow,
        resultThree: sdList,
        resultThreeInfo: 'Creating a Listing',
        resultThreeInfoS: 'As I considered the listing creation tool for potential sellers on SideDoor’s platform, <strong>I wanted to reduce the cognitive load on the user, leaving the system to do the heavy lifting.</strong> In order to this, I organized input fields based on importance and similarity, making the most important aspects of the property listing visible first, and offering clear constraints for what was required and what wasn’t. <strong>Required fields were based on research conducted about real estate listing effectiveness and what buyers were most interested in knowing about a property when searching for homes.</strong> We collected this data through competitive analysis and observing common trends in real estate listings.',
        resultFour: sdShow,
        resultFourInfoS: '<strong>A feature that buyers felt was missing from the SideDoor platform was the ability to schedule showings to view a property.</strong> I decided to include this in the create a listing process so sellers were aware that it was a feature they could take advantage of through the SideDoor platform. This was also based on the company’s mission to connect buyers and sellers directly. Users were able to set available times for buyers to come and view their property, then connect direclty with them to finalize showing details.',
        resultFive: sdProfile,
        resultFiveInfo: 'User Dashboard',
        resultFiveInfoS: '<strong>The dashboard is place for users to create a profile, organize their favorite listings, create and manage listings, schedule showing times, and manage offers.</strong> I created unique dashboards based on whether the user was a buyer, seller, or professional affiliate. If a user was more than one type (seller and affiliate), I created a toggle feature so users could see both dashboards in the same place.',
        resultFiveInfoSTwo: 'When building the dashboard, I was concerned about overwhelming the user with too much information at once. <strong>I utilized design tools such as color, font size, and iconography to highlight importance such as actionable items, and organized information based on the type of user.</strong>'


    }
  },
  {
    title: 'Space Exploration Project',
    slug: 'space',
    attributes: {
      oldPage: true,
      description: 'A single page application for learning about space',
      type: 'UI | UX | Design | React Code',
      imgSrc: spaceProject,
      imgTop: space,
      summary: 'My task was to create an informational tool that was easy to use and easy to consume. I chose to create a single page web app all about the planets in our solar system. Users are able to explore each planet and learn more about them. I used react, Sketch and Illustrator. Take a look live at the link below.',
      siteLink: 'https://kjduncan.github.io/learn-space/',
      site: 'https://kjduncan.github.io/learn-space/',
      summaryOne: spaceLand,
      summaryOption: spaceLandThree,
      summaryTwo: spaceLandTwo,
      summaryThree: spaceShip,
      process: 'I started out with lo fidelity sketches for the ideation phase. This allowed me to test out a variety of ideas and obtain feedback. Once I settled on a general layout, I chose the UI elements including typography and colors. I then created all of the space design elements, including the planets and the spaceship using Illustrator. Finally, I used sketch to create digital mockups for feedback prior to building.',
      processOne: planetLow,
      processTwo: planetMid,
      processThree: planetMidT,
      processFour: planetHigh,
      processSecondary: 'Throughout ideation, it was important to constantly obtain feedback in order to further enhance usability, create a delightful experience, and to ensure that the information on the site would be easy to consume. I incorporated the feedback I received into the final design mockup.',
      result: 'The result was a single page web application with some cool illustration work, some animation to enhance the experience, and straight forward, easy to understand information about space.'
    }
  },
  {
    title: 'Veritas',
    slug: 'veritas',
    attributes: {
      oldPage: true,
      description: 'A native ios game in response to misinformation spread through social networks',
      type: 'Game Design | User Research | Illustration | React Native Code',
      imgSrc: worbleProject,
      imgTopSm: veritasUI,
      summary: 'Veritas is a game I created along with a team of designers and developers in hopes of providing a fun and easy way to address the pressing societal problem of misinformation. Specifically, we decided to tackle the spread of misinformation through social networks. The purpose of this game is to empower users to recognize misinformation in their daily lives. My role was to conduct user research, game ideation and development, and to create illustrations and iconography for the UI. We used Figma, Sketch, Illustrator, Invision, and ReactNative',
      siteLink: 'https://medium.com/@asitparida/veritas-avatar-based-intervention-for-misinformation-12f97bc26171',
      site: 'Read More On Medium',
      siteLinkO: 'https://projects.invisionapp.com/share/PKP3I9WDGBT#/330953902_Page1',
      siteO: 'Invision Prototype',
      summaryOne: ari,
      summaryThree: veripedia,
      process: 'We spent a lot of time in ideation, exploring how to most effectively combat misinformation using embedded design and ultimately decided to make a game. We did three rounds of testing, one low-fidelity and two high fidelity, primarily using thinkalouds and desirability studies. The feedback we received enabled us to iterate on our design early and quickly in order to make the experience more user centered.',
      processTwo: testOne,
      processThree: testTwo,
      processFourO: react,
      processSecondaryO: 'Following our third round of testing, the development team built an early stage react native prototype for future testing.',
      processOne: ideas,
      result: 'The result was a native app game prototype to combat misinformation mirroring social media. Players are given a creature to take care of and taught what to do through friends in the game. Eventually, players realize that their friends may be giving them bad information and are offered an excyclopedia type resource to check new information against. We hope that this game will enhance skills related to verifying information day to day. Our plan for the future is to keep building and testing and eventually launch the app on iOS.'
    }
  },
  {
    title: 'Nimbus 05610',
    slug: 'cmutransport',
    attributes: {
      oldPage: true,
      description: 'Reimagining the marketing of CMU transportation through an interactive orientation scavenger hunt',
      type: 'UX | User Research | Illustration',
      imgSrc: transportProject,
      summary: 'For this project, our team was tasked with conducting user research on the current state of the CMU transportation system and then developing a redesign to address glaring issues we uncovered. Our final design was to address the issue of visibility by offering an orientation scavenger to educate new members of the campus community about the transportation system. My role was to conduct user research and to create illustrations and iconography for the final UI design prototype. We used Tableu, Excel, Sketch, Figma, and Illustrator.',
      summaryOne:transitMap,
      summaryOption: cathedral,
      summaryThree: welcome,
      process: 'Our team conducted contextual interviews, think alouds and surveys to determine which pain points students were experiencing when interacting with the shuttle service. We created storyboards of a preferred future based on the findings from our initial research and ultimately determined that the primary problem was visibility and knwoledge of how the CMU transportation system worked. We wanted to tackle this issue in a fun and memorable way for members of the campus community.',
      processOne: affinity,
      processTwo: draw,
      processThree: storyboard,
      processFourO: rules,
      processSecondaryO: 'We created an initial prototype for testing to determine whether or not users responseded positively to the idea and found the experience engaging. 5 second tests were conducted to validate that users had positive impressions about the solution. Based on the results of the 5 second tests the design artifact was updated and we conducted think alouds with users to ensure that usability issues were eliminated.',
      result: 'The result was an app based interactive orientation scavenger hunt to educate new members of the campus community about the transportation and empower them to continue using it in the future.',
      resultOne: huntResultOne,
      resultTwo: huntResultTwo
    }
  },
  {
    title: 'Credit Freeze',
    slug: 'creditfreeze',
    attributes: {
      oldPage: true,
      description: 'A one stop shop to manage and freeze your credit online',
      type: 'UI | UX | User Research',
      imgSrc: cfProject,
      summary: 'When the Equifax data breach happened, I was one of many worried about the security of my credit moving forward. I went through the confusing process of trying to figure out how to freeze my credit with the top three agencies. I wanted to create an interface that cleaned up much of the clutter found on the three major credit agencies sites and credit freeze forms. I combined all of the information that each agency required to freeze your credit into one simple and straightforward form. I used Illustrator and Sketch.',
      summaryOne: creditTwo,
      summaryTwo: creditOne,
      summaryThree: creditThree,
      process: 'I began by researching the current process that users have to go through to freeze their credit. Based on this information and an initial task analysis, I created and performed think aloud tests with users to determine what the primary paint points were. The results of these tests informed my design process from ideation through the final prototype.',
      processOne: creditCurrent,
      processTwo: creditTask,
      processThree: creditThink,
      processFourO: creditMobile,
      processSecondaryO: 'My initial user tests revealed that a primary pain point was having to create several different accounts and remember several different PINs in order to manage ones credit. I worked to solve for these in my final design by creating one seamless user flow for all three credit agencies.',
      result: 'The result is a platform where users can manage their credit with all three credit agencies in one place. Users are able to freeze and unfreeze their credit easily without having to remember three different PINs or three different account credentials. The reduces cognitive load and creates ease of use during an otherwise stressful stituation.',
      resultOne: creditThree,
      resultTwo: creditOne

    }
  }
]

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    console.warn(prevProps);
    window.scrollTo(0, 0);
  }

  render() {
    return this.props.children;
  }
}

withRouter(ScrollToTop);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'home'
    }
  }

  updateRoute = (routeName) => {
    this.setState({
        route: routeName
      });
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className="App">
            <Route path="/" exact render={props => <Home {...props} projects={projects} />} />
            <Route path="/about/" component={About} />
            {projects.map((card, index) => {
              console.log(card);
              console.log(projects)
              // var element = (card.attributes.oldPage) ? Project : NewProject;
              if (card.attributes.oldPage) {
                return <Route path={`/project/${card.slug}`} render={props => <Project {...props} project={projects[index]} />} />
              } else {
                return <Route path={`/project/${card.slug}`} render={props => <NewProject {...props} project={projects[index]} />} />
              }
            })}
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
