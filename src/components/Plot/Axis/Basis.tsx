import React from 'react';
import { useSelector } from 'react-redux';
import s from './Axis.css';
import { CongruentTransform } from '../../CongruentTransform';
import { NonScalingText } from '../../NonScalingText';
import { selectExtremums } from '../../../dataLayer/selectors';

/**
 * Вывод базисных векторов (ось абсцисс, ось ординат).
 * Оси рисуются только те, которые видимы во вьюпорте.
 */
export const Basis: React.FC = () => {
    const { minX, maxX, minY, maxY } = useSelector(selectExtremums);
    const shouldRenderXBasis = minY < 0;
    const shouldRenderYBasis = minX < 0;

    return (
        <CongruentTransform className={s.root}>

            {/* Вывод оси абсцисс и подписи (нолик) */}
            {shouldRenderXBasis && (
                <>
                    <line
                        x1={minX}
                        y1={0}
                        x2={maxX}
                        y2={0}
                        className={s.basisLine}
                        vectorEffect="non-scaling-stroke"
                        strokeDasharray="1 3"
                    />
                    <g transform={`translate(${minX}, 0)`}>
                        <NonScalingText
                            x={0}
                            y={0}
                            dx="1vmin"
                            className={s.basisText}
                            children={0}
                            alignmentBaseline="middle"
                        />
                    </g>
                </>
            )}

            {/* Вывод оси ординат и подписи (нолик) */}
            {shouldRenderYBasis && (
                <>
                    <line
                        x1={0}
                        y1={minY}
                        x2={0}
                        y2={maxY}
                        className={s.basisLine}
                        vectorEffect="non-scaling-stroke"
                        strokeDasharray="1 3"
                    />
                    <g transform={`translate(0, ${minY})`}>
                        <NonScalingText
                            x={0}
                            y={0}
                            dy="2vmin"
                            dominantBaseline="central"
                            textAnchor="middle"
                            className={s.basisText}
                            children={0}
                        />
                    </g>
                </>
            )}

        </CongruentTransform>
    );
};