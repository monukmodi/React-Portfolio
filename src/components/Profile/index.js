import React, { useContext } from 'react';
import './index.scss'
import TypedText from "../TypedText";
import SocialLinks from "../SocialLinks";
import Info from "../Info";
import Skills from "../Skills";
import {ThemeContext} from "../../context/ThemeContext";
import {useAnimation} from "../../use/animation";
import MonuImage from '../../images/monu.jpg'

const Profile = () => {
    const { backgroundImage, type } = useContext(ThemeContext);
    const { animation } = useAnimation();
    return (
        <div className="profile">
            <div className="profile__banner">
                <div className={`profile__photo ${animation}`} style={{backgroundImage: `url(${backgroundImage})`}} />
                <img
                    src={MonuImage}
                    alt={type}
                />
            </div>
            <div className="profile__content">
                <div className="profile__title">
                    Monu Kumar
                </div>
                <TypedText
                  dataText={
                      [
                          'JavaScript Engineer',
                          'Frontend Engineer',
                      ]
                  }
                />
                <SocialLinks/>
                <Info icon="location">
                    Bangalore / India
                </Info>
                <Skills />
            </div>
            <div className="profile__contact">
                <a target="_blank" href="https://drive.google.com/file/d/16FE5dVQNZ4DfBbja8aOieQib0HyhLlud/view?usp=sharing">
                        <span>
                            Download CV
                        </span>
                </a>
                <a href="mailto:monukr2012@gmail.com">
                        <span>
                            Contact Me
                        </span>
                </a>
            </div>
        </div>
    );
};

export default Profile;
