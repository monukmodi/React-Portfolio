import React from 'react';
import './index.scss';
import Title from "../common/Title";
import { Helmet } from 'react-helmet';

const About = () => {
    return (
        <div className="page" id="about">
            <Helmet>
            <Helmet>
          <meta name="description" content="React Portfolio | Javascript Developer | Monu Kumar Modi | mkmodi | Frontend Developer | React JS Developer | Software Engineer | " />
          <meta name="author" content="Monu Kumar Modi | mkmodi | Monu Kumar"></meta>
          <meta name="keywords" content="HTML, CSS, JavaScript, React JS, React hooks, Bootstrap, Context API, Semantic UI, Redux, Git" />
          </Helmet>
            </Helmet>
            <Title>
                About Me
            </Title>
            <div className="row">
                <div className="column">
                    <strong>
                        Hi, I am Monu Kumar
                    </strong>
                    <p>
                        Self-taught, self-driven, passionate learner and developer focusing on React, Javascript Technologies. Looking forward to working with ingenious teams on challenging projects.
                        <br/> <br/>
                        I’m an easy going person that works well with everyone. I enjoy being around different types of people and I like to always challenge myself to improve at everything I do.
                        <br/><br/>
                        I have a great passion for learning languages and exploring the world and also programming. I have always loved technology and programming. And this is my profession now.

                    </p>
                </div>
            </div>
            <Title>
                My philosophy of programming
            </Title>
            <div className="row">
                <div className="column">

                    <p>
                        I have a thorough understanding of JavaScript. I believe that developers can grasp any framework or tool if they have a solid understanding of core Technologies.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
