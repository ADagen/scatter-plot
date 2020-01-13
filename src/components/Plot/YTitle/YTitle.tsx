import React from 'react';
import classNames from 'classnames';
import { screenViewSize } from 'core/constants';
import s from './YTitle.css';

export type YTitleProps = {
    text: string;
    className?: string;
}

/**
 * Подпись к вертикальной оси
 * @param {string} text
 * @param {string} [className]
 */
const YTitle: React.FC<YTitleProps> = ({
    text,
    className,
}) => (
    <text
        x={screenViewSize / 2}
        y={screenViewSize + 10}
        //y={screenViewSize - 40}
        className={classNames(className, s.root)}
        children={text}
        dominantBaseline="hanging"
        textAnchor="middle"
        transform="rotate(-90 0 1200)"
    />
);

export { YTitle };
