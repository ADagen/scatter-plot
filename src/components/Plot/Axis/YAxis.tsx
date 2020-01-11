import React from 'react';
import { ARROW_SVG_REF } from '../Markers/Arrow';
import { numberFormatter } from '../../../core/numberFormatter';
import { ticksOffsetsY, ticksCountY, plotViewSize, plotLegendPaddingSize } from '../../../core/constants';
import { Point } from '../../../dataLayer/Geometry';
import s from './Axis.css';

export type YAxisProps = {
    from: Point;
    min: number;
    max: number;
}

export const YAxis: React.FC<YAxisProps> = ({
    from,
    min,
    max,
}) => {

    /**
     * Разница между двумя соседними рисками на оси в мировых координатах
     */
    const tickInterval = (max - min) / ticksCountY;

    const rootTransform = `translate(${from.x}, ${from.y})`;

    return (
        <g className={s.root} transform={rootTransform}>
            <line
                // половина отступа сверху для лучшего визуального восприятия
                x2={0}
                y2={-plotViewSize - plotLegendPaddingSize/2}
                className={s.line}
                markerEnd={ARROW_SVG_REF}
                vectorEffect="non-scaling-stroke"
            />
            {
                ticksOffsetsY.map((offset, index) => (
                    <g
                        key={offset}
                        className={s.tick}
                        transform={`translate(0, -${offset})`}
                    >
                        <line x2="-20" y2="0" className={s.line} vectorEffect="non-scaling-stroke" />
                        <text x="-40" y="0" className={s.text} alignmentBaseline="middle">
                            {numberFormatter.format(min + tickInterval * index)}
                        </text>
                    </g>
                ))
            }
        </g>
    );
};