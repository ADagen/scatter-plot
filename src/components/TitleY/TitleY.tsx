import React from 'react';
import cx from 'classnames';
import s from './TitleY.css';

export type TitleYProps = {
    text: string;
    className?: string;
}

/**
 *
 * @param {string} text
 * @param {string} [className]
 */
const TitleY: React.FC<TitleYProps> = ({
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

export { TitleY };
