import React from 'react';

export const ARROW_ID = 'arrow';
export const ARROW_SVG_REF = `url(#${ARROW_ID})`;

export const Arrow: React.FC = () => (
    <marker
        id={ARROW_ID}
        orient="auto"
        markerWidth="4"
        markerHeight="8"
        refX="0.2"
        refY="4"
        markerUnits="strokeWidth"
    >
        <path d="M0,0 V8 L4,4 Z" fill="black" />
    </marker>
);