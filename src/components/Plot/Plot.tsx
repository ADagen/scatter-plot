import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Title } from './Title';
import { XTitle } from './XTitle';
import { YTitle } from './YTitle';
import {
    selectPoints,
    selectExtremums,
    selectParameterValues,
    selectTitles,
} from '../../dataLayer/selectors';

export type PlotProps = {

};

export const Plot: React.FC<PlotProps> = () => {

    const points = useSelector(selectPoints);
    const { minX, maxX, minY, maxY } = useSelector(selectExtremums);
    const { a, b } = useSelector(selectParameterValues);
    const { title, xTitle, yTitle } = useSelector(selectTitles);

    return (
        <div>
            {title && <Title text={title} />}
            {xTitle && <XTitle text={xTitle} />}
            {yTitle && <YTitle text={yTitle} />}
            <br /><br />

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