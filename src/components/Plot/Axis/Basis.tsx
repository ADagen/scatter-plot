import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import s from './Axis.css';
import { Point } from '../../../dataLayer/Geometry';
import { selectExtremums, selectScales } from '../../../dataLayer/selectors';

export type BasisProps = {
    from: Point;
}

/**
 * Вывод базисных векторов (ось абсцисс, ось ординат).
 * Оси рисуются только те, которые видимы во вьюпорте.
 */
export const Basis: React.FC<BasisProps> = ({
    from,
}) => {
    const { minX, maxX, minY, maxY } = useSelector(selectExtremums);
    const { scaleX, scaleY } = useSelector(selectScales);
    const shouldRenderXBasis = minY < 0;
    const shouldRenderYBasis = minX < 0;

    const startPointTranslate = `translate(${from.x}, ${from.y})`;
    // минус перед scaleY - не опечатка, нужен для инвертирования по оси ординат
    const scaleTransform = `scale(${scaleX}, -${scaleY})`;
    const originTranslate = `translate(${-minX}, ${-minY})`;
    const transform = cx(startPointTranslate, scaleTransform, originTranslate);

    // восстановление размера текста
    const textResetTransform = `scale(${1/scaleX}, ${1/scaleY})`;

    return (
        <g className={s.root} transform={transform}>

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
                    <text
                        x={0}
                        y={0}
                        className={s.basisText}
                        children={0}
                        transform={textResetTransform}
                        alignmentBaseline="middle"
                    />
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
                        <text
                            x={0}
                            y={0}
                            dy="-3vmin"
                            dominantBaseline="central"
                            textAnchor="middle"
                            className={s.basisText}
                            transform={textResetTransform}
                            children={0}
                        />
                    </g>
                </>
            )}

        </g>
    );
};