import React from 'react';
import { useSelector } from 'react-redux';
import { Point } from '../../../../dataLayer/Geometry';
import { selectScales } from '../../../../dataLayer/selectors';
import { valuePointSize } from '../../../../core/constants';
import s from './ValuePoint.css';

export type ValuePointProps = Point & {

};

/**
 * Отдельная точка (результат измерения) на графике
 */
export const ValuePoint: React.FC<ValuePointProps> = ({ x, y }) => {

    const { scaleX, scaleY } = useSelector(selectScales);
    const xOffset = valuePointSize / scaleX / 2;
    const yOffset = valuePointSize / scaleY / 2;
    const points = [
        [x, y + yOffset],
        [x + xOffset, y],
        [x, y - yOffset],
        [x - xOffset, y],
    ].map(pair => pair.join(' ')).join(', ');

    return (
        <polygon
            className={s.root}
            points={points}
        />
        // <rect
        //     x={x}
        //     y={y}
        //     width={valuePointSize / scaleX}
        //     height={valuePointSize / scaleY}
        //     className={s.root}
        //     vectorEffect="non-scaling-stroke"
        // />
    );
};
