import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Arrow } from './Markers/Arrow';
import { Title } from './Title';
import { XTitle } from './XTitle';
import { YTitle } from './YTitle';
import { XAxis, YAxis, Basis } from './Axis';
import { startPoint, screenViewSize } from '../../core/constants';
import {
    selectPoints,
    selectExtremums,
    selectParameterValues,
    selectTitles,
} from '../../dataLayer/selectors';
import s from './Plot.css';

export type PlotProps = {

};

export const Plot: React.FC<PlotProps> = () => {

    const points = useSelector(selectPoints);
    const { minX, maxX, minY, maxY } = useSelector(selectExtremums);
    const { a, b } = useSelector(selectParameterValues);
    const { title, xTitle, yTitle } = useSelector(selectTitles);

    const worldViewBox = `${minX} ${minY} ${maxX} ${maxY}`;
    const aspectRatio = (maxX - minX) / (maxX - minY);
    const screenViewBox = `0 0 ${screenViewSize} ${screenViewSize}`;

    return (
        <div className={s.root}>
            {title && <Title text={title} />}
            {xTitle && <XTitle text={xTitle} />}
            {yTitle && <YTitle text={yTitle} />}

            <div className={s.plotContainer}>
                <svg viewBox={screenViewBox}>
                    <defs>
                        <Arrow />
                    </defs>

                    <Basis from={startPoint} />
                    <XAxis from={startPoint} min={minX} max={maxX} />
                    <YAxis from={startPoint} min={minY} max={maxY} />
                </svg>
            </div>

            <div>
                minX={minX}, maxX={maxX}, minY={minY}, maxY={maxY}
            </div>
            <br />

            <div>
                y = {a} * x + {b}
            </div>
            <br />

            { points.map(({ x, y }) => (
                <div key={`${x}${y}`}>
                    {x} {y}
                </div>
            )) }
        </div>
    );
};