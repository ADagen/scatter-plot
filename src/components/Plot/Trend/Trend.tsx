import React from 'react';
import { useSelector } from 'react-redux';
import { selectTrend, selectExtremums } from '../../../dataLayer/selectors';
import { CongruentTransform } from '../../CongruentTransform';
import s from './Trend.css';

export const Trend: React.FC = () => {

    const { a, b } = useSelector(selectTrend);
    const { minX, maxX } = useSelector(selectExtremums);

    const y1 = a * minX + b;
    const y2 = a * maxX + b;

    return (
        <CongruentTransform>
            <line
                x1={minX}
                y1={y1}
                x2={maxX}
                y2={y2}
                className={s.trendLine}
                vectorEffect="non-scaling-stroke"
            />
        </CongruentTransform>
    );
};