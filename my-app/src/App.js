import React, { Component } from 'react';
import './App.css';
import 'bulma';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from "react-router";
import ReactGA from 'react-ga';


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
import creditQuestion from './images/creditfreezeform3.jpg';
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
import wProject from './images/womanProject.png';
import chaHome from './images/chachaHome.png';
import wAffinity from './images/affinity.jpg';
import wPersonaOne from './images/wPersonaOne.png';
import wPersonaTwo from './images/wPersonaTwo.png';
import wMapOne from './images/wMapOne.png';
import wMapTwo from './images/wMapTwo.png';
import smartQ from './images/smartQA.png';
import appointment from './images/appointment.png';
import doctReq from './images/doctorRequest.png';
import patReq from './images/patientRequest.png';
import checklist from './images/checklist.png';
import wStory from './images/gStory.png';
import wStoryT from './images/gStory2.png';
import reverseW from './images/reverse.jpg';
import coDesignO from './images/codesign1.jpg';
import coDesignT from './images/codesign2.jpg';
import coDesignTh from './images/codesign3.jpg';
import wLow from './images/Frame.png';
import wLowO from './images/Frame1.png';
import wLowT from './images/Frame2.png';
import trust from './images/trust.png';
import simplify from './images/simplify.png';
import power from './images/power.png';
import hProject from './images/headspaceProject.png';
import hsLand from './images/hsLand.png';
import hReflect from './images/dailyReflection.png';
import ewReport from './images/eowReport.png';
import vision from './images/visionBoard.png';
import visionHome from './images/visionHome.png';
import hNotify from './images/hNotify.png';
import hBoard from './images/weekendBoard.jpg';
import modeExample from './images/modeExample.jpg';
import modeLast from './images/modeLast.png';
import modeUpcoming from './images/modeUpcoming.png';
import emotionChart from './images/emotionChart.png';
import masterB from './images/balanceMaster.png';
import underA from './images/underachiever.png';
import decompress from './images/decompressor.png';
import hsIdeas from './images/groudIdeation.jpg';
import hsPlan from './images/hsPlan.jpg';
import hsContent from './images/hsContent.jpg';
import hsGoodTime from './images/hsGoodTime.jpg';
import hsDailyProto from './images/hsDailyProto.png';
import hsReportProto from './images/hsReportProto.png';
import hsVisionProto from './images/hsVisionProto.png';
import set from './images/set.svg';
import intentional from './images/reflection.svg';
import playful from './images/playful.svg';
import reflection from './images/intetional.svg';
ReactGA.initialize('UA-75590490-1');

function initializeReactGA() {

    ReactGA.pageview('/home');
}



