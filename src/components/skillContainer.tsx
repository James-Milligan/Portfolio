import React, { useEffect, useState } from 'react';

import './skillContainer.css';

export interface skillContainerProps {
    imageURL: string;
    years: number;
}

export function SkillContainer(props: skillContainerProps) {
    const [isHovered, setHovered] = useState(false);

    return (
        <div className="skillsContainer__skillContainer shadow" onMouseOver={() => setHovered(true)} onMouseOut={() => {setHovered(false)}}>
            <img className={`skillsContainer__skillIcon ${isHovered ? 'outRight' : 'inLeft'}`} src={`${process.env.PUBLIC_URL}/${props.imageURL}.png`} alt="Python Logo"/>
            <div className={`skillsContainer__yearsText ${isHovered ? 'inLeft' : 'outRight'}`} style={{fontWeight:'bold'}}>
                <h2>{props.years}</h2>
                <h3 style={{fontWeight:200}}>
                    <br/>{props.years > 1 ? 'Years' : 'Year'}
                </h3>
            </div>
        </div>
    )
}

export default SkillContainer;