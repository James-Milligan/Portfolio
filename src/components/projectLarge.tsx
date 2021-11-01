import React from 'react';

import './projectLarge.css';

export interface largeProjectProps {
    maxCharacters: number;
    tools: string[];
    title: string;
    image1: string;
    image2: string;
    image1Height: string;
    image2Height: string;
    description: string;
}

export interface toolImageProps {
    source: string;
}

export function LargeProject(props: largeProjectProps) {

    let tools: JSX.Element[] = [];
    props.tools.forEach(x => {
        tools.push(
            <ToolImage source={x}/>
        );
    });

    return (
        <div className="largeProject__container shadow">
            <div className="largeProject__leftContainer">
                <div className="largeProject__title" style={{width: props.maxCharacters + "ch"}}>
                    <h2 style={{fontSize: '2rem'}}>{props.title}</h2>
                </div>
                <div className="largeProject__tools">
                    {tools}
                </div>
            </div>
            <img className={"largeProject__image1"} src={`${process.env.PUBLIC_URL}/${props.image1}.png`} style={{height: props.image1Height}} alt={props.image1}/>
            <img className={"largeProject__image2"} src={`${process.env.PUBLIC_URL}/${props.image2}.png`} style={{height: props.image2Height}} alt={props.image2}/>
            <div className="largeProject__descriptionContainer">
                <span>{props.description}</span>
            </div>
        </div>
    )
}

export function ToolImage(props: toolImageProps) {
    return (
        <img src={`${process.env.PUBLIC_URL}/${props.source}Logo.png`} className="largeProject__toolImage" alt={`${props.source}`}/>
    )
}

export default LargeProject;