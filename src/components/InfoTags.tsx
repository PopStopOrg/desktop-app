import React from 'react';
import '../styles/InfoTags.css';

interface InfoTagsProps {
    number: number;
    description: string;
    color?: string;
}

const InfoTags: React.FC <InfoTagsProps> = ({number, description, color = "#f0f0f0"}) => {
    return (
    <div className="info-tag" style={{ backgroundColor: color }}>
        <span className="info-tag-number">{number}</span>
        <span className="info-tag-description">{description}</span>
    </div>
    );
};

export default InfoTags;