import React from 'react';
import { ARROW_SVG_REF } from '../Markers/Arrow';
import { numberFormatter } from '../../../core/numberFormatter';
import { ticksOffsetsX, ticksCountX, plotViewSize, plotLegendPaddingSize } from '../../../core/constants';
import { Point } from '../../../dataLayer/Geometry';
import s from './Axis.css';

export type XAxisProps = {
    from: Point;
    min: number;
    max: number;
}

export const XAxis: React.FC<XAxisProps> = ({
    from,
    min,
    max,
}) => {

    /**
     * Разница между двумя соседними рисками на оси в мировых координатах
     */
    const tickInterval = (max - min) / ticksCountX;

    const rootTransform = `translate(${from.x}, ${from.y})`;

    return (
        <g className={s.root} transform={rootTransform}>
            <line
                // половина отступа справа для лучшего визуального восприятия
                x2={plotViewSize + plotLegendPaddingSize / 2}
                y2="0"
                className={s.line}
                markerEnd={ARROW_SVG_REF}
                vectorEffect="non-scaling-stroke"
            />
            {
                ticksOffsetsX.map((offset, index) => (
                    <g
                        key={offset}
                        className={s.tick}
                        transform={`translate(${offset}, 0)`}
                    >
                        <line x2="0" y2="20" className={s.line} vectorEffect="non-scaling-stroke" />
                        <text x="0" y="40" className={s.text} alignmentBaseline="middle">
                            {numberFormatter.format(min + tickInterval * index)}
                        </text>
                    </g>
                ))
            }
        </g>
    );
};