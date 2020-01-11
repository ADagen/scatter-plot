import React from 'react';
import cx from 'classnames';
import s from './XTitle.css';

export type XTitleProps = {
    text: string;
    className?: string;
}

/**
 *
 * @param {string} text
 * @param {string} [className]
 */
const XTitle: React.FC<XTitleProps> = ({
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

export { XTitle };
