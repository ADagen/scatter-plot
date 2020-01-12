import React from 'react';
import classNames from 'classnames';
import { screenViewSize } from '../../../core/constants';
import s from './Title.css';

export type TitleProps = {
    text: string;
    className?: string;
}

/**
 * Заголовок диаграммы
 */
const Title: React.FC<TitleProps> = ({
    text,
    className,
}) => (
    <text
        x={screenViewSize / 2}
        y={30}
        className={classNames(className, s.root)}
        children={text}
        dominantBaseline="hanging"
        textAnchor="middle"
    />
);

export { Title };
