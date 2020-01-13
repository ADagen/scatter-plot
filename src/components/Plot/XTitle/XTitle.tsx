import React from 'react';
import classNames from 'classnames';
import { screenViewSize } from 'core/constants';
import s from './XTitle.css';

export type XTitleProps = {
    text: string;
    className?: string;
}

/**
 * Подпись к оси абсцисс
 * @param {string} text
 * @param {string} [className]
 */
const XTitle: React.FC<XTitleProps> = ({
    text,
    className,
}) => (
    <text
        x={screenViewSize / 2}
        y={screenViewSize - 40}
        className={classNames(className, s.root)}
        children={text}
        dominantBaseline="hanging"
        textAnchor="middle"
    />
);

export { XTitle };
