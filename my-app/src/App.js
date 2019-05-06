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
import space from './images/space.gif';
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
import ideas from './images/ideas.jpg';
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
import affinity from './images/affinityMap.JPG';
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
import journeyMap from './images/sdJourney.png';
import veritasMovie from './images/happyworble.gif';
import ariWelcome from './images/ariWelcome.png';
import worbleCustom from './images/worbleCustom.png';
import worbleInbox from './images/worbleInbox.png';
import worbleAction from './images/worbleAction.png';
import worbleSick from './images/worbleSick.png';
import worbleVeripedia from './images/worbleVeripedia.png';
import worbleProto from './images/worbleProto.png';
import transportTheme from './images/transportTheme.png';
import transportLandmark from './images/transportLandmarks.png';
import transportConfirm from './images/transportConfirm.png';
import transportInsight from './images/transportInsight.jpg';
import ideaMatrix from './images/ideaMatrix.jpg';
import transportStoryboard from './images/storyboards.jpg';
import transportThink from './images/transportThinkAloud.png';
import transportInvision from './images/transportInvision.JPG';
import spaceCode from './images/spaceCode.png';
import timGravelle from './images/tgHome.png';
import tgCode from './images/tgCode.png';
import tgContact from './images/tgContact.png';
import tgList from './images/tgList.png';
import tgProperties from './images/tgProperties.png';
import tgProject from './images/tgProject.png';
import worbleFull from './images/VeritasSlow.gif';




