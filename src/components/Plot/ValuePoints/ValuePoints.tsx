import React from 'react';
import { Dataset } from '../../../dataLayer/RootState';
import { ValuePoint } from './ValuePoint';
import { CongruentTransform } from '../../CongruentTransform';

export type ValuePointsProps = {
    points: Dataset;
};

/**
 * Рендерит все точки текущего датасета.
 */
export const ValuePoints: React.FC<ValuePointsProps> = ({
    points,
}) => {

    const elements = points.map(({ x, y }) => (
        <ValuePoint x={x} y={y} key={`${x}${y}`} />
    ));

    return (
        <CongruentTransform>
            { elements }
        </CongruentTransform>
    );
};