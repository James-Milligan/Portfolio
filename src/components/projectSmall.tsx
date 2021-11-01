import React, {useState} from 'react';

import './projectSmall.css';

export interface smallProjectProps {
    maxCharacters: number;
    tools: string[];
    title: string;
    description: string;
    link: string;
    alternativeIcon?: string;
}

export interface toolImageProps {
    source: string;
    isHovered: boolean;
}

export function SmallProject(props: smallProjectProps) {

    const [isHovered, setHovered] = useState(false);

    let tools: JSX.Element[] = [];
    props.tools.forEach(x => {
        tools.push(
            <ToolImage source={x} isHovered={isHovered}/>
        );
    });

    return (
        <div className="smallProject__container shadow" onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={(e) => {
            e.preventDefault();
            window.open(props.link, "_blank");
            }}>
            <div className="smallProject__title" style={{width: props.maxCharacters / 1.5 + "ch"}}>
                <h2 className="smallProject__titleText">{props.title}</h2>
            </div>
            <div className="smallProject__tools">
                {tools}
                <h3 className={`smallProject__description ${isHovered ? 'inLeft' : 'outRight'}`}>{props.description}</h3>
            </div>
                <img src={`${process.env.PUBLIC_URL}/${props.alternativeIcon ? props.alternativeIcon : 'githubLogo.svg'}`} className={`smallProject__githubLogo ${isHovered ? 'outRight' : 'inLeft'}`} alt="github icon - indicates link to github repo"/>
        </div>
    )
}

export function ToolImage(props: toolImageProps) {
    return (
        <img src={`${process.env.PUBLIC_URL}/${props.source}Logo.png`} className={`smallProject__toolImage ${props.isHovered ? 'outRight' : 'inLeft'}`} alt={`${props.source}`}/>
    )
}

export default SmallProject;