import React, {useRef, useState} from 'react';
import './App.css';
import './AppMedia.css';

import SmallProject from './components/projectSmall';
import LargeProject from './components/projectLarge';
import SkillContainer from './components/skillContainer';

function App() {
    const [aboutMeVisible, setAboutMeVisible] = useState(false);
    const projectsRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    setTimeout(function(){
        document.body.className="";
    },700);

    return (
        <div className="App">
            <div className="headerContainer">

                <div className="headerContainer__leftLinks link">
                    <h3 className="headerContainer__leftLinks link" onMouseUp={() => setAboutMeVisible(!aboutMeVisible)}>About Me</h3>
                    <h3 onMouseUp={() => {
                        projectsRef.current.scrollIntoView({ behavior: 'smooth' })
                    }}>Projects</h3>
                </div>
                <h3 className="link" onMouseUp={() => {
                    window.open('mailto:james@omnant.co.uk?subject=Enquiry%20from%20portfolio')
                }}>Contact</h3>
            </div>

            <div className="introContainer">
                <div className="introContainer__bar shadow">
                    <img src={`${process.env.PUBLIC_URL}/james.png`} className="introContainer__image" />
                    <div className="introContainer__text">
                        <div className="introContainer__nameContainer">
                            <div className="introContainer__nameHighlight"/>
                            <h1>James Milligan</h1>
                        </div>
                        <h2>Software Engineer<br />&amp; Data Analyst</h2>
                    </div>
                </div>
            </div>

            <div className={`aboutMeContainer ${aboutMeVisible ? 'expand' : 'collapse'}`}>
                <h3 className="aboutMeContainer__text">
                    <b>Hi, my name is James Milligan and im a focused and driven full stack software engineer looking to further develop his career through working with new technologies and concepts. 
                        Confident in analysing data sets and building strategy, constantly finding better ways to approach challenges.
                    </b>
                </h3>
            </div>

            <div className="skillsContainer">
                <SkillContainer imageURL="typescriptLogo" years={2}/>
                <SkillContainer imageURL="golangLogo" years={1.5}/>
                <SkillContainer imageURL="pythonLogo" years={2}/>
                <SkillContainer imageURL="reactDarkLogo" years={1.5}/>
                <SkillContainer imageURL="reactDarkLogo" years={1.5}/>
                <SkillContainer imageURL="cssLogo" years={2}/>
                <SkillContainer imageURL="awsDarkLogo" years={2}/>
                <SkillContainer imageURL="azureLogo" years={2}/>
            </div>

            <div className="projectsContainer" ref={projectsRef}>
                <SmallProject maxCharacters={20} 
                    tools={[
                        'typescript',
                        'react',
                    ]}
                    title="Debot Depop Assistant"
                    description="Assistant application for sellers using the Depop platform"
                    link="https://apps.apple.com/us/app/debot/id1550503962"
                    alternativeIcon="appleLogo.svg"
                />
                <SmallProject maxCharacters={20} 
                    tools={[
                        'golang',
                        'aws'
                    ]}
                    title="Dystributed Lock for DynamoDB"
                    description="Distributed lock for multiple records on dynamoDB"
                    link="https://github.com/James-Milligan/DistributedLockAWS"
                />
                <SmallProject maxCharacters={20} 
                    tools={[
                        'golang',
                        'aws',
                    ]}
                    title="Time Series Rule Engine"
                    description="Instream data analysis tool"
                    link="https://github.com/James-Milligan/TimeSeriesRuleEngine"
                />
                <SmallProject maxCharacters={20} 
                    tools={[
                        'typescript',
                        'golang',
                    ]}
                    title="Algorithms"
                    description="Assortment of algorithms for various use cases"
                    link="https://github.com/James-Milligan/Algorithms"
                />
                <SmallProject maxCharacters={20} 
                    tools={[
                        'typescript',
                        'react',
                        'aws',
                    ]}
                    title="Portfolio"
                    description="This website"
                    link="https://github.com/James-Milligan/Portfolio"
                />
            </div>
        </div>
    );
}

export default App;