let projects = [
  {
    title: 'Headspace',
    slug: 'Headspace',
    categories: ['Design'],
    attributes: {
        description: 'Reflective activities to improve attitudes, behavior, and engagement on the weekend',
        type: ['UX', 'UI', 'Design', 'Rapid Prototyping', 'User Research'],
        imgSrc: hProject,
        imgTopSm: hsLand,
        summary: "Over the course of 12 weeks, I worked with a group of 5 designers and researchers <strong>to develop design principles around how Headspace can better ‘Show up’ for its users on the weekend.</strong> Headspace asked us specifically to look at people who are making positive changes in their lives and <strong>explore the impact of the transition from weekdays to the weekend on their behavior.</strong> My role was User Researcher and UX Designer.",
        problem: 'Self improvement and positive behavior change are common areas of interest among Headspace users. Typically, however, <strong>users tend to drop off during the weekend and struggle to get back on track when the new week begins.</strong> Consistent, active engagement with the app tends to be impacted by the weekends, and we set out to understand why.',
        challenges: 'Designing for long-term engagement in order to support users in accomplishing their goals is a delicate balance. <strong>Encouragement via push notifications, which are frequently ignored, tends to be ineffective, and daily reporting activities can feel onerous, causing users to drop off.</strong>',
        challengesTwo: 'For more traditional working professionals who work Monday thru Friday, <strong>there is a stark contrast between week and weekend behavior.</strong> Weeks tend to be meticulously planned and very busy, while weekends are a large chunk of unstructured time. This leads to <strong>imbalances in behavior and attitudes as people transition back and forth.</strong>',
        summaryOne: ewReport,
        summaryTwo: filter,
        summaryThree: propertyProfile,
        process: "We began by <strong>talking to people who were seeking out positive behavior change in their lives about how the weekend impacts their goals</strong>. This, coupled with expert interviews, competitive analysis, and an exploration of Headspace's current offerings, enriched our knowledge of the problem space. <strong>We also worked to understand attitudes toward the weekend</strong> through a public installation in the CMU MHCI lab space, mode mapping exercises, and two week long diary study.",
        research: 'Our research phase began with the goal of better understanding the impact that weekends have on positive behavior change.',
        researchS: '<strong>We interviewed 6 people who were seeking out positive behavior change in their lives as well as 2 academic experts in the area of long term habit formation and attitudinal shifts. We also surveyed over 70 people to better understand their attitudes toward the weekend</strong>. We analyzed survey results and were able to uncover key insights that informed our mode mapping activity and interviews.',
        processOne: hBoard,
        processOneInfoSub: '<strong>We conducted 7 interviews centered around a mode mapping exercise</strong> where users could consider the different modes or roles they take on during the weekend. They would then map their feelings over time related to these roles. Users first mapped the previous weekend and then their ideal weekend for comparison. Through this research exercise, <strong>we were able to find common behavioral trends among our users.</strong>',
        insightOne: 'Weekends are under A LOT of pressure',
        insightOneInfo: 'Most people hope to use their weekends to recharge for the next week, but they also want to attend social events, do chores, get ahead on work, spend time with loved ones, rest AND relax. We found that people often put a lot of pressure on what the weekend can realistically do for them.',
        insightOneInfoQ: '“The weekend is one of the less mindful times that I have, because when I don’t think I have any obligations, I want to let everything go otherwise I don’t feel recharged. Mindfulness can be taxing.”',
        insightTwo: 'Nobody feels great about their weekends',
        insightTwoInfo: 'Typically, the unrealistic expectations and large amounts of goals people have of weekends leave them feeling unsatisfied, stressed, and still exhausted on Sunday evenings.',
        insightTwoInfoQ: 'Weekends are often the time that I get most of my household chores done. I also hope that I can relax, recharge, and have some fun. I always have high hopes and grand plans, but usually end up not accomplishing much.”',
        insightThree: 'Weekend feelings start on Thursday (sometimes even earlier)',
        insightThreeInfo: 'Even if it is just the thought of doing nothing in a few days, people beging to consider their weekend plans as early as Thursday evening. This includes both intentional planners and those who plan more loosely or not at all.',
        insightThreeInfoQ: '“I start thinking about my weekend on Thursday night or Friday morning. Knowing that I have a break ahead is usually what gets me through to the end of the week.”',
        insightFour: 'Weekends typically “happen to” most people',
        insightFourInfo: 'Sunday evenings tend to leave people wanting more or even regretful and guilty about not accomplishing enough during the weekend. This tends to exacerbate the stress they feel about the week ahead and inhibits their ability to enjoy the remaining weekend time.',
        insightFourInfoQ: '“On Sunday, I tried to relax, get a good night’s sleep, but I still felt stressed about the next week”',
        insightPOne: modeExample,
        insightPTwo: modeLast,
        insightPThree: modeUpcoming,
        insightPFour: emotionChart,
        insightFive: 'Weekend Behavioral Archetypes',
        insightFiveInfo: 'Based on common behaviors and attitudes we observed, we were able to develop three behavioral archetypes: The Master of Balance, The Underachiever, and The Decompressor. <strong>The Master of Balance</strong> is an aspirational archetype who realistically plans weekends, setting aside time to relax without feeling guilty. <strong>The Underachiever</strong> plans to do too many things and is unable to accomplish everything, leaving them feeling disappointed. <strong>The Decompressor</strong> deliberately sets time aside to relax, but tends to do too little on Saturdays which leads to anxiety and stress on Sunday afternoons. These archetypes guided us through our ideation phase as we tried to come up with solutions that would enable each group to achieve weekend success.',
        insightFiveP: masterB,
        insightFivePS: underA,
        insightFivePT: decompress,
        insightSix: 'Ideation',
        insightSixInfo: 'With archetypes in mind, <strong>we began sketching solutions.</strong> We focused on activities, features, and UI components that would enable each archetype to get closer to becoming the Master of Balance. ',
        insightSixP: hsIdeas,
        insightSixInfoS: 'We grouped our ideas into three key direction areas to pitch to the client. <strong>These areas were: weekend planning, weekend content, and good time metrics.</strong> Weekend planning focused on helping users better prepare for the weekend by setting realistic goals and intentions. Weekend content focused on changing the look and feel of the Headspace app for the weekend and delivering users weekend specific content. Good time metrics focused on users defining what a good time looked like for them and then quanitfying that and returning a visualization of analytics for users to see.',
        insightSixPS: hsPlan,
        insightSixPT: hsContent,
        insightSixPTh: hsGoodTime,
        insightSeven: 'Prototyping and Diary Study',
        insightSevenInfo: 'Based on client feedback, <strong>we chose the topic area of weekend planning.</strong> We began prototyping and conducted a <strong>two week diary study with 6 users to test our ideas.</strong> Based on an initial survey, users were categorized into our two main archetypes: Decompressor and Underachiever. We then notified users to complete a set of activities to complete including a daily reflection, a weekly reflection, an end of week report and a weekend vision board. On the second week, we switched which activities they received. By doing this, <strong>we were able to better understand and measure which activities were most effective for each archetype in helping them have a more successful weekend and feel more prepared and rested for the week ahead.</strong>',
        insightSevenInfoS: 'Daily Reflections',
        insightSevenInfoP: hsDailyProto,
        insightSevenInfoT: 'End of Week Report',
        insightSevenInfoPS: hsReportProto,
        insightSevenInfoTh: 'Vision Board Prototype',
        insightSevenInfoPTh: hsVisionProto,
        insightEight: 'Final Design Decisions',
        insightEightInfo: 'Our ideation and diary study allowed us to identify key features and design principles that would be most useful to Headspace moving forward. While we tried to follow Headspace’s design patterns as we built our prototype, we realized that moving forward, they will be using our insights wherever they make the most strategic sense.',
        decisionOne: 'Our ideation and rapid prototyping and testing exercises allowed us to identify key features and user values that would be later incorporated into our final design decisions. We identified 3 priorities that women held in making decisions for their on feminine care.',
        processOneInfo: 'Throughout the course of our project, we placed a board in public spaces with the simple questions <strong>"How do you feel about the weekend?".</strong> Each week, people would add their thoughts, feelings, and hopes for the upcoming weekend. We analyzed trends and were able to uncover patterns over time.',
        decision: 'Help users set intentions',
        decisionInfo: 'Assisting users in getting ahead of the weekend before the weekend comes is helpful. Setting intentions also helps people think more realistically about their weekend.',
        decisionOneP: set,
        decisionTwo: 'Offer thoughtful reflection activities',
        decisionTwoInfo: 'Taking time to reflect can help inform weekend intention setting and also help users be more mindful and present during their weeks.',
        decisionTwoP: reflection,
        decisionThree: 'Facilitate a more balanced and intentional weekend',
        decisionThreeInfo: '“Sunday scaries” affect “Decompressors” the most. By encouraging more reflection during the week, people won’t have to completely disengage on Saturday, thus taking some pressure off of Sunday.',
        decisionThreeP: intentional,
        decisionFour: 'Maintain playfulness and lightweight interactions',
        decisionFourInfo: 'While these activities can be helpful and effective for users, maintaining playful and lightweight interactions is essential to prevent activities from being perceived as laborious.',
        decisionFourP: playful,
        result: 'The result is <strong>two key feature recommendations for Headspace related to more effective weekend planning as well as encouraging presence throughout the week.</strong> The features include daily reflective moments, weekly reporting, and a weekend vision boarding activity.',
        resultOne: hReflect,
        resultOneInfo: 'Daily reflective moments',
        resultOneInfoS: 'An opportunity to reflect each day about how they are feeling. Users choose a character that best depicts how they are feeling and then enter a descriptive word for more personalization.',
        resultTwoInfo: 'Simple end of week report',
        resultTwoInfoS: 'At the end of the week, users are presented with a report on their home which shows all of their daily reflections throughout the week. This is able to inform how users plan for their weekend ahead.',
        resultTwoInfoSTwo: 'Users are better able to understand their moods and notice patterns throughout the week that may be helpful in changing behavior, being more present, and enjoying moments of joy more frequently.',
        resultTwo: ewReport,
        resultThree: vision,
        resultThreeInfo: 'Vision board to set intentions',
        resultThreeInfoS: 'Users are able to be more mindful about their weekend ahead by selecting words to describe what they want from their upcoming weekend in a madlib style activity. The interactive vision board responds to user input and personalizes the vision board image accordingly.',
        resultFour: visionHome,
        resultFourInfoS: "Their personalized vision board and intention statement replace the hero image on users' home page. This becomes a welcome reminder of what they had hoped for the weekend and reminds users to take moments to be present, reflective, and intentional throughout their day.",
        resultFive: hNotify,
        resultFiveInfo: 'Manage notifications and track progress',
        resultFiveInfoS: 'In order to avoid notification fatigue, we allow users to determine when and how they would like to receive notifications.',
        resultFiveInfoSTwo: 'Notifications for the daily reflections and vision board activity stand out from other Headspace notifications through visual changes focused on personalization.'


    }
  },
  {
    title: 'Chacha',
    slug: 'chacha',
    categories: ['Design'],
    attributes: {
        description: 'Redesigning the gynecological onboarding process',
        type: ['UX', 'UI', 'Design', 'Rapid Prototyping', 'User Research'],
        imgSrc: wProject,
        imgTopSm: chaHome,
        summary: 'Over the course of 15 weeks, I worked on a small team with one other designer and our advisor to <strong>understand barriers women face when accessing healthcare</strong>. This was a passion project of ours, something that hit very close to home, and we were excited to use design thinking to create a meaningful intervention in this space. My role was User Researcher and UX Designer. Our primary goal was to <strong>alleviate some of the fear, stress, confusion, and burden women feel when navigating their health.</strong>',
        problem: 'Getting specialized female reproductive care is an important part of any women’s health. Studies show, however, that a high percentage of women have fears about the care they receive from gynecologists and reluctance to access care. <strong>So how can we help women feel more confident about managing their feminine health?</strong>',
        challenges: 'A significant <strong>barrier that women face when accessing medical care is fear</strong>. They are afraid facing judgement from their doctor, their friends, or their family. They are afraid that the procedures will hurt. They are afraid of the costs that they may incure.',
        challengesTwo: 'Womens Health is a space that is very complex and unique, <strong>influenced by many different systems each with their own complexities</strong>. As we began this project, it was very important to clearly define our focus area, be specific about our goals, and <strong>overcome our desire to solve everything.</strong>',
        summaryOne: appointment,
        summaryTwo: filter,
        summaryThree: propertyProfile,
        process: 'We began by <strong>talking to professionals in the womens health space</strong>. This, coupled with a survey and extensive secondary research into the current state, enriched our knowledge of the problem space. <strong>We also worked to involve women in the community</strong> through a co-design workshop, speed dating, desirability studies, and user testing.',
        research: 'Our research phase began with the goal of better understanding the barriers women are facing when accessing healthcare services and what current interventions look like.',
        researchS: '<strong>We interviewed 3 medical professionals, 3 health educators, 1 doula, and surveyed over 400 women to better understand how women view and manage their feminine health</strong>. We analyzed survey results and affinitized our interview data points to be able to identify patterns and insights. We developed personas and user journey maps to better visualize what we found.',
        processOne: wAffinity,
        processOneInfoSub: '<strong>Personas and User Journey Maps are helpful tools in better identifying and uncovering painpoints that users experience within a system.</strong> Through these exercises, we were able to develop ideas based on key opportunity areas where an intervention would be most effective. We analyzed the context, delivery method, and technology we would use for each case.',
        insightOne: 'Reactive vs proactive',
        insightOneInfo: 'Many women don’t feel a need to go to the gynecologist regularly because they generally feel healthy and don’t have any pressing medical issues that need to be addressed.',
        insightOneInfoQ: '“I have not had any issues that would require me to visit a gynecologist.”',
        insightTwo: 'Fear is a primary barrier',
        insightTwoInfo: 'From concerns about feeling judged to wondering whether it will hurt, women generally avoid the gynecologist because of fear.',
        insightTwoInfoQ: '“I’m scared - it seems awkward and uncomfortable.”',
        insightThree: 'Power imbalances impact doctor patient relationship',
        insightThreeInfo: 'The procedures commonly performed at the gynecologist oftne put women in a vulnerable position. They are unsure of what they should expect from their gynecologist and feel unprepared to even ask.',
        insightThreeInfoQ: '“It feels like a black box. I’m unsure what I should even be getting out of the experience.”',
        insightFour: 'Information can be overwhelming and unreliable',
        insightFourInfo: 'We found that the primary resource women are utilizing is the internet. Anonymity, freedom from judgement, and the over all convenience were key motivators behind this behavior.',
        insightFourInfoQ: 'There is a wide array of information available to access here, however, it is often difficult to determine what is accurate and will be helpful in their decision-making processes.',
        insightPOne: wPersonaOne,
        insightPTwo: wPersonaTwo,
        insightPThree: wMapOne,
        insightPFour: wMapTwo,
        insightFive: 'Need Validation',
        insightFiveInfo: 'With key insights uncovered, we moved forward with ideation. We illustrated preferred futures through storyboarding and used those storyboards to speed date and validate user needs.',
        insightFiveP: wStory,
        insightFivePS: wStoryT,
        insightSix: 'Ideation',
        insightSixInfo: 'After validating user needs, we began ideating concepts for possible solutions. <strong>We conducted a reversed assumptions exercise</strong> to better understand our own assumptions of the problem space and dive into possible solutions. This exercise allowed us to <strong>more deeply analyze our insights, breathe new life into our ideas, and uncover additional opportunities that we had overlooked.</strong>',
        insightSixP: reverseW,
        insightSixInfoS: '<strong>We also conducted a codesign session with members of the community</strong> ranging in age from early 20s to early 60s. The group included designers, health educators, and gynecologists. Through this workshop, we were able to develop a better understanding of the barriers women are facing when accessing healthcare and <strong>how they would like these barriers to be addressed.</strong> These learnings helped us identify our design priorities moving forward into prototyping.',
        insightSixPS: coDesignO,
        insightSixPT: coDesignT,
        insightSixPTh: coDesignTh,
        insightSeven: 'Rapid Prototyping & Testing',
        insightSevenInfo: 'Through an interactive design process, we quickly moved between paper to digital prototypes as well as testing with users in order to quickly learn what was valuable. We developed and tested three initial concepts with women who reported feeling uncomfortable and unconfident with their gynecological care.',
        insightSevenInfoS: 'Onboarding',
        insightSevenInfoP: wLow,
        insightSevenInfoT: 'What to expect at your next appointment',
        insightSevenInfoPS: wLowO,
        insightSevenInfoTh: 'Initial consultation and empowerment',
        insightSevenInfoPTh: wLowT,
        insightEight: 'Final Design Decisions',
        insightEightInfo: 'Our ideation and rapid prototyping and testing exercises allowed us to identify key features and user values that would be later incorporated into our final design decisions. We identified 3 priorities that women held in making decisions for their on feminine care.',
        decisionOne: 'Our ideation and rapid prototyping and testing exercises allowed us to identify key features and user values that would be later incorporated into our final design decisions. We identified 3 priorities that women held in making decisions for their on feminine care.',
        processOneInfo: 'We synthesized our findings in an affinity diagram, uncovering key insights that would guide our decisions moving forward and inspire our final design concept.',
        decision: 'Build trusted relationships',
        decisionInfo: 'Trust is a crucial component to a positive gynecological experience. This includes trust between women and their provider as well as protecting personal medical information.',
        decisionOneP: trust,
        decisionTwo: 'Simplify the process',
        decisionTwoInfo: 'Women don’t want to repeat sensitive information several times when going through the process of managing their feminine health. By simplifying the process, we are able to relieve unnecessary stress and inconvenience.',
        decisionTwoP: simplify,
        decisionThree: 'Empower women to be more prepared',
        decisionThreeInfo: 'Being better prepared for their gynecological appointments will enable women to get more out of the experience, ask important questions, and obtain the information they need to make crucial decisions regarding their sexual and reproductive health.',
        decisionThreeP: power,
        result: 'The result is Chacha a <strong>chatbot app designed to empower women in navigating and managing their feminine health</strong>. Chacha answers users’ questions, encourages users to find providers, and supports appointment scheduling and onboarding with providers. Additionally, Chacha helps users feel more prepared for appointments by keeping track of users’ list of questions they may have for their medical provider.',
        resultOne: smartQ,
        resultOneInfo: 'Intelligent Q&A',
        resultOneInfoS: 'Users can ask Chacha questions related to their reproductive or sexual health. This information remains confidential unless they decide to share with their provider.',
        resultTwoInfo: 'Finding providers and scheduling appointments',
        resultTwoInfoS: 'Chacha recommends doctors in their area. Users can browse providers, read reviews, and choose a provider that works best for them.',
        resultTwoInfoSTwo: 'Chacha then allows users to schedule an appointment and connect with their chosen provider. ',
        resultTwo: doctReq,
        resultThree: doctReq,
        resultThreeInfo: 'Onboarding users with their provider',
        resultThreeInfoS: 'Once an appointment has been made, Chacha helps ease the onboarding process between patients and providers. Based on the patient’s scheduled appointment procedures, providers can request a patient’s medical history in advance.',
        resultFour: patReq,
        resultFourInfoS: 'Patients can easily share medical history that is often sensitive and uncomfortable to share in person.',
        resultFive: checklist,
        resultFiveInfo: 'Preparing users for their appointment',
        resultFiveInfoS: 'Chacha’s question checklist helps users keep track of questions they want to ask their provider at their next appointment. ',
        resultFiveInfoSTwo: 'The function also helps users browse a list of popular questions to inspire questions on topics they may not have been aware of.'


    }
  },
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

      description: 'A one stop shop to manage and freeze your credit online',
      type: ['UI', 'UX', 'User Research'],
      imgSrc: cfProject,
      summary: 'When the Equifax data breach happened, I was one of many worried about the security of my credit moving forward. <strong>I went through the confusing process of trying to figure out how to freeze my credit with the top three agencies.</strong> I wanted to create an interface that cleaned up much of the clutter found on the three major credit agencies sites and credit freeze forms. I combined all of the information that each agency required to freeze your credit into one simple and straightforward form. I used Illustrator and Sketch.',
      problem: "In 2017 Equifax had a large data breach, compromising millions of individual's crucial private financial information. As a result, <strong>these individuals became both vulnerable and susceptible to fraudulent activity including identity theft.</strong> It seemed that there wasn't much anyone could do about it and it felt frustrating that nobody was holding Equifax accountable in any way.",
      challenges: "Every time you freeze or unfreeze your credit, it costs $10. There is no way to create an account or save credit card information for future transactions (but also this should be free!). <strong>I kept wishing that there was just one place to apply to freeze my credit, save my security PINs, and manage the freezing and unfreezing process in the future.</strong> I set out to create an interface that cleaned up much of the clutter found on the three major credit agencies' sites and credit freeze forms. <strong>My goal was for users to be able to go to this site to apply to freeze their credit at all three major credit agencies</strong>, pay the fees to do so, and then return to this site to unfreeze or freeze in the future.",
      summaryOne: creditTwo,
      summaryTwo: creditOne,
      summaryThree: creditThree,
      process: 'I began by <strong>researching the current process that users have to go through to freeze their credit.</strong> Based on this information and an initial task analysis, I created and performed think aloud tests with users to determine what the primary paint points were. The results of these tests informed my design process from ideation through the final prototype.',
      research: '<strong>There is a lot of inconsistency between the three systems</strong> and a huge reliance on the user to remember and save vital security information across the three systems for future use. This <strong>creates a significant amount of cognitive load for users during an already stressful and frustrating experience.</strong> Then, to top it all off, users are expected to enter their credit card information into sites that leaked their information to begin with. Because the systems are slightly different, but require similar information, it is likely that users will become confused and frustrated as they work through the task of freezing and unfreezing their credit.',
      processTwo: creditTask,
      processTwoInfo: 'I created a task flow chart for a user who is trying to freeze their credit in order to protect their personal security from fraud and identity theft. <strong>The environment and stress levels will vary from user to user</strong>, however, it is reasonable to assume that this is a stressful situation given that users personal information has been compromised and they are having to take steps to protect themselves.',
      processThree: creditThink,
      processThreeInfo: 'My initial user tests revealed that <strong>a primary pain point was having to create several different accounts and remember several different PINs in order to manage ones credit.</strong> I worked to solve for these in my final design by creating one seamless user flow for all three credit agencies.',
      result: 'The result is <strong>a platform where users can manage their credit with all three credit agencies in one place.</strong> Users are able to freeze and unfreeze their credit easily without having to remember three different PINs or three different account credentials. The reduces cognitive load and creates ease of use during an otherwise stressful stituation.',
      resultOne: credit,
      resultOneInfo: 'A Single Site',
      resultOneInfoS: 'Users will have the ability to use one site to manage all three credit freezing processes',
      resultTwo: creditQuestion,
      resultTwoInfo: 'Simplified and Secure Information Gathering',
      resultTwoInfoS:'Upon signing up, users will input personal information required for freezing credit. <strong>This is only required one time.</strong>',
      resultThree: creditQuestion,
      resultThreeInfo: 'Identity Verification',
      resultThreeInfoS: '<strong>Users will verify their identity by answering security questions related to their financial history.</strong> This mirrors questions major credit agencies use to verify identity.',
      resultFour: creditOne,
      resultFourInfo: 'Dashboard',
      resultFourInfoS: "<strong>Users will have a dashboard to manage their credit freezes.</strong> They can freeze and unfreeze each agency individually. The system remembers their PIN for them so they don't have to"

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
