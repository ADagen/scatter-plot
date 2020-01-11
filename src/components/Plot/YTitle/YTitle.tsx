import React from 'react';
import cx from 'classnames';
import s from './YTitle.css';

export type YTitleProps = {
    text: string;
    className?: string;
}

/**
 *
 * @param {string} text
 * @param {string} [className]
 */
const YTitle: React.FC<YTitleProps> = ({
    text,
    className,
}) => {
    return (
        <span
            children={text}
            className={cx(className, s.root)}
        />
    );
};

export { YTitle };
