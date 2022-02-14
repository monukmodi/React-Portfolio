import React, { useState } from 'react';
import { projects } from './data';
import Title from "../common/Title";
import WorkItem from "./Item";
import WorksMenu from "./Menu";
import { Helmet } from 'react-helmet';

const initalState = projects.filter(p => p.type === 'react');

const Works = () => {
    const [selectedProjects, setSelectedProjects] = useState(initalState);
    const [selectedType, setSelectedType] = useState('react');

    function handleMenuChange(type) {
        setSelectedProjects(projects.filter(p => p.type === type));
        setSelectedType(type);
    }


    return (
        <div className="page" id="works">
            <Helmet>
            <Helmet>
          <meta name="description" content="React Portfolio| | Project | Javascript Developer | Monu Kumar Modi | mkmodi | Frontend Developer | React JS Developer | Software Engineer | " />
          <meta name="author" content="Monu Kumar Modi | mkmodi | Monu Kumar"></meta>
          <meta name="keywords" content="HTML, CSS, JavaScript, React JS, React hooks, Bootstrap, Context API, Semantic UI, Redux, Git | Debouncing" />
          </Helmet>
            </Helmet>
            <Title>
                Works - Talk is cheap show me the code!
            </Title>
            <WorksMenu
                items={[
                    'react',
                    // 'angular',
                    // 'vue',
                    // 'js'
                ]}
                selected={selectedType}
                clicked={handleMenuChange}
            />
            <div className="row">
                {
                    selectedProjects.map(
                        item => <div className="column" key={item.sourceCodeLink}>
                            <WorkItem
                                {...item}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Works;