let projects = [
  {
    title: 'SideDoor Inc',
    slug: 'sidedoor',
    categories: ['Design', 'Code'],
    attributes: {
        description: 'An online marketplace for all things real estate',
        type: ['UX', 'UI', 'Design', 'Frontend Code'],
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
    title: 'Veritas',
    slug: 'veritas',
    categories: ['Design'],
    attributes: {
      description: 'A native ios game in response to misinformation spread through social networks',
      type: ['Game Design', 'User Research', 'React Native'],
      imgSrc: worbleProject,
      imgTopSm: veritasMovie,
      summary: 'Veritas is an app-based game I created along with a team of designers and developers in hopes of providing a fun and easy intervention to combat the pressing societal problem of misinformation. Specifically, we decided to <strong>tackle the spread of misinformation through social networks. The purpose of this game is to empower users to recognize misinformation in their daily lives. My role was to conduct user research, game ideation and development, and to create illustrations and iconography for the UI</strong>. We used Figma, Sketch, Illustrator, Invision, and ReactNative. Read more on <a className="site-link" href="https://medium.com/@asitparida/veritas-avatar-based-intervention-for-misinformation-12f97bc26171">Medium</a>.',
      problem: 'Anyone can post anything to a vast audience with little regulation via social media. A 2018 Pew Research Survey found that <strong>two thirds of Americans get news from social media even though they have concerns about its accuracy</strong>, and about 1 in every 4 American adults has shared fabricated content on social media (Matsa). Social media can create filter bubbles, which concentrate extreme beliefs and make people vulnerable to misinformation by surrounding them with people whose beliefs mirror their own, steering them in an extremist direction and away from objective fact.',
      challenges: "“(Technologies such as social media) lets you <strong>go off with like-minded people, so you're not mixing and sharing and understanding other points of view </strong... It's super important. It's turned out to be more of a problem than I, or many others, would have expected.” -Bill Gates",
      challengesTwo: 'In conducting a review of psychological literature, we found several major cognitive biases that make people vulnerable to fake news. Because of motivated reasoning, we are <strong>often more critical of news articles that we are motivated to disbelieve, while we are less critical of evidence that aligns with our beliefs</strong>. Likewise, confirmation bias: the idea that <strong>we seek out information that is in line with our beliefs while ignoring that which runs counter</strong>. The “sleeper effect” causes us to <strong>dissociate an article’s persuasive message from the source over time, giving unfounded power to unreliable sources.</strong>',
      siteLink: 'https://medium.com/@asitparida/veritas-avatar-based-intervention-for-misinformation-12f97bc26171',
      site: 'Read More On Medium',
      siteLinkO: 'https://projects.invisionapp.com/share/PKP3I9WDGBT#/330953902_Page1',
      siteO: 'Invision Prototype',
      summaryThree: veripedia,
      process: 'We began by conducting secondary research, pouring over existing literature related to misinformation and embedded game design. <strong>We spent a lot of time in ideation, exploring how to most effectively combat misinformation using embedded design and ultimately decided to make a game.</strong> Our user research consisted of three rounds of testing, one low-fidelity prototypes and two high fidelity prototypes. The feedback we received enabled us to iterate on our design early and quickly in order to make the experience more user centered.',
      research: 'For the research phase, we focused on academic articles, think alouds, and desirability studies. <strong>We paid particular attention to how users were responding to the worble they created, and their level of trust built over time playing the game.</strong> Many users connected with the worble, finding fun and approachable. An interesting insight we found from think alouds was the emotional connection users were having with their worble. <strong>Most users we tested were upset when their worble got sick and became more motivated to verify their information moving forward.</strong> This validated our hypotheses related to ownership and allowed us to move forward with the Veripedia as a resource.',
      processOneInfo: 'After developing a deeper understanding of embedded game design, we set out to examine how our experience would persuade users. We spent a lot of time discussing the story of the game and how users would progress. From this, <strong>we created low fidelity prototypes which allowed us to test the flow of our game very quickly with several users.</strong>',
      processFiveS: worbleFull,
      processFourInfo: 'After refining the game flow based on user feedback, we created a medium fidelity prototype using Invision for another round of testing. <strong>Our final, high fidelity prototype was then built using reactNative.</strong>',
      processFourO: react,
      researchS: 'Following our third round of testing, the development team built an early stage react native prototype for future testing.',
      processOne: worbleProto,
      processTwo: testTwo,
      processTwoInfo: '<strong>Through low fidelity prototype think alouds, we were able to find and refine flaws in our storyline that left users confused.</strong> We also found that users were connecting with the worble via personalization.',
      result: 'The result was an app game prototype built using reactNative with the goal of combating misinformation via social media. Players are given a creature to take care of and taught what to do through friends in the game. Eventually, players realize that their friends may be giving them bad information and are offered an excyclopedia type resource to check new information against. <strong>We hope that this game will enhance skills related to verifying information day to day and empower users to better discern reliable sources.</strong> Our plan for the future is to keep building and testing and eventually launch the app on iOS.',
      resultOneSm: ariWelcome,
      resultOneInfo: 'An assistant to ground players',
      resultOneInfoS: 'Players are first introduced to the game functions through Ari, <strong>a neutral AI character who provides the player with tips and brief explanations on how to proceed in the game.</strong> This manifestation of a ‘neutral’ source provides a figure players can trust and ultimately helps the them feel comfortable as the storyline begins involving misinformation.',
      summaryOne: worbleCustom,
      resultTwoInfo: 'Personalization',
      resultTwoInfoS: 'Players are given an egg to take care of. In order to develop attatchment between players and their worble, we allow them customize their egg and name their worble itself. <strong>These personalizing events tap into the pyschological concepts of perceived ownership and connection with things that are similar to oneself.</strong> Through these mechanisms, we hope to increase the efficacy of the persuasive message. ',
      resultThree: worbleInbox,
      resultThreeInfo: 'Mirroring Social Media',
      resultThreeInfoS: 'Throughout the beginning stages of the game, players are only given accurate information to build trust. <strong>After accomplishing several low challenge tasks, players are introduced to a new friend via an inbox messaging system.</strong> The friend offers them a tip on what their Worble might enjoy eating. Players are then encouraged to take this action. ',
      resultFour: worbleAction,
      resultFourInfoS: 'The first piece of advice players receive from a friend is accurate information and <strong>results in them leveling up and obtaining a new skill</strong> to practice with their worble. This offers a level of credibility to the friend, similar to credibility we give to those we interact with on social media.',
      resultFive: worbleSick,
      resultFiveInfo: 'Introducing Misinformation',
      resultFiveInfoS: 'Players are soon given a new piece of information from their friend. <strong>This time, the action results in their worble getting sick.</strong> As a result, players are set back in the game for a certain period of time while their worble heals. Through this interaction, we hope to encourage more vigilance as players receive information in the future.',
      resultSix: worbleVeripedia,
      resultSixInfoS: 'Ari quickly appears with a new resource for players: the Veripedia. This is a constant and credible source of truth that players are encouraged to refer back to whenever they receive information. <strong>As they move forward in the game, players are able to measure new information against what they find in the Veripedia, allowing them to make well-informed decisions as they care for their worble.</strong>'
    }
  },
  {
    title: 'Nimbus 05610',
    slug: 'cmutransport',
    categories: ['Design'],
    attributes: {
      description: 'Reimagining the marketing of CMU transportation through an interactive orientation scavenger hunt',
      type: ['UX', 'User Research', 'Illustration'],
      imgSrc: transportProject,
      summary: 'For this project, our team was tasked with conducting user research on the current state of the CMU transportation system and then developing a redesign to address glaring issues we uncovered. <strong>Our final design addressed the issue of visibility by offering an orientation scavenger to educate new members of the campus community about the transportation system.</strong> My role was to conduct user research and to create illustrations and iconography for the final UI design prototype. We used Tableu, Excel, Sketch, Figma, and Illustrator.',
      problem: 'A wealth of transportation options are available to CMU students. However, a vast number of students are unaware of the options available to them, in particular the underutilized CMU Shuttle and escort services. This is compounded by low visibility and limited formal channels for promotion of the service around CMU. As a result, a majority of CMU students only learn about the service through word of mouth. <strong>Many students mentioned that the CMU shuttle and escort service wasn’t their primary mode of transportation unless it was the only option available to them. This was due to the service being unreliable, overcrowded, and confusing to navigate</strong>',
      challenges: 'Based on preliminary research conducted by our team, a variety of pain points were identified. <strong>Our findings highlighted that knowledge of the shuttle system (or lack thereof) impacts the experience students and other CMU community members have with the shuttle service.</strong> This in turn heavily influences the usage of the service by the campus community. In particular, those who have a routine with the shuttle or escort service (implying a solid understanding of the system) expressed a positive experience with the current service as compared to those with a negative opinion of the system in part due to a lack of information regarding using the shuttle. We also discovered that many CMU community members used alternative transportation methods such as the <strong>city buses or walking as workarounds to their lack of knowledge regarding the existence and/or usability of the CMU shuttles and escorts. </strong>',
      summaryOne:transportLandmark,
      summaryOption: cathedral,
      summaryThree: welcome,
      process: '<strong>Our team utilized a variety of research methods over the course of several months to determine what type of intervention would be most suitable for this problem space.</strong> We conducted contextual interviews, think alouds and surveys to determine which pain points students were experiencing when interacting with the shuttle service. We wanted to tackle this issue in a fun and memorable way for members of the campus community.',
      research: 'Throughout the course of our research we utilized both qualitative and quantitative methods. We started out examining analytics and log data from RideSystems, an app that allows riders to see schedules and track shuttles in real time. <strong>From this we learned that riderships was on a steady decline year over year.</strong>',
      researchS: 'In order to examine the why behind this data, we moved forward with generative research, then evaluative methods to examine our proposed solution. <strong>We paid particular attention to how users were experiencing the current system and any workarounds they were required to employ in order to meet their daily transportation needs.</strong> Many users seemed to be unaware of or dissatisfied with the current shuttle and transportation. Through contextual inquiry, surveys, log data, and think alouds, we set out to understand why.',
      processOne: transportInsight,
      processOneS: affinity,
      processTwo: ideaMatrix,
      processTwoInfo: 'Based on the opportunities and insights gleaned from our generative research, we brainstormed various solutions. <strong>These ideas were placed on a Prioritization Matrix based on how much effort would be required to implement them as well as how much value they would provide to CMU students.</strong> We each voted for ideas we were interested in pursuing, then further discussed the ideas to narrow down to three.',
      processOneInfo: 'We began by conducting six contextual inquiries and think alouds of the current RideSystems App for navigating the shuttle service  with current and potential riders of the CMU transportation system. Following each interview, the team came together for interpretation sessions where we refined the insights gleaned from each interview. <strong>We then printed all of our interview notes and created a large affinity diagram to analyze and develop insights.</strong>',
      processThree: transportStoryboard,
      processThreeInfo: 'We decided to use storyboarding as our method for needs validation. <strong>We created storyboards of a preferred future based on the findings from our initial research and ultimately determined that the primary problem was visibility and knwoledge of how the CMU transportation system worked.</strong>',
      processFourInfo: 'The storyboarding activity validated our hypothesis of a need for a fun and easy way to learn about the CMU transportation system.<strong> We created low fidelity prototypes and conducted desirability studies via fifteen second tests in order to measure whether or not users were connecting with our idea.</strong> We also conducted think alouds to determine whether or not the flow of our application made sense.',
      result: 'The result was an app based interactive orientation scavenger hunt prototype meant to educate new members of the campus community about the transportation and empower them to continue using it in the future. After using our prototype, users felt more confident using the transportation system. Our solution tackles the root of the problem the Graduate Student Assembly at CMU is attempting to solve: <strong>providing “...access to multiple kinds of reliable transportation that allow for safe, direct commutes to and from campus.”</strong>',
      processFive: transportThink,
      processSix: transportInvision,
      processSixInfo:'Based on the feedback we received from our low fidelity prototypes, <strong>we created and medium fidelity prototype using Invision and conducted think alouds.</strong> All of our research and user testing insights culmitated in a final poster presentation to stakeholders. ',
      resultOne: transportTheme,
      resultOneInfo: 'Engaging Theme',
      resultOneInfoS: 'On the day of the orientation scavenger hunt, players access this web-based app via the browser on their mobile phones. They are immediately pulled into the exciting world of Harry Potter and invited to embark on this great adventure. <strong>The theme enhances the immersive experience, making the daunting task of learning a new transportation system more accessible through playfulness.</strong>',
      resultTwo: transportLandmark,
      resultTwoInfo: 'Key Landmarks',
      resultTwoInfoS: '<strong>Knowledge of routes and stops lowers the barrier of beginning to utilize the CMU shuttle and escort service.</strong> Players are given prompts that lead them to different landmarks around the city. They are able to find the landmarks on a map and determine the best route to get there. <strong>When entering the shuttle, players scan a QR code that saves their progress in the scavenger hunt. This is how the system will track who wins.</strong>',
      resultThree: transportConfirm,
      resultThreeInfoS: 'Once players reach a landmark, <strong>they are required to take a picture of their team with the landmark.</strong> Students then upload their picture to track their progress and save for a fun memento. The map players use in the game is a downloadable pdf for them to use in the future.'
    }
  },
  {
    title: 'Space Exploration Project',
    slug: 'space',
    categories: ['Design', 'Code'],
    attributes: {
      oldPage: true,
      description: 'A single page application for learning about space',
      type: ['UI', 'UX', 'Design', 'React Code'],
      imgTop: space,
      imgSrc: spaceProject,
      summary: 'My task was to create an informational tool that was easy to use and easy to consume. I chose to create a single page web app all about the planets in our solar system using react. Users are able to explore each planet and learn more about them. I used Sketch for my prototyping and mockups and Illustrator to create all of the visual assets. Take a look live at the link below.',
      siteLink: 'https://kjduncan.github.io/learn-space/',
      site: 'https://kjduncan.github.io/learn-space/',
      process: 'I started out with low fidelity sketches for the ideation phase. This allowed me to test out a variety of ideas and obtain feedback. Once I settled on a general layout, I chose the UI elements including typography and colors. I then created all of the space design elements, including the planets and the spaceship using Illustrator. Finally, I used sketch to create digital mockups for feedback prior to building.',
      processOne: planetLow,
      processTwo: planetMid,
      processThree: planetMidT,
      processFour: spaceCode,
      processSecondary: 'I coded the site using react, taking advantage of components to simplify the development process and make the site scalable in the future. I enhanced the experience with css animations. ',
    }
  },
  {
    title: 'Tim Gravelle Real Estate',
    slug: 'timgravelle',
    categories: ['Code'],
    attributes: {
      oldPage: true,
      description: 'A small business real estate website',
      type: ['UI', 'UX', 'Wordpress', 'PHP'],
      imgTop: timGravelle,
      imgSrc: tgProject,
      summary: 'The Real Montana is a boutique real estate firm based in Whitefish Montana. I was hired as the frontend developer on this project. We were asked to create a website for a small boutique real estate firm in Whitefish Montana. The client wanted us to show off their services, allow users to search for properties, and highlight contact information. I used wordpress to build the site and Illustrator and Photosphop to collaborate on the design work.',
      siteLink: 'https://therealmontana.com/',
      site: 'https://kjduncan.github.io/learn-space/',
      process: 'The designer and I worked closesly together and with the client to determine what would best suit their needs. I offered recommendations about how the site should be built and what technologies would best suit their needs and their budget. We determined that Wordpress would be the most sustainable solution for them. I implemented a very simple template that could be easily customized and then built the site on top of that. I connected the site to an MLS plugin that would allow users to easily browse properties. I also implemented a contact form for users to get in touch and start the process of buying or selling a home.',
      processOne: tgContact,
      processTwo: tgList,
      processThree: tgProperties,
      processFour: tgCode,
      processSecondary: 'Wordpress allowed for the site to be more accessible for the client moving forward. I built it so they would be able to make changes to the content on their own and easily list new properties as needed.',
    }
  },
  {
    title: 'Credit Freeze',
    slug: 'creditfreeze',
    categories: ['Case Study'],
    attributes: {
      oldPage: true,
      description: 'A one stop shop to manage and freeze your credit online',
      type: ['UI', 'UX', 'User Research'],
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
