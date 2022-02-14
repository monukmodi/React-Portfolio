import React from 'react';
import moment from 'moment';
import Title from "../common/Title";
import './index.scss';
import ResumeItem from "./Item";
import { Helmet } from 'react-helmet';

const Resume = () => {
    return (
        <div className="page" id="resume">
            <Helmet>
            <Helmet>
          <meta name="description" content="React Portfolio | Resume | Javascript Developer | Monu Kumar Modi | mkmodi | Frontend Developer | React JS Developer | Software Engineer | " />
          <meta name="author" content="Monu Kumar Modi | mkmodi | Monu Kumar"></meta>
          <meta name="keywords" content="HTML, CSS, JavaScript, React JS, React hooks, Bootstrap, Context API, Semantic UI, Redux, Git" />
          </Helmet>
            </Helmet>
            <Title icon={'fa fa-briefcase'}>
                Resume - Total Experience {moment().diff('10/25/2019', 'years', true).toFixed(1)} Years
            </Title>
            <ResumeItem
                date={'May 2021 - Aug 2021'}
                title={'Software Engineer(Frontend)'}
                company={'Elixia Tech Solutions'}
                // logo={'https://media-exp1.licdn.com/dms/image/C510BAQE9E2q8pBQRQA/company-logo_200_200/0?e=1612396800&v=beta&t=5WOqSFuKuclqm95UWbyPH2mBHjS4trCZDeJZJ4zNkZg'}
            >
                • Work on front-end with extensive use of React, Hooks, Formik, Semantic UI and JavaScript for developing Web Application. <br/>
                • Develop CSS with bootstrap and BEM from sketches.
                • Performed code review
                • Performed CRUD functionalities for Logistic Operations
                • Was one of key developer of the project
                <h4 className="text-center">Description</h4>
                <p>
                <b>Elixia Tech Solutions</b> provides software solutions for transportation, logistics, and supply chain management industries.

                    I developed features like graphical charts for presentation data with High chart js, tooltip, modal and much more.
                </p>
            </ResumeItem>
            <ResumeItem
                date={'June 2020 – April 2021'}
                title={'Freelance Developer'}
                // company={'Learngram'}
                // logo={'https://media-exp1.licdn.com/dms/image/C4D0BAQG3PHtpLchi8A/company-logo_100_100/0?e=1612396800&v=beta&t=yKG1oC59MovpZSDKOO3q9LtgtkNEAFNqreDdam9XFuQ'}
            >
                • Develop clean, maintainable and highly interactive single page web applications using
                Javascript, React, HTML, Bootstrap. <br/>
                • Responsible for implementing features and fixing the bugs of the web pages from sketches.
                <h4 className="text-center">Description</h4>
                <p>
                    I worked with <b>Leargram</b>  and <b>hi5mart</b> as a Freelance Developer. 
                </p>
                <p>
                <b>Leargram</b>  is an EdTech startup with a vision to empower institutions offer their educational content to learners through a tech platform that helps learners
                </p>
                <p>
                <b>Hi5mart</b> is a premier online grocery store with a wide variety of quality products to choose
                </p>
            </ResumeItem>
            <ResumeItem
                date={'Feb 2019 – May 2020'}
                title={'React JS Developer'}
                company={'Nvest Technologies'}
                // logo={'https://media-exp1.licdn.com/dms/image/C4D0BAQGCja_0_IGhiA/company-logo_100_100/0?e=1612396800&v=beta&t=mYjWahrtMQiY2D4qgYX-pifsRkjENdc0huOwCfbnFlE'}
            >
                • Developed clean, maintainable and highly interactive single page web applications using 
                HTML5, CSS3, Bootstrap, JavaScript and React JS, Chart JS that meets accessibility and web browser standards for website.<br/>
                • Responsible for design and development of the web pages from mock-ups (PSD). <br/>
                • Integerated API for Crypto Price. <br/>
                • Applied optimization techniques to reduce page size and load times to enhance user experience.<br/>
                • Used React-Router to turn application into Single Page Application.<br/>
                • Extensively used Git for version controlling and regularly pushed the code to GitHub.<br/>
                • Used Chart.JS to Visualize API data into the Graph.<br/>
                <h4 className="text-center">Description</h4>
                <p>
                    I worked in <b>Nvest Technologies</b>. I worked with React.js, and Javascript, but I mainly focused on front-end development.
                    
                    This company works on Crypto and Blockchain. My teammates and I develop User Interface for the CryptoExchange(<b>assests.io</b> <b>app.gxnitrous.com</b>) using React.js. I made the structure of codes for projects how they should be designed and how components should communicate with each other.

                </p>
            </ResumeItem>
            <Title icon={'fa fa-university'}>
                Education
            </Title>
            <ResumeItem
                date={'2014 – 2018'}
                title={'Lakshmi Narain College Of Technology'}
                company={'India'}
                // logo={'https://media-exp1.licdn.com/dms/image/C510BAQE3p1j1WWn1Fg/company-logo_100_100/0?e=1612396800&v=beta&t=TPDysSQsDB8h-UUybls55tpUvFfzxzUpSBW3wD1qqoM'}
            >
                Bachelor's Degree in Computer Science Engineering
            </ResumeItem>
        </div>
    );
};

export default Resume;
