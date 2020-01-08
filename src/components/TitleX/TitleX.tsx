import React from 'react';
import cx from 'classnames';
import s from './TitleX.css';

export type TitleXProps = {
    text: string;
    className?: string;
}

/**
 *
 * @param {string} text
 * @param {string} [className]
 */
const TitleX: React.FC<TitleXProps> = ({
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

export { TitleX };
