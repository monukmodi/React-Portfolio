import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import BgBubbles from "./components/BgBubbles";
import Profile from "./components/Profile";

import Menu from "./components/Menu";
import About from "./pages/About";

import {
    HashRouter as Router,
    Switch,
    Route,
    withRouter
} from "react-router-dom";
import Resume from "./pages/Resume";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import BackToTop from "./components/BackToTop";
import { Helmet } from 'react-helmet';

const routes = [
    { path: '/', name: 'About', Component: About },
    { path: '/resume', name: 'Resume', Component: Resume }
]

function App() {
  return (
      <>
          <BackToTop />
          <Helmet>
          <meta name="description" content="React Portfolio | Javascript Developer | Monu Kumar Modi | mkmodi | Frontend Developer | React JS Developer | Software Engineer | " />
          <meta name="author" content="Monu Kumar Modi | mkmodi | Monu Kumar"></meta>
          <meta name="keywords" content="HTML, CSS, JavaScript, React JS, React hooks, Bootstrap, Context API, Semantic UI, Redux, Git" />
          </Helmet>
        <div className="page-wrap">
            <BgBubbles />
            <Router>
                <div className="container">
                    <Menu/>
                    <Profile/>
                    <AnimatedRoutes />
                </div>
            </Router>
        </div>
      </>
  );
}

const  AnimatedRoutes = withRouter(({location}) =>
     <TransitionGroup className="transition-wrapper">
        <CSSTransition
            classNames="transition"
            timeout={1000}
            unmountOnExit
            key={location.pathname}
        >
            <Switch>
                <Route exact path="/">
                    <About/>
                </Route>
                <Route exact path="/resume">
                    <Resume/>
                </Route>
                <Route exact path="/works">
                    <Works/>
                </Route>
                {/* <Route exact path="/contact">
                    <Contact/>
                </Route> */}
            </Switch>
        </CSSTransition>
    </TransitionGroup>
);

export default App;
