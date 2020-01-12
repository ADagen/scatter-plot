import React from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { Arrow } from './Markers/Arrow';
import { Title } from './Title';
import { XTitle } from './XTitle';
import { YTitle } from './YTitle';
import { ValuePoints } from './ValuePoints';
import { Trend } from './Trend';
import { XAxis, YAxis, Basis } from './Axis';
import { startPoint, screenViewSize } from '../../core/constants';
import { selectPoints, selectExtremums, selectTrend, selectTitles } from '../../dataLayer/selectors';
import s from './Plot.css';

export type PlotProps = {

};

/**
 * Компонент-контейнер диаграммы
 */
export const Plot: React.FC<PlotProps> = () => {

    const points = useSelector(selectPoints);
    const { minX, maxX, minY, maxY } = useSelector(selectExtremums);
    const { a, b } = useSelector(selectTrend);
    const { title, xTitle, yTitle } = useSelector(selectTitles);

    const screenViewBox = `0 0 ${screenViewSize} ${screenViewSize}`;

    return (
        <div className={s.root}>

            <div className={s.plotContainer}>
                <svg viewBox={screenViewBox}>
                    <defs>
                        <Arrow />
                    </defs>

                    <Basis />
                    <XAxis from={startPoint} min={minX} max={maxX} />
                    <YAxis from={startPoint} min={minY} max={maxY} />
                    <ValuePoints points={points} />
                    <Trend />

                    {title && <Title text={title} />}
                    {xTitle && <XTitle text={xTitle} />}
                    {yTitle && <YTitle text={yTitle} />}
                </svg>
            </div>

            <div className={s.textData}>

                <div className={s.section}>
                    <mark>minX</mark>={minX},
                    <mark>maxX</mark>={maxX},
                    <mark>minY</mark>={minY},
                    <mark>maxY</mark>={maxY}
                </div>

                <div className={s.section}>
                    Тренд: <b>y</b> = {a} * <b>x</b> + {b}
                </div>

                <div className={classNames(s.section, s.dataset)}>
                    { points.map(({ x, y }) => (
                        <div key={`${x}${y}`} className={s.dataValue}>
                            {x} {y}
                        </div>
                    )) }
                </div>

            </div>
        </div>
    );
};